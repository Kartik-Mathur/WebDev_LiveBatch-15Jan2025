import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./actions/Counter";

const App = () => {
  // State ko pick krne ke liye we use-> useSelector
  const counterState = useSelector((state) => state.counterReducer);

  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: "30px" }}>
      <CounterData counterState={counterState} />
      <MyButton text="Increment" fun={increment} />
      <MyButton text="Decrement" fun={decrement} />
      <MyButton text="Reset" fun={reset} />
      {/* Counter: {counterState}
      <button onClick={() => dispatch(increment())}>Increment Counter</button>
      <button onClick={() => dispatch(decrement())}>Decrement Counter</button>
      <button onClick={() => dispatch(reset())}>Reset Counter</button> */}
    </div>
  );
};

function CounterData({ counterState }) {
  console.log("Running CounterData");
  return <div>Counter: {counterState}</div>;
}

function MyButton({ text, fun }) {
  console.log("Running MyButton", text);
  // Kaunsa action krna hai uske liye we use dispatch
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(fun())}>{text} Counter</button>;
}

export default App;
