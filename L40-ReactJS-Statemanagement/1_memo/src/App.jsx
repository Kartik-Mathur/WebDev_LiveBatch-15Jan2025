import React, { memo, useState } from "react";

const App = () => {
  const [cnt, setCnt] = useState(0);
  console.log("Running App");
  return (
    <div>
      <Child1Memo value={cnt} />

      <Child2Memo value="2" />

      <button onClick={() => setCnt(cnt + 1)}>UpdateCnt</button>
    </div>
  );
};

const Child1Memo = memo(function Child1({ value }) {
  console.log("Running Child1");
  return <div>{value}</div>;
});

const Child2Memo = memo(function Child2({ value }) {
  console.log("Running Child2");
  return <div>{value}</div>;
});

export default App;
