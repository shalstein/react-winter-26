import { useState } from "react";
import TaskList from "./TaskList";
import CounterButton from "./CounterButton";
import MessageSender from "./MessageSender";
import TrafficLight from "./TrafficLight";

function App() {
  const tasks = [
    { name: "Go Shopping", completed: true },
    { name: "Exercise", completed: false },
    { name: "Improve Video", completed: false },
    { name: "Homework", completed: true },
  ];
  return (
    <>
      <TrafficLight />
      <div>
        <CounterButton />
        <MessageSender />
      </div>
    </>
  );
}

export default App;
