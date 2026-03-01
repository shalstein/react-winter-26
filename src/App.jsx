import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyGreeter from "./Greeter";
import TodoList from "./TodoList";
import ADefaultImport from "./TodoList";
import Gallery from "./Gallery";
function App() {
  const items = [
    { name: "Cups", isCompleted: true },
    { name: "Kiwi", isCompleted: true },
    { name: "Chips", isCompleted: false },
  ];
  const shalom = [
    {
      name: "Shalom",
      itemsToBuy: [
        { name: "Coffee", isCompleted: false },
        { name: "Tea", isCompleted: false },
        { name: "Milk", isCompleted: false },
      ],
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
    },
  ];
  const jane = [
    {
      name: "Jane",
      itemsToBuy: [
        { name: "Cups", isCompleted: true },
        { name: "Kiwi", isCompleted: true },
        { name: "Chips", isCompleted: false },
      ],
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
    },
  ];
  return (
    <div>
      <TodoList items={items} user={shalom} />
      <TodoList items={items} user={jane} />
      <Gallery />
    </div>
  );
}

export default App;
