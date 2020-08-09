export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";
export const SAVE_QUESTION = "SAVE_QUESTION";

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
};

export const saveQuestionAnswer = ({ authedUser, qid, answer }) => {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  };
};

export const saveQuestion = (formattedQuestion) => {
  return {
    type: SAVE_QUESTION,
    formattedQuestion,
  };
};
