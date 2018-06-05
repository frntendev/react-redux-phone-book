import blacklist from "./blackListReducer";
import * as Actions from "../constants";
describe("reducers", () => {
  describe("blacklist", () => {
    const initialState = {
      blackList: []
    };

    it("should provide the initial state", () => {
      expect(blacklist(undefined, {})).toEqual(initialState.blackList);
    });

    it("should handle ADD_TO_BLACKLIST action", () => {
      expect(
        blacklist([], { type: Actions.ADD_TO_BLACKLIST, payload: 1 })
      ).toEqual([1]);
      expect(
        blacklist([1], { type: Actions.ADD_TO_BLACKLIST, payload: 2 })
      ).toEqual([1, 2]);
      expect(
        blacklist([8, 6, 4], { type: Actions.ADD_TO_BLACKLIST, payload: 10 })
      ).toEqual([8, 6, 4, 10]);
    });

    it("should remove contact from blacklist when it exists", () => {
      expect(
        blacklist([1], { type: Actions.ADD_TO_BLACKLIST, payload: 1 })
      ).toEqual([]);
      expect(
        blacklist([1, 9], { type: Actions.ADD_TO_BLACKLIST, payload: 9 })
      ).toEqual([1]);
    });
  });
});
