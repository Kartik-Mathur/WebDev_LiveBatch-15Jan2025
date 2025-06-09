import { useState } from "react";
import TodoDisplay from "./TodoDisplay.jsx";
import TodoInput from "./TodoInput.jsx";

export default function TodoApp() {
  const [todos, setTodos]=useState([]);
  const [taskValue, setTaskValue] = useState("");

  return (
    <div>
      <h1>Todo Application - Component Wise</h1>
      
      <TodoInput
        todos={todos} 
        setTodos={setTodos} 
        taskValue={taskValue} 
        setTaskValue={setTaskValue}
      />

      <TodoDisplay todos={todos} />
    </div>
  );
}