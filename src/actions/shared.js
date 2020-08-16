import { getInitialData } from "../utils/api";
import { _saveQuestionAnswer, _saveQuestion } from "../utils/_DATA";
import {
  receiveQuestions,
  saveQuestionAnswer,
  saveQuestion,
} from "./questions";
import { receiveUsers, saveUserAnswer, saveUserQuestion } from "./users";
import { setAuthedUser } from "../actions/authedUser";
import { showLoading, hideLoading } from "react-redux-loading";

// Signed in user is set to null to begin with.

export const handleInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ questions, users }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
      // dispatch(setAuthedUser(null));
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

export function handleNewQuestion(question) {
  return (dispatch) => {
    dispatch(showLoading());

    return _saveQuestion(question).then((formattedQuestion) => {
      dispatch(saveQuestion(formattedQuestion));
      dispatch(saveUserQuestion(formattedQuestion));
      dispatch(hideLoading());
    });
  };
}
