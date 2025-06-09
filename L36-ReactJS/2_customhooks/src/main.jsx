import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import useCounter from "./hooks/useCounter.jsx";
import useCounterAdvanced from "./hooks/useCounterAdvanced.jsx";

function App() {
  const [cnt, setCnt] = useCounter(0);

  return (
    <div>
      Counter: {cnt}
      {/* <button onClick={()=>setCnt()}>Update</button> */}
      <button onClick={setCnt}>Update</button>
    </div>
  );
}



function AdvancedApp() {
  const { cnt, increment, decrement, resetCounter } = useCounterAdvanced(0);

  return (
    <div>
      Counter: {cnt}
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
}




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AdvancedApp />
  </StrictMode>
);