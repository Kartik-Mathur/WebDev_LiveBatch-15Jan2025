import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";
import store from "./store/store.js";
import { Provider } from "react-redux";

store.subscribe(() => store.getState());

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
