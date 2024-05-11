import { combineReducers } from "@reduxjs/toolkit";
import CartReducer from "./ProductSlice";

const rootReducer = combineReducers({
  cart: CartReducer,
});

export default rootReducer;
