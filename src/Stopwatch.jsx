import { useState, useRef } from "react";

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalId = useRef(null);
  const count = useRef(0);
  let myNotGoodCounter = 0;
  function handleStart() {
    setStartTime(Date.now);

    clearInterval(intervalId.current);
    intervalId.current = setInterval(() => {
      setNow(Date.now);
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalId.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time Passed: {secondsPassed}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button
        onClick={() => {
          alert("clicked " + count.current + " times");
          count.current = count.current + 1;
          myNotGoodCounter = myNotGoodCounter + 1;
          console.log(myNotGoodCounter);
        }}
      >
        Count Alert
      </button>
    </>
  );
}
