import { useState } from "react";

export default function CounterButton({ hidden }) {
  const [count, setCount] = useState(0);
  return (
    <>
      {!hidden ? (
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      ) : null}
    </>
  );
}
