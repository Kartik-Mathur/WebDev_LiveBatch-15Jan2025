import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [cnt, setCnt] = useState(0);
  useEffect(() => {
    // setCnt(cnt + 1); // This will create an infinite loop
    console.log("Inside use effect");
  }, []);

  return (
    <div>
      I am app component: {cnt}
      <button onClick={() => setCnt(cnt + 1)}>Update cnt</button>
    </div>
  );
};

export default App;
