export default function TodoListTask(props) {
  const todoListTask = props.task;

  return (
    <li>
      <div>
        <span>{todoListTask.name}</span>
      </div>
    </li>
  );
}
