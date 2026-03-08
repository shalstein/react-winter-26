import React from "react";

export default function TodoListTask(props) {
  const todoListTask = props.task;

  let taskSpan = <>{todoListTask.name}</>;
  if (todoListTask.completed) {
    taskSpan = <del>{todoListTask.name}</del>;
  }

  return (
    <li>
      <div>
        <span>{taskSpan}</span>
      </div>
    </li>
  );
}
