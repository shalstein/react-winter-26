import { useRef, useState } from "react";
import FocusedInput from "./FocusedInput";

export default function Form() {
  const [show, setShow] = useState(false);
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [uppercase, setUppercase] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {" "}
        {show ? "Hide" : "Show"} Form{" "}
      </button>
      <hr />
      {show && (
        <>
          <label>
            Enter Your First Name{" "}
            <FocusedInput
              value={firstNameInput}
              onChange={(e) => setFirstNameInput(e.target.value)}
              focused={true}
            />{" "}
          </label>
          <label>
            Enter Your Last Name{" "}
            <FocusedInput
              value={lastNameInput}
              onChange={(e) => setLastNameInput(e.target.value)}
              focused={false}
            />{" "}
          </label>
          <label>
            Make it uppercase{" "}
            <input
              type="checkbox"
              checked={uppercase}
              onChange={() => setUppercase(!uppercase)}
            />
          </label>
          <p>
            Hello,{" "}
            <b>
              {uppercase
                ? firstNameInput.toUpperCase() +
                  " " +
                  lastNameInput.toUpperCase()
                : firstNameInput + " " + lastNameInput}{" "}
            </b>
          </p>
        </>
      )}
    </>
  );
}
