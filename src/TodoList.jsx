export default function TodoList() {
  const name = "John";
  return (
    <>
      <h1>{name}'s Todo List</h1>
      <ul
        style={{
          backgroundColor: "black",
          color: "pink",
        }}
      >
        <li>Go shopping</li>

        <li>Exercise</li>

        <li>Improve Video</li>
      </ul>
    </>
  );
}
