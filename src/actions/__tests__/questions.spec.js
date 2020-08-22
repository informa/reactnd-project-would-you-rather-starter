import configureStore from "redux-mock-store";
import {
  RECEIVE_QUESTIONS,
  SAVE_QUESTION_ANSWER,
  SAVE_QUESTION,
  receiveQuestions,
  saveQuestionAnswer,
  saveQuestion,
} from "../questions";

const mockStore = configureStore();
const store = mockStore();

const mockQuestionId = "6ni6ok3ym7mf1p33lnez";
const mockQuestion = {
  [mockQuestionId]: {
    id: mockQuestionId,
    author: "johndoe",
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: "become a superhero",
    },
    optionTwo: {
      votes: ["johndoe", "sarahedo"],
      text: "become a supervillian",
    },
  },
};

describe("receiveQuestions", () => {
  beforeEach(() => {
    store.clearActions();
  });
  it("should dispatch the correct action and payload", () => {
    const expectedActions = [
      {
        type: RECEIVE_QUESTIONS,
        questions: mockQuestion,
      },
    ];
    store.dispatch(receiveQuestions(mockQuestion));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe("saveQuestionAnswer", () => {
  beforeEach(() => {
    store.clearActions();
  });
  it("should dispatch the correct action and payload", () => {
    const mockAnswer = {
      authedUser: "Jon",
      qid: mockQuestionId,
      answer: "OptionOne",
    };
    const expectedActions = [
      {
        type: SAVE_QUESTION_ANSWER,
        ...mockAnswer,
      },
    ];
    store.dispatch(saveQuestionAnswer(mockAnswer));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe("saveQuestion", () => {
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
        type: SAVE_QUESTION,
        formattedQuestion: mockFormattedQuestion,
      },
    ];
    store.dispatch(saveQuestion(mockFormattedQuestion));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
