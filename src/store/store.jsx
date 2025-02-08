import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./shopping-cart/CartSlice";
import CartUISlice from "./shopping-cart/CartUISlice";

export const store = configureStore({
  reducer:{
    cart: CartSlice,
    cartUi: CartUISlice
  }
})