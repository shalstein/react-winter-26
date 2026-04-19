import { useState } from "react";

function AddTaskForm({ addTask }) {
  const [newTask, setNewTask] = useState("");
  return (
    <label>
      Add a Task{" "}
      <input value={newTask} onInput={(e) => setNewTask(e.target.value)} />
      <button
        style={{ marginLeft: "0.3em" }}
        onClick={() => {
          addTask(newTask);
          setNewTask("");
        }}
      >
        Add
      </button>
    </label>
  );
}

export { AddTaskForm };
