import { createStore } from "redux";
import counterReduceer from "./reducer";

const store = createStore(counterReduceer);
export default store;
