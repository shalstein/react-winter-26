import { useState } from "react";

export default function CounterButton() {
  const [counter, setCounter] = useState(0);
  
  const incrementCounter = () => {
    setCounter(counter + 5);
    setTimeout(() => {
      alert(counter);
    }, 5000);
  };
  return (
    <>
      <button onClick={incrementCounter}>Count: {counter}</button>
    </>
  );
}
