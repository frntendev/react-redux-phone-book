import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import * as Actions from "../constants";
import { changeSearchTerm } from "./searchTermActions";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// You would import the action from your codebase in a real scenario
describe("Search term Actions", () => {
  const initialState = {};
  const store = mockStore(initialState);

  describe("Change search term", () => {
    it("should change the search term", () => {
      store.clearActions();
      store.getState(store.dispatch(changeSearchTerm("value")));
      const expectedPayload = {
        type: Actions.CHANGE_SEARCHTERM,
        payload: "value"
      };
      const actions = store.getActions();
      expect(actions).toEqual([expectedPayload]);
    });
  });
});
