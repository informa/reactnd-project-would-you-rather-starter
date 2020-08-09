import {
  RECEIVE_QUESTIONS,
  SAVE_QUESTION_ANSWER,
  SAVE_QUESTION,
} from "../actions/questions";

const questions = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case SAVE_QUESTION_ANSWER:
      const { qid, authedUser, answer } = action;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser]),
          },
        },
      };
    case SAVE_QUESTION:
      const newQuestion = action.formattedQuestion;
      return {
        ...state,
        [newQuestion.id]: newQuestion,
      };
    default:
      return state;
  }
};

export default questions;
