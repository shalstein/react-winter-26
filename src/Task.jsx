export default function Task({ task, index, toggleCompleted }) {
  return (
    <li key={index}>
      <span>{task.completed ? <del>{task.name}</del> : task.name}</span>{" "}
      <input
        type="checkbox"
        onChange={toggleCompleted}
        checked={task.completed}
      />
    </li>
  );
}
