import { createRoot } from "react-dom/client";

function Todo({ name, description }) {
  return (
    <li>
      {name}: {description}
    </li>
  );
}

function LoadTodos({ todos }) {
  return (
    <ul>
      {todos.map((todo, indx) => (
        <Todo key={indx} name={todo.name} description={todo.description} />
      ))}
    </ul>
  );
}

const todos = [
  { name: "Coding", description: "Love to code" },
  { name: "Swim", description: "Love to Swim" },
  { name: "Dance", description: "Love to Dance" },
  { name: "Boxing", description: "Love to do Boxing" },
];

createRoot(document.getElementById("root")).render(
  <div>
    <h1>Todo Application</h1>
    {todos.length > 0 ? (
      <LoadTodos todos={todos} />
    ) : (
      <div>No todos available rightnow!</div>
    )}
  </div>
);
