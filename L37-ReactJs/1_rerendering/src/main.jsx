import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import RenderFix1 from "./RenderFix1";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RenderFix1 />
  </StrictMode>
);
