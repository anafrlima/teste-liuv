import { combineReducers } from "redux";
import menu from "./menu.js";
import dialog from "./dialog.js";

export default combineReducers({
  menu,
  dialog,
});
