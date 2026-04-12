import { useState } from "react";

export default function Task({ task, index, toggleCompleted, updateTask }) {
  const [editable, setIsEditable] = useState(false);
  const [taskInput, setTaskInput] = useState(task.name);
  return (
    <li key={index}>
      {task.completed ? (
        <del>{task.name}</del>
      ) : editable ? (
        <input
          onDoubleClick={() => {
            updateTask(taskInput);
            setIsEditable(!editable);
          }}
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
      ) : (
        <span onClick={() => setIsEditable(!editable)}>{task.name}</span>
      )}{" "}
      <input
        type="checkbox"
        onChange={toggleCompleted}
        checked={task.completed}
      />
    </li>
  );
}
