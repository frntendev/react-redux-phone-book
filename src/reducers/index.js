import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import contactsInfo from "./contactsReducer";
import blackList from "./blackListReducer";
import searchTerm from "./searchTermReducer";

export default combineReducers({
  routing: routerReducer,
  blackList,
  contactsInfo,
  searchTerm
});
