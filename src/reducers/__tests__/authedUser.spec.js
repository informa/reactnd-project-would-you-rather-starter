import { SET_AUTHED_USER } from "../../actions/authedUser";
import authedUser from "../authedUser";

describe("authedUser", () => {
  it("should return the default state if no action type provided", () => {
    const newState = authedUser(undefined, {});
    expect(newState).toEqual(null);
  });
  it("should return has initial state it should return is no or action type provided", () => {
    const initialState = { authedUser: "sarahedo" };
    const newState = authedUser(initialState, {});
    expect(newState).toEqual(initialState);
  });
  it("should return new state if receiving type", () => {
    const id = "jon";
    const newState = authedUser(undefined, {
      type: SET_AUTHED_USER,
      id,
    });
    expect(newState).toEqual(id);
  });
});
