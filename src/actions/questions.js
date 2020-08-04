import { _saveQuestionAnswer } from "../utils/_DATA";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
};

const saveQuestionAnswer = ({ authedUser, id, answer }) => {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    id,
    answer,
  };
};

export function handleSaveQuestionAnswer(info) {
  return (dispatch) => {
    dispatch(saveQuestionAnswer(info));

    return _saveQuestionAnswer(info).catch((e) => {
      console.warn("Error in handlesaveQuestionAnswer: ", e);
      // dispatch(saveQuestionAnswer(info));
      alert("The was an error answering the question. Try again.");
    });
  };
}
