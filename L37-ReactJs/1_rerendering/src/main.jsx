import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import RenderFix2 from "./RenderFix2";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RenderFix2 />
  </StrictMode>
);
