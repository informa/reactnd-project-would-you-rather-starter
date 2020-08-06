export const RECEIVE_USERS = "RECEIVE_USERS";
export const SAVE_USER_ANSWER = "SAVE_USER_ANSWER";

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
