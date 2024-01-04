import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shopSlice";

const store = configureStore({
  reducer: {
    shop: shopReducer,
  },
});

export default store;
