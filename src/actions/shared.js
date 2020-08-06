import { getInitialData } from "../utils/api";
import { _saveQuestionAnswer } from "../utils/_DATA";
import { receiveQuestions, saveQuestionAnswer } from "./questions";
import { receiveUsers, saveUserAnswer } from "./users";
import { setAuthedUser } from "../actions/authedUser";
import { showLoading, hideLoading } from "react-redux-loading";

//TODO: replace hard coded authed_id with signin step
const AUTHED_ID = "sarahedo";

export const handleInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ questions, users }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
};

export function handleSaveQuestionAnswer(info) {
  return (dispatch) => {
    dispatch(showLoading());

    return _saveQuestionAnswer(info).then(() => {
      dispatch(saveQuestionAnswer(info));
      dispatch(saveUserAnswer(info));
      dispatch(hideLoading());
    });
  };
}
