import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allItems: [],
  cartItems: [],
  totalAmount: 0,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    fetchData: (state, action) => {
      state.allItems = action.payload;
    },
    addItem: (state, action) => {
      const exists = state.cartItems.some(
        (item) => item.id === action.payload.id
      );
      if (exists) return;
      let itemToBeAdded = state.allItems.find(
        (item) => item.id === action.payload.id
      );
      state.totalAmount += itemToBeAdded.price;
      state.cartItems.push({ ...itemToBeAdded });
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.totalAmount -= action.payload.price;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
    },
  },
});

export const { fetchData, addItem, removeItem, clearCart } = shopSlice.actions;

export default shopSlice.reducer;
