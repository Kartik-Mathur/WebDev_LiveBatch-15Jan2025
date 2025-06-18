import React from "react";
import { useRef } from "react";

const TodoInput = ({ addTodo }) => {
  const inpRef = useRef();

  function addTodoHandler() {
    addTodo(inpRef.current.value);
    inpRef.current.value = "";
  }

  return (
    <div className="flex m-4">
      <input
        ref={inpRef}
        className="border-2"
        type="text"
        placeholder="Enter Task ...."
      />
      <button onClick={addTodoHandler}>Add Task</button>
    </div>
  );
};

export default TodoInput;
