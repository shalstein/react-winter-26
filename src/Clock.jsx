import { useState } from "react";

export default function Clock({ time }) {
  const [nameText, setNameText] = useState("");
  return (
    <>
      {" "}
      <h1>The time is now {time}</h1>
      <label>
        Enter your Name:{" "}
        <input
          onChange={(e) => {
            setNameText(e.target.value);
          }}
          value={nameText}
        />
      </label>
    </>
  );
}
