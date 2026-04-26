import { useRef } from "react";
import Stopwatch from "./Stopwatch";
function App() {
  console.log("we rerendered app.jsx");
  const inputRef = useRef(null);
  return (
    <>
      <Stopwatch />
      <hr />
      <button id="button" onClick={() => inputRef.current.focus()}>
        Search?
      </button>
      <br />
      <input ref={inputRef} placeholder="Text to Search" />
    </>
  );
}

export default App;
