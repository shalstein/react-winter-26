import Tasks from "./Tasks";
import { AddTaskForm } from "./AddTaskForm";
import tasksTodo from "./tasksTodo";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(tasksTodo);
  const addTask = function (name) {
    const newTask = { name: name, completed: false };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };
  return (
    <>
      <h1>Todo List Example</h1>
      <AddTaskForm addTask={addTask} />
      <Tasks tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
