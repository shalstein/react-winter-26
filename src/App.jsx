import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyGreeter from "./Greeter";
import { TodoList } from "./TodoList";
import ADefaultImport from "./TodoList";
import Gallery from "./Gallery";
function App() {
  const shalom = {
    name: "Shalom",
    itemsToBuy: ["Coffee", "Tea", "Milk"],
    theme: {
      itemTheme: {
        color: "purple",
        fontWeight: "bold",
        marginBottom: "8px",
      },
      listTheme: {
        backgroundColor: "#f4f4f4",
        padding: "20px",
        borderRadius: "8px",
        width: "300px",
      },
    },
  };
  const jane = {
    name: "Jane",
    itemsToBuy: ["Cups", "Kiwi", "Chips"],
    theme: {
      itemTheme: {
        color: "aqua",
        fontWeight: "bold",
        marginBottom: "8px",
      },
      listTheme: {
        backgroundColor: "#f4f4f4",
        padding: "20px",
        borderRadius: "8px",
        width: "300px",
      },
    },
  };
  return (
    <div>
      <TodoList user={shalom} />
      <TodoList user={jane} />
      <Gallery />
    </div>
  );
}

export default App;
