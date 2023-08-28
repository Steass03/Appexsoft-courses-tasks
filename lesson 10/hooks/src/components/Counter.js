import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => setCounter((prev) => prev + 1);

  const decrementCounter = () => {
    setCounter((prev) => prev - 1);
  };
  const resetCounter = () => setCounter(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={incrementCounter}>Increment me</button>
      <button onClick={resetCounter}> Reset Value</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>
        Decrement me
      </button>
    </div>
  );
}

export default Counter;
