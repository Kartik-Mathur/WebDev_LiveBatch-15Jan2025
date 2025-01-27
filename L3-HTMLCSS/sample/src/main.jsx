import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/actions/counter.jsx";

const store = configureStore({
  reducer: counterSlice.reducer,
});

store.subscribe(() => console.log(store.getState()));

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
