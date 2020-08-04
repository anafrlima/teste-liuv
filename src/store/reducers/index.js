import { combineReducers } from "redux";
import menu from "./menu.js";
import dialog from "./dialog.js";
import cart from "./cart.js";

export default combineReducers({
  menu,
  dialog,
  cart,
});
