import { combineReducers } from "redux";
import questions from "./questions";
import users from "./users";
import authedUser from "./authedUser";
import { loadingBarReducer } from "react-redux-loading";

const rootReducer = combineReducers({
  users,
  questions,
  authedUser,
  loadingBar: loadingBarReducer,
});

export default rootReducer;
