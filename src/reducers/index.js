import { combineReducers } from "redux";
import productListReducer from "./productListReducer";

//Root Reducer
export default combineReducers({
  products: productListReducer
});
