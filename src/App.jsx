import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyGreeter from "./Greeter";
import { TodoList } from "./TodoList";
import ADefaultImport from "./TodoList";
import Gallery from "./Gallery";
function App() {
  return (
    <div>
      <TodoList />
      <Gallery />
    </div>
  );
}

export default App;
