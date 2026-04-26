import { useEffect, useRef, useState } from "react";

export default function MyVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoElement = useRef(null);
  useEffect(() => {
    if (isPlaying) {
      videoElement.current.play();
    } else {
      videoElement.current.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {" "}
        {isPlaying ? "Pause" : "Play"}{" "}
      </button>
      <br />
      <video ref={videoElement} width="250">
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
      <br />
    </>
  );
}
