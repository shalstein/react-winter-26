export default function TodoListTask(props) {
  const todoListTask = props.task;
  return (
    <li
      onClick={() => {
        const currentColor = document.body.style.backgroundColor;
        if (currentColor === "black") {
          document.body.style.backgroundColor = "aqua";
        } else {
          document.body.style.backgroundColor = "black";
        }
      }}
    >
      <div>
        <span>
          {todoListTask.completed ? (
            <del>{todoListTask.name}</del>
          ) : (
            <>{todoListTask.name}</>
          )}
        </span>
      </div>
    </li>
  );
}
