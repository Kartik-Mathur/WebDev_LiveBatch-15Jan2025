import { createRoot } from "react-dom/client";

function App(Task, Description) {
  return (
    <ul>
      <li>
        {Task}: {Description}
      </li>
    </ul>
  );
}

function App1(props) {
  const Task = props.name;
  const Description = props.description;
  return (
      <ul>
        <li>
          {Task}: {Description}
        </li>
      </ul>
  );
}

createRoot(document.getElementById("root")).render(
  <div>
    <App1 name="Coding" description="Love to code"  />
    {App("Swim", "Love to Swim")}
  </div>
);
