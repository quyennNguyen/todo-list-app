import "./css/App.css";
import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import TaskBox from "./components/TaskBox";

function App() {
  const [menuNav, setMenuNav] = useState(true);
  const [taskBox, setTaskBox] = useState(false);
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
    setTaskBox(false);
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
    if (
      trashList.every((item) => item.toLowerCase() !== target.toLowerCase())
    ) {
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
    <>
      <Header
        menu={menuNav}
        openNav={() => setMenuNav((prev) => !prev)}
        openTaskBox={() => setTaskBox((prev) => !prev)}
        viewTask={() => setViewTaskList(true)}
        viewTrash={() => setViewTaskList(false)}
      />
      {taskBox && (
        <TaskBox
          closeTaskBox={() => {
            setTaskBox(false);
            setTask("");
          }}
          submit={handleSubmit}
          input={task}
          change={(event) => setTask(event.target.value)}
        />
      )}
      <Main
        viewTaskList={viewTaskList}
        taskList={taskList}
        trashList={trashList}
        removeTask={handleRemoveTask}
        restoreTask={handleRestoreTask}
        removeTrash={handleRemoveTrash}
      />
      <Footer />
    </>
  );
}

export default App;
