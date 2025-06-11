import React, { useState } from "react";

function GrandChild() {
  console.log("I am a grandchild");
  return <div>I am a GrandChild</div>;
}

function Child() {
  const [val, setVal] = useState(0);
  console.log("I am inside Child");
  return (
    <div>
      I am a child: {val}
      <button onClick={() => setVal(val + 1)}>Update</button>
      <GrandChild />
    </div>
  );
}

// Push the val state inside Child only
function Parent() {
  console.log("I am inside Parent");
  return (
    <div>
      I am a parent
      <Child />
    </div>
  );
}
const RenderFix1 = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

export default RenderFix1;
