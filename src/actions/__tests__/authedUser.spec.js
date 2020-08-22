import configureStore from "redux-mock-store";
import { setAuthedUser, SET_AUTHED_USER } from "../authedUser";

const mockStore = configureStore();
const store = mockStore();

describe("setAuthedUser", () => {
  beforeEach(() => {
    store.clearActions();
  });
  it("should dispatch the correct action and payload", () => {
    const id = "Jon";
    const expectedActions = [
      {
        id,
        type: SET_AUTHED_USER,
      },
    ];
    store.dispatch(setAuthedUser(id));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
