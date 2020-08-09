export const RECEIVE_USERS = "RECEIVE_USERS";
export const SAVE_USER_ANSWER = "SAVE_USER_ANSWER";
export const SAVE_USER_QUESTION = "SAVE_USER_QUESTION";


export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

export const saveUserAnswer = ({ authedUser, qid, answer }) => {
  return {
    type: SAVE_USER_ANSWER,
    authedUser,
    qid,
    answer,
  };
};

export const saveUserQuestion = (formattedQuestion) => {
  return {
    type: SAVE_USER_QUESTION,
    formattedQuestion,
  };
};
