import { useState } from "react";

export default function useCounterAdvanced(initialValue) {
  const [cnt, setCnt] = useState(initialValue);

  function increment() {
    if(cnt < 10) setCnt(cnt + 1);
    else setCnt(0);
  }

  function decrement() {
    setCnt(cnt - 1);
  }

  function resetCounter() {
    setCnt(initialValue);
  }

  return {
    cnt,
    increment,
    decrement,
    resetCounter,
  };
}
