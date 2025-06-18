import React from "react";

const TodoDisplay = ({ todos }) => {
  return (
    <div>
      {todos.map((t, i) => (
        <li key={i}>
          {t.name} :{" "}
          {t.completed ? <span>Completed</span> : <span>Pending</span>}
        </li>
      ))}
    </div>
  );
};

export default TodoDisplay;
