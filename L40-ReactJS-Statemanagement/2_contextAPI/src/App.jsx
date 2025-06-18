import React, { createContext, useState } from "react";
import Child from "./Child";

const MoneyContext = createContext({
  money: "",
  description: "",
});

const TodoContext = createContext({
  todos: [],
});

const App = () => {
  // let todos = ["Cricket", "Sing", "Dance"];
  const [todos, setTodos] = useState(["Cricket", "Sing", "Dance"]);
  function addTodos(t) {
    setTodos((prev) => [...prev, t]);
  }

  console.log("Running App");

  let TodosData = {
    todos,
    addTodos,
  };

  return (
    <TodoContext.Provider value={TodosData}>
      <MoneyContext.Provider
        value={{ money: 1000, description: "Aman ke paise" }}
      >
        <Child />
      </MoneyContext.Provider>
    </TodoContext.Provider>
  );
};

export default App;
export { MoneyContext, TodoContext };
