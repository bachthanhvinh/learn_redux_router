import { combineReducers } from "redux";
import CartReducer from "./Cart";
const allReducers = combineReducers({
  CartReducer,
});

export default allReducers;
