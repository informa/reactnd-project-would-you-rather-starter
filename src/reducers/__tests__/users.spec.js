import {
  RECEIVE_USERS,
  SAVE_USER_ANSWER,
  SAVE_USER_QUESTION,
} from "../../actions/users";
import users from "../users";

const mockUserId = "sarahedo";
const mockQuestionId = "8xf0y6ziyjabvozdd253nd";
const mockUser = {
  [mockUserId]: {
    id: mockUserId,
    name: "Sarah Edo",
    avatarURL: "/assets/images/avatar-1.png",
    backgroundColor: "hotpink",
    answers: {
      [mockQuestionId]: "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionOne",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    },
    questions: [mockQuestionId, "am8ehyc8byjqgar0jgpub9"],
  },
};

describe("users", () => {
  it("should return the default state if no action type provided", () => {
    const newState = users(undefined, {});
    expect(newState).toEqual({});
  });
  it("should return has initial state it should return is no or action type provided", () => {
    const initialState = mockUser;
    const newState = users(initialState, {});
    expect(newState).toEqual(initialState);
  });
  describe("RECEIVE_USERS", () => {
    it("should return new state if receiving type", () => {
      const newState = users(undefined, {
        type: RECEIVE_USERS,
        users: mockUser,
      });
      expect(newState).toEqual(mockUser);
    });
  });
  describe("SAVE_USER_ANSWER", () => {
    it("should return new state if receiving type", () => {
      const newQuestionId = "123234";
      const newQuestionAnswer = "answer";

      const newState = users(mockUser, {
        type: SAVE_USER_ANSWER,
        authedUser: mockUserId,
        qid: newQuestionId,
        answer: newQuestionAnswer,
      });
      const expectedActions = {
        [mockUserId]: {
          id: mockUserId,
          name: "Sarah Edo",
          avatarURL: "/assets/images/avatar-1.png",
          backgroundColor: "hotpink",
          answers: {
            [newQuestionId]: newQuestionAnswer,
            [mockQuestionId]: "optionOne",
            "6ni6ok3ym7mf1p33lnez": "optionOne",
            am8ehyc8byjqgar0jgpub9: "optionTwo",
            loxhs1bqm25b708cmbf3g: "optionTwo",
          },
          questions: [mockQuestionId, "am8ehyc8byjqgar0jgpub9"],
        },
      };
      expect(newState).toEqual(expectedActions);
    });
  });
  describe("SAVE_USER_QUESTION", () => {
    it("should return new state if receiving type", () => {
      const newQuestionId = "123456";
      const mockFormattedQuestion = {
        author: mockUserId,
        id: newQuestionId,
        optionOne: { votes: [], text: "text 1" },
        optionTwo: { votes: [], text: "text 2" },
        timestamp: 1598078894086,
      };
      const newState = users(mockUser, {
        type: SAVE_USER_QUESTION,
        formattedQuestion: mockFormattedQuestion,
      });
      const expectedActions = {
        [mockUserId]: {
          id: mockUserId,
          name: "Sarah Edo",
          avatarURL: "/assets/images/avatar-1.png",
          backgroundColor: "hotpink",
          answers: {
            [mockQuestionId]: "optionOne",
            "6ni6ok3ym7mf1p33lnez": "optionOne",
            am8ehyc8byjqgar0jgpub9: "optionTwo",
            loxhs1bqm25b708cmbf3g: "optionTwo",
          },
          questions: [mockQuestionId, "am8ehyc8byjqgar0jgpub9", newQuestionId],
        },
      };
      expect(newState).toEqual(expectedActions);
    });
  });
});
