import { useState } from "react";
import MenuNav from "./MenuNav";
import TaskBox from "./TaskBox";
import TaskList from "./TaskList";
import TrashList from "./TrashList";

function Main() {
  const [openTaskBox, setOpenTaskBox] = useState(false);
  const [viewTaskList, setViewTaskList] = useState(true);
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [trashList, setTrashList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task !== "") {
      addTask(task);
    }
    setTask("");
    setOpenTaskBox(false);
    setViewTaskList(true);
  };

  const addTask = (target) => {
    if (taskList.some((task) => task.toLowerCase() === target.toLowerCase())) {
      alert("Your task already exists in list.");
    } else {
      setTaskList((prev) => [...prev, target]);
    }
  };

  const handleRemoveTask = (event) => {
    const target = event.target.parentNode.querySelector("p").innerText;
    setTaskList((prev) => prev.filter((task) => task !== target));
    addTrash(target);
  };

  const addTrash = (target) => {
    if (trashList.every((item) => item.toLowerCase() !== target.toLowerCase())) {
      setTrashList((prev) => [...prev, target]);
    }
  };

  const handleRemoveTrash = (event) => {
    const target = event.target.parentNode.querySelector("p").innerText;
    setTrashList((prev) => prev.filter((item) => item !== target));
  };

  const handleRestoreTask = (event) => {
    const target = event.target.parentNode.querySelector("p").innerText;
    addTask(target);
    setTrashList((prev) => prev.filter((item) => item !== target));
  };

  return (
    <main>
      <MenuNav
        open={() => setOpenTaskBox((prev) => !prev)}
        viewTask={() => setViewTaskList(true)}
        viewTrash={() => setViewTaskList(false)}
      />

      {openTaskBox && (
        <TaskBox
          close={() => {
            setOpenTaskBox(false);
            setTask("");
          }}
          submit={handleSubmit}
          input={task}
          change={(event) => setTask(event.target.value)}
        />
      )}

      <section>
        {viewTaskList ? (
          <TaskList list={taskList} remove={handleRemoveTask} />
        ) : (
          <TrashList list={trashList} remove={handleRemoveTrash} restore={handleRestoreTask} />
        )}
      </section>
    </main>
  );
}

export default Main;
