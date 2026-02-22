function TodoList() {
  const itemsToBuy = ["Coffee", "Tea", "Milk"];
  const name = "Shalom";
  return (
    <>
      <h1>{name}'s Shopping List</h1>
      <ol>
        <li id="itemid" className="item">
          {itemsToBuy[0]}
        </li>
        <li>{itemsToBuy[1]}</li>
        <li>{itemsToBuy[2]}</li>
      </ol>
    </>
  );
}

function DrinkList() {
  React.createElement("h1", null, "My Shoping List");
  return React.createElement(
    "ol",
    null,
    React.createElement("li", { className: "item", id: "itemid" }, "Coffee"),
    React.createElement("li", null, "Tea"),
    React.createElement("li", null, "Milk"),
  );
}

function Example() {
  return <h1>Example</h1>;
}

export { TodoList };
export default Example;
