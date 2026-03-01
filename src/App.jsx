import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyGreeter from "./Greeter";
import TodoList from "./TodoList";
import ADefaultImport from "./TodoList";
import Gallery from "./Gallery";
import Profile from "./Profile";
function App() {
  return (
    <div>
      <Profile />
      <Profile />
      <Profile />
      <Profile />
    </div>
  );
}

export default App;
