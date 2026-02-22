import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyGreeter from "./Greeter";
import { TodoList } from "./TodoList";
import ADefaultImport from "./TodoList";
function App() {
  return (
    <div>
      <TodoList />
    </div>
  );
}

export default App;
