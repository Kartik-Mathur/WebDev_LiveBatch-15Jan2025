import React from "react";
import { atom, RecoilRoot } from "recoil";
import Child from "./Child";

const counterAtom = atom({
  key: "counter",
  default: 0,
});

const App = () => {
  return <Child />;
};

export default App;
export { counterAtom };
