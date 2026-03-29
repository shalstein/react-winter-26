let currentCount = 0;

export default function ButtonCounterWrong() {
  return (
    <button onClick={() => (currentCount += 1)}>
      Current Count {currentCount}
    </button>
  );
}
