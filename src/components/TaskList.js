function TaskList({ list, remove }) {
  return (
    <>
      <h1>My To-Do List</h1>
      <ul>
        {list.map((task) => (
          <TaskItem key={task} task={task} remove={remove} />
        ))}
      </ul>
      <Stats amount={list.length} />
    </>
  );
}

function TaskItem({ task, remove }) {
  return (
    <li>
      <button onClick={remove}>X</button>
      <p>{task}</p>
      <hr></hr>
      <form>
        <label className="radio">
          <input type="radio" name="task-progress" value={"in progress"} />
          <span>In Progress</span>
        </label>
        <label className="radio">
          <input type="radio" name="task-progress" value={"complete"} />
          <span>Complete</span>
        </label>
      </form>
    </li>
  );
}

function Stats({ amount, inProgress, complete }) {
  return (
    <div id="stats">
      <p>You have {amount} tasks.</p>
      <p>In Progress: {inProgress}</p>
      <p>Complete: {complete}</p>
    </div>
  );
}

export default TaskList;
