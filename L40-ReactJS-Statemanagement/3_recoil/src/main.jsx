import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";
import { RecoilRoot } from "recoil";

createRoot(document.getElementById("root")).render(
  <>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </>
);
