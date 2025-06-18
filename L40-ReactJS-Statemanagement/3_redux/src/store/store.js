import { createStore } from "redux";
import rootReducers from "../reducer/reducers.js";

const store = createStore(rootReducers);

export default store;