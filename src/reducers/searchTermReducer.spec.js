import searchterm from "./searchTermReducer";
import * as Actions from "../constants";
describe("reducers", () => {
  describe("searchterm", () => {
    const initialState = "";

    it("should provide the initial state", () => {
      expect(searchterm(undefined, {})).toEqual(initialState);
    });

    it("should handle CHANGE_SEARCHTERM action", () => {
      expect(
        searchterm(initialState, {
          type: Actions.CHANGE_SEARCHTERM,
          payload: "s"
        })
      ).toEqual("s");

      expect(
        searchterm(initialState, {
          type: Actions.CHANGE_SEARCHTERM,
          payload: "Item"
        })
      ).toEqual("Item");

      expect(
        searchterm(initialState, {
          type: Actions.CHANGE_SEARCHTERM,
          payload: "$%@#SdeR5"
        })
      ).toEqual("$%@#SdeR5");

      expect(
        searchterm(initialState, {
          type: Actions.CHANGE_SEARCHTERM,
          payload: "    "
        })
      ).toEqual("    ");
    });
  });
});
