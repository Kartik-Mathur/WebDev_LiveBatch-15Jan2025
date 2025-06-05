import { createRoot } from "react-dom/client";

function App({ name, description }) {
  return (
    <ul>
      <li>
        {name}: {description}
      </li>
    </ul>
  );
}

// function LoadTodos({ todos }) {
//   return (
//     <div>
//       {todos.map((todo) => {
//         return (
//           <div>
//             {todo.name} : {todo.description}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

function LoadTodos({ todos }) {
  return (
    <div>
      {todos.map((todo, indx) => (
        <div key={indx}>
          {todo.name} : {todo.description}
        </div>
      ))}
    </div>
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
