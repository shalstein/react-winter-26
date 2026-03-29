import { useState } from "react";

export default function CounterButton({ children }) {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <button onClick={incrementCounter}>Count: {counter}</button>
      {children}
    </>
  );
}
