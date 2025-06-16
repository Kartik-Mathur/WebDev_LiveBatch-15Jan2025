import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const CleanUp = () => {
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      setCnt((prevCnt) => {
        console.log(prevCnt);
        return prevCnt + 1;
      });
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(id);
    };
  });

  return <div>{cnt}</div>;
};

export default CleanUp;
