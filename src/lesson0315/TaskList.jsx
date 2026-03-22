export default function TaskList({ tasks }) {
  const tasksJsx = tasks.map((task) =>
    task.completed ? (
      <del>
        <li>{task.name}</li>
      </del>
    ) : (
      <li>{task.name}</li>
    ),
  );
  return <ol>{tasksJsx}</ol>;
}
