import Task from "./Task";
export default function Tasks({ setTasks, tasks }) {
  return (
    <>
      <ul>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            index={index}
            updateTask={(taskName) => {
              const newTasks = [...tasks];
              newTasks[index].name = taskName;
              setTasks(newTasks);
            }}
            toggleCompleted={function () {
              const newTasks = [...tasks];
              newTasks[index].completed = !task.completed;
              setTasks(newTasks);
            }}
          />
        ))}
      </ul>
    </>
  );
}
