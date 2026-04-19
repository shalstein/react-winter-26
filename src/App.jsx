import CounterButton from "./CounterButton";
import React, { useState } from "react";

function App() {
  const [checked, setChecked] = useState(false);
  return (
    <React.Fragment>
      <CounterButton hidden={false} />
      <CounterButton hidden={checked} />
      <br />
      <label>
        {" "}
        Hide button 2
        <input
          checked={checked}
          onChange={() => setChecked(!checked)}
          type="checkbox"
        />
      </label>
    </React.Fragment>
  );
}

export default App;
