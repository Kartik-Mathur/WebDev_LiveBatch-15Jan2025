import React, { useState } from "react";

const InfiniteLoop = () => {
  const [cnt, setCnt] = useState(0);

  setCnt(cnt + 1);

  return <div>{cnt}</div>;
};

export default InfiniteLoop;
