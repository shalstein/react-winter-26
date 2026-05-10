import { useEffect, useState } from "react";
export default function TodoList({ userId }) {
  const [usersTodos, setUsersTodos] = useState([
    {
      userId: 1,
      id: 0,
      title: "",
      completed: false,
    },
  ]);

  useEffect(() => {
    let stop = false;
    async function getTodos() {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}/todos`,
      );
      const json = await result.json();
      if (!stop) {
        setUsersTodos(json);
      }
      return () => (stop = true);
    }

    getTodos();
  }, [userId]);

  function LargeCalculation() {
    setTimeout(() => console.log("finshied our pretend heavy function"), 3000);
  }
  return (
    <>
      <h1 id="h1">User {userId}'s Todo List</h1>
      <ol>
        {usersTodos.map((task) =>
          task.completed ? (
            <li key={task.id}>
              <del>{task.title}</del>
            </li>
          ) : (
            <li key={task.id}>{task.title}</li>
          ),
        )}
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
