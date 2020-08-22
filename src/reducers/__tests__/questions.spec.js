import {
  RECEIVE_QUESTIONS,
  SAVE_QUESTION_ANSWER,
  SAVE_QUESTION,
} from "../../actions/questions";
import questions from "../questions";

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

describe("questions", () => {
  it("should return the default state if no action type provided", () => {
    const newState = questions(undefined, {});
    expect(newState).toEqual({});
  });
  it("should return has initial state it should return is no or action type provided", () => {
    const initialState = mockQuestion;
    const newState = questions(initialState, {});
    expect(newState).toEqual(initialState);
  });
  describe("RECEIVE_QUESTIONS", () => {
    it("should return new state if receiving type", () => {
      const newState = questions(undefined, {
        type: RECEIVE_QUESTIONS,
        questions: mockQuestion,
      });
      expect(newState).toEqual(mockQuestion);
    });
  });
  describe("SAVE_QUESTION_ANSWER", () => {
    it("should return new state if receiving type", () => {
      const authedUser = "Jon";
      const newState = questions(mockQuestion, {
        type: SAVE_QUESTION_ANSWER,
        authedUser: authedUser,
        qid: mockQuestionId,
        answer: "optionOne",
      });
      const expectedActions = {
        [mockQuestionId]: {
          author: "johndoe",
          id: mockQuestionId,
          optionOne: { text: "become a superhero", votes: [authedUser] },
          optionTwo: {
            text: "become a supervillian",
            votes: ["johndoe", "sarahedo"],
          },
          timestamp: 1468479767190,
        },
      };
      expect(newState).toEqual(expectedActions);
    });
  });
  describe("SAVE_QUESTION", () => {
    it("should return new state if receiving type", () => {
      const mockFormattedQuestion = {
        author: "sarahedo",
        id: "nwq019npif99tu0yihjq8",
        optionOne: { votes: [], text: "text 1" },
        optionTwo: { votes: [], text: "text 2" },
        timestamp: 1598078894086,
      };
      const newState = questions(
        {},
        {
          type: SAVE_QUESTION,
          formattedQuestion: mockFormattedQuestion,
        }
      );
      const expectedActions = {
        [mockFormattedQuestion.id]: {
          ...mockFormattedQuestion,
        },
      };
      expect(newState).toEqual(expectedActions);
    });
  });
});
