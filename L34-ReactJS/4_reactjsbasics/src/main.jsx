import { createRoot } from "react-dom/client";

function App(Task, Description) {
  return (
    <div>
      <ul>
        <li>
          {Task}: {Description}
        </li>
      </ul>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <div>
    {App("Coding", "Love to Code")}
    {
    App("Swim", "Love to Swim")
    }
  </div>
);
