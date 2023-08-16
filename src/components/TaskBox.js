function TaskBox({closeTaskBox, submit, input, change}) {
  return (
    <div id="task-box">
      <div id="new-task-container">
        <button id="close-btn" onClick={closeTaskBox}>
          x close
        </button>
        <form onSubmit={submit}>
          <label>New Task</label>
          <input
            type="text"
            value={input}
            placeholder="what to do?..."
            onChange={change}
          />
          <button id="add-btn" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskBox;
