import { useState } from "react";
import UsersTodoList from "./UsersTodoList";
import UserIdForm from "./UserIdForm";
function App() {
  const [userId, setUserId] = useState("1");
  return (
    <>
      <UserIdForm userId={userId} setUserId={setUserId} />
      <UsersTodoList userId={Number(userId)} />
    </>
  );
}

export default App;
