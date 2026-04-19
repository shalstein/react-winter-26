import OrderForm from "./OrderForm";
import CounterButton from "./CounterButton";
import { useRef, useState } from "react";
function App() {
  const [hidden, setHidden] = useState(false);
  //let currentCount = 0;
  const currentCountRef = useRef(0);
  console.log("we rerendered app.jsx");
  return (
    <>
      <button
        onClick={() =>
          alert("clicked " + ++currentCountRef.current + " times!")
        }
      >
        Click me!
      </button>
      <CounterButton hidden={hidden} />
      <br />
      <label>Hide 2nd Button</label>
      <input
        type="checkbox"
        checked={hidden}
        onChange={() => setHidden(!hidden)}
      />
    </>
  );
}

export default App;
