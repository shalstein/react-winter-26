import useTime from "./useTime";

export default function TasksTodo() {
  const time = useTime();
  return (
    <>
      <h1>The Time now is {time.toLocaleTimeString()}</h1>
      <ul>
        <li>Walk the dog</li>
        <li>Read a Book</li>
      </ul>
    </>
  );
}
