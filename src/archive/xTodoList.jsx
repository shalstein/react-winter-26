export default function TodoList(props) {
  const user = props.user[0];
  return (
    <>
      <h1 id="h1">{user.name}'s Shopping List</h1>
      <ol style={user.theme.listTheme}>
        <li style={user.theme.itemTheme} id="itemid" className="item">
          {user.itemsToBuy[0]}
        </li>
        <li style={user.theme.listTheme}>
          {" "}
          {user.itemsToBuy[0].isCompleted ? (
            <del>user.itemsToBuy[0].name</del>
          ) : (
            user.itemsToBuy[0].name
          )}
        </li>
      </ol>
    </>
  );
}

// listTheme: {
//   backgroundColor: "#f4f4f4",
//   padding: "20px",
//   borderRadius: "8px",
//   width: "300px",
// },
// function DrinkList() {
//   React.createElement("h1", null, "My Shoping List");
//   return React.createElement(
//     "ol",
//     null,
//     React.createElement("li", { className: "item", id: "itemid" }, "Coffee"),
//     React.createElement("li", null, "Tea"),
//     React.createElement("li", null, "Milk"),
//   );
// }

// function Example() {
//   return <h1>Example</h1>;
// }

// export { TodoList };
// export default Example;
