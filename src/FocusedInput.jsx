import { useEffect, useRef } from "react";

export default function FocusedInput({ value, onChange, focused }) {
  const inputRef = useRef(null);
  useEffect(() => {
    console.log("rendered focusedInput component");
    if (focused) {
      inputRef.current.focus();
    }
    return () => {
      console.log("focusedInput component has been removed from the DOM");
    };
  }, []);
  return <input value={value} onChange={onChange} ref={inputRef} />;
}
