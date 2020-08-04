import { RECEIVE_QUESTIONS, SAVE_QUESTION_ANSWER } from "../actions/questions";

const questions = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case SAVE_QUESTION_ANSWER:
      console.log('state ', state, 'action ', action);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default questions;
