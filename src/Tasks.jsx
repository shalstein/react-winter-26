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
