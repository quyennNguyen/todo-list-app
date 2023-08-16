import TaskList from "./TaskList";
import TrashList from "./TrashList";

function Main({
  viewTaskList,
  taskList,
  trashList,
  removeTask,
  restoreTask,
  removeTrash,
}) {
  return (
    <main>
      {viewTaskList ? (
        <TaskList list={taskList} remove={removeTask} />
      ) : (
        <TrashList
          list={trashList}
          remove={removeTrash}
          restore={restoreTask}
        />
      )}
    </main>
  );
}

export default Main;
