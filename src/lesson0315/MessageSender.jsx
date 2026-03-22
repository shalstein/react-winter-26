import React, { useState } from "react";

export default function MessageSender() {
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  if (isSent) {
    return <h1>You message is on it's way!</h1>;
  }
  return (
    <React.Fragment>
      <form>
        <textarea
          onInput={(e) => setMessage(e.target.value)}
          placeholder="message"
          value={message}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsSent(true);
          }}
        >
          Send Message
        </button>
      </form>
    </React.Fragment>
  );
}
