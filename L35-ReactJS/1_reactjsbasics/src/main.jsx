import { useState } from "react";
import { createRoot } from "react-dom/client";

function NonRenderingComponent() {
  let counter = 1;
  console.log("Running this Non-rendering component");
  return (
    <div>
      <h1>Simple Counter  - NonRenderingComponent </h1>
      <span>{counter}</span> &nbsp;&nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          counter++;
          console.log(counter);
        }}
      >
        ↑
      </button>
    </div>
  );
}

function ReRenderingComponent() {
  // HOOKS: useState(It will re-render the component jaha bhi yeh use hoga)
  const [counter, setCounter] = useState(1); // setCounter is used to update counter ki value
  console.log("Running this Re-rendering component");
  return (
    <div>
      <h1>Simple Counter - ReRenderingComponent</h1>
      <span>{counter}</span> &nbsp;&nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          // setCounter ke through hi bas hum counter ki value ko update kar skte hai
          setCounter(counter + 1); // Since counter is immutable
          // We cannot do, counter = counter + 1; or counter++;
          console.log(counter);
        }}
      >
        ↑
      </button>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <div>{true ? <ReRenderingComponent /> : <NonRenderingComponent />}</div>
);
