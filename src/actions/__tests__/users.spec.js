import configureStore from "redux-mock-store";
import {
  RECEIVE_USERS,
  SAVE_USER_ANSWER,
  SAVE_USER_QUESTION,
  receiveUsers,
  saveUserAnswer,
  saveUserQuestion,
} from "../users";

const mockStore = configureStore();
const store = mockStore();

const mockUserId = "sarahedo";
const mockUser = {
  [mockUserId]: {
    id: mockUserId,
    name: "Sarah Edo",
    avatarURL: "/assets/images/avatar-1.png",
    backgroundColor: "hotpink",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionOne",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  },
};

describe("receiveUsers", () => {
  beforeEach(() => {
    store.clearActions();
  });
  it("should dispatch the correct action and payload", () => {
    const expectedActions = [
      {
        type: RECEIVE_USERS,
        users: mockUser,
      },
    ];
    store.dispatch(receiveUsers(mockUser));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe("saveUserAnswer", () => {
  beforeEach(() => {
    store.clearActions();
  });
  it("should dispatch the correct action and payload", () => {
    const mockAnswer = {
      authedUser: "Jon",
      qid: mockUserId,
      answer: "OptionOne",
    };
    const expectedActions = [
      {
        type: SAVE_USER_ANSWER,
        ...mockAnswer,
      },
    ];
    store.dispatch(saveUserAnswer(mockAnswer));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe("saveUserQuestion", () => {
  beforeEach(() => {
    store.clearActions();
  });
  it("should dispatch the correct action and payload", () => {
    const mockFormattedQuestion = {
      author: "sarahedo",
      id: "nwq019npif99tu0yihjq8",
      optionOne: { votes: [], text: "text 1" },
      optionTwo: { votes: [], text: "text 2" },
      timestamp: 1598078894086,
    };
    const expectedActions = [
      {
        type: SAVE_USER_QUESTION,
        formattedQuestion: mockFormattedQuestion,
      },
    ];
    store.dispatch(saveUserQuestion(mockFormattedQuestion));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
