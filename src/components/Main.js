import { useState } from "react";

function Main() {
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleSubmit = (event) => {
    if (task !== "") {
      setTaskList((prev) => [...prev, task]);
      setTask("");
    }
    event.preventDefault();
    setOpen(false);
  };

  return (
    <main>
      <nav>
        <ul>
          <li>Search</li>
          <li>
            <button id="addTask-btn" onClick={() => setOpen((prev) => !prev)}>
              Create new task
            </button>
          </li>
          <li>Import</li>
          <li>Trash</li>
        </ul>
      </nav>

      {open && (
        <div id="display">
          <div id="new-task-container">
            <button
              id="close-btn"
              onClick={() => {
                setOpen(false);
                setTask("");
              }}
            >
              x close
            </button>
            <form onSubmit={(event) => handleSubmit(event)}>
              <label>New Task</label>
              <input
                type="text"
                value={task}
                placeholder="what to do?..."
                onChange={(event) => setTask(event.target.value)}
              />
              <button id="add-btn" type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
      )}

      <section>
        <ul>
          {taskList.map((task) => (
            <li>
              {task.toLowerCase()}
              <button onClick={(event) => event.target.parentNode.remove()}>Remove</button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
