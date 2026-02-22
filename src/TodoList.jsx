function TodoList() {
  const itemsToBuy = ["Coffee", "Tea", "Milk"];
  const name = "Shalom";
  const liStyle = {
    color: "purple",
    fontWeight: "bold",
    marginBottom: "8px",
  };
  return (
    <>
      <h1>{name}'s Shopping List</h1>
      <ol
        style={{
          backgroundColor: "#f4f4f4",
          padding: "20px",
          borderRadius: "8px",
          width: "300px",
        }}
      >
        <li style={liStyle} id="itemid" className="item">
          {itemsToBuy[0]}
        </li>
        <li style={liStyle}>{itemsToBuy[1]}</li>
        <li style={liStyle}>{itemsToBuy[2]}</li>
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
