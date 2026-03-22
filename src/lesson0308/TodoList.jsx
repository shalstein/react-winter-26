import TodoListTask from "./TodoListTask";

export default function TodoList(props) {
  let tasks = props.tasks;

  return (
    <ol>
      {tasks.map((task, index) => {
        return <TodoListTask task={task} key={index} />;
      })}
    </ol>
  );
}
