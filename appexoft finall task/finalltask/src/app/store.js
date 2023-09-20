import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../CartLogic/CartLogic";

export const store = configureStore({
  reducer: {
    allCart: cartReducer,
  },
});
