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
    {/* <App name="Coding" description="Love to code" /> */}
    <LoadTodos todos={todos} />
  </div>
);
