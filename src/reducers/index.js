import { combineReducers } from "redux";
import questions from "./questions";
import users from "./users";
import authedUser from "./authedUser";

const rootReducer = combineReducers({
  users,
  questions,
  authedUser,
});

export default rootReducer;
