function TodoList() {
  const itemsToBuy = ["Coffee", "Tea", "Milk"];

  return (
    <>
      <h1>My Shopping List</h1>
      <ol>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ol>
    </>
  );
}

function DrinkList() {
  React.createElement("h1", null, "My Shoping List");
  return React.createElement(
    "ol",
    null,
    React.createElement("li", null, "Coffee"),
    React.createElement("li", null, "Tea"),
    React.createElement("li", null, "Milk"),
  );
}

function Example() {
  return <h1>Example</h1>;
}

export { TodoList };
export default Example;
