import React from "react";
import { useRecoilState } from "recoil";
import { counterAtom } from "./App";

const GrandChild = () => {
  const [cnt, setCnt] = useRecoilState(counterAtom);
  console.log(cnt);
  return <div>GrandChild: {cnt}</div>;
};

export default GrandChild;
