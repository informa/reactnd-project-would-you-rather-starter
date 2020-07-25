import { getInitialData } from "../utils/api";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { setAuthedUser } from "../actions/authedUser";

//TODO: replace hard coded authed_id with signin step
const AUTHED_ID = "sarahedo";

export const handleInitialData = () => {
  return (dispatch) => {
    return getInitialData().then(({ questions, users }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
};
