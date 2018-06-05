import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import * as Actions from "../constants";
import { addToBlackList } from "./blackListActions";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// You would import the action from your codebase in a real scenario
describe("Blackkist Actions", () => {
  const initialState = {};
  const store = mockStore(initialState);

  describe("Add to blacklist", () => {
    it("should add an item to the blacklist", () => {
      store.clearActions();
      store.getState(store.dispatch(addToBlackList(4)));
      const expectedPayload = {
        type: Actions.ADD_TO_BLACKLIST,
        payload: 4
      };
      const actions = store.getActions();
      expect(actions).toEqual([expectedPayload]);
    });
  });
});
