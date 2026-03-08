import TodoListTask from "./TodoListTask";

export default function TodoList(props) {
  let tasks = props.tasks;
  let task1 = tasks[0];
  let task2 = tasks[1];
  let task3 = tasks[2];
  return (
    <ol>
      <TodoListTask task={task1} />
      <TodoListTask task={task2} />
      <TodoListTask task={task3} />
    </ol>
  );
}
