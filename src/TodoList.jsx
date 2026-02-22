function TodoList(props) {
  const user = props.user;
  return (
    <>
      <h1 id="h1" className={user.name}>
        {user.name}'s Shopping List
      </h1>
      <ol style={user.theme.listTheme}>
        <li style={user.theme.itemTheme} id="itemid" className="item">
          {user.itemsToBuy[0]}
        </li>
        <li style={user.theme.itemTheme}>{user.itemsToBuy[1]}</li>
        <li style={user.theme.itemTheme}>{user.itemsToBuy[2]}</li>
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
