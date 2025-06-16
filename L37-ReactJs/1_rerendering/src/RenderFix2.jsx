import React, { memo, useState } from "react";

const Child1 = memo(function Child1({ data }) {
  console.log("Running Child", data);
  
  return <div>I am a Child : {data}</div>;
});

function Parent() {
  const [cnt, setCnt] = useState(0);
  return (
    <div>
      <Child1 data={cnt} />
      <button onClick={() => setCnt(cnt + 1)}>Update</button>
      <Child1 data="Hello" />
      <Child1 data="World" />
    </div>
  );
}

export default Parent;
