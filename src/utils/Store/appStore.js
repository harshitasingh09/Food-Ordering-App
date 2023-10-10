import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const app = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default app;
