import "./App.css";
import TodoList from "./TodoList";

function App() {
  const tasks = [
    { name: "Go Shopping", completed: true },
    { name: "Exercise", completed: false },
    { name: "Improve Video", completed: false },
    { name: "Homework", completed: true },
  ];
  return <TodoList tasks={tasks} />;
}

export default App;
