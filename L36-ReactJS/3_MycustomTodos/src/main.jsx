import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import useTodos from "./hooks/useTodos";
import { useState } from "react";

function TodoInput({ addTodos }) {
  const [taskValue, setTaskValue] = useState("");

  let addTodosHandler = () => {
    let filteredTaskValue = taskValue.trim();

    if (filteredTaskValue.length > 0) {
      addTodos(filteredTaskValue);
      setTaskValue("");
    }
  };

  return (
    <div>
      <input
        onChange={(ev) => setTaskValue(ev.target.value)}
        value={taskValue}
        type="text"
        placeholder="Enter Task Name"
      />
      <button onClick={addTodosHandler}>Add Task</button>
    </div>
  );
}

function DisplayTodos({ todos, deleteTodos, increasePriority,decreasePriority }) {
  return (
    <div>
      {todos.map((t, indx) => (
        <li key={indx}>
          {t.name} - {t.date.toDateString()}

          <button onClick={() => deleteTodos(t.id)}>❌</button>
          <button onClick={() => increasePriority(t.id)}>↑</button>
          <button onClick={() => decreasePriority(t.id)}>↓</button>
        </li>
      ))}
    </div>
  );
}

function TodoApp() {
  const { todos, addTodos, deleteTodos, increasePriority, decreasePriority } = useTodos();

  return (
    <div>
      <h1>Todo Application</h1>
      <TodoInput addTodos={addTodos} />

      <DisplayTodos
        increasePriority={increasePriority}
        decreasePriority={decreasePriority}
        deleteTodos={deleteTodos}
        todos={todos}
      />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoApp />
  </StrictMode>
);
