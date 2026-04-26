import { useState } from "react";

export default function MyVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <button onClick={() => setIsPlaying(!setIsPlaying)}>
        {" "}
        {isPlaying ? "Pause" : "Play"}{" "}
      </button>
      <br />
      <video>
        <src src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />
      </video>
      <br />
    </>
  );
}
