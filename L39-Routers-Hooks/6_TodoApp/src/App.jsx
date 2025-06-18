import React from "react";
import TodoInput from "./components/TodoInput";
import { useState } from "react";
import TodoDisplay from "./components/TodoDisplay";

const App = () => {
  const [todos, setTodos] = useState([]);

  function addTodo(task) {
    // we will add task to todos state[]
    setTodos([...todos, { name: task, completed: false }]);
  }

  return (
    <div>
      <TodoInput addTodo={addTodo} />

      <TodoDisplay todos={todos} />
    </div>
  );
};

export default App;
