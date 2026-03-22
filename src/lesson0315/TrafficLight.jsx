import React, { useState } from "react";

export default function TrafficLight() {
  const [isWalk, setIsWalk] = useState(false);
  return (
    <React.Fragment>
      {" "}
      <h1>{isWalk ? "Walk" : "Stop "}</h1>
      <button
        onClick={() => {
          alert(isWalk ? "Stop Is next" : "Walk Is Next");
          setIsWalk(!isWalk);
        }}
      >
        {isWalk ? "Stop" : "Walk"}
      </button>
    </React.Fragment>
  );
}
