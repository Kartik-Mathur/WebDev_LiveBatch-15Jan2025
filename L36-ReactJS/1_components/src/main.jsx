import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import TodoApp from "./components/TodoApp.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoApp />
  </StrictMode>
);
        


