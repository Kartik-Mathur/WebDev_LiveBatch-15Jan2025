import React from "react";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "../redux/slices/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  // Counter ki initialState ki value ko pick krna is via useSelector
  const counterValue = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      Counter: {counterValue}
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        <button onClick={() => dispatch(decrementByAmount(5))}>-5</button>
      </div>
    </div>
  );
};

export default Counter;
