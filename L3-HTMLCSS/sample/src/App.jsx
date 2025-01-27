import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import Counter from "./components/Counter.jsx";

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
