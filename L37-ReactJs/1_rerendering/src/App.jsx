import React from "react";

function GrandChild() {
  console.log("I am a grandchild");
  return <div>I am a GrandChild</div>;
}

function Child({ val }) {
  console.log("I am inside Child");
  return (
    <div>
      I am a child: {val}
      <GrandChild />
    </div>
  );
}

function Parent() {
  console.log("I am inside Parent");
  const [val, setVal] = useState(0);

  return (
    <div>
      I am a parent
      <button onClick={() => setVal(val + 1)}>Update</button>
      <Child val={val} />
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

export default App;
