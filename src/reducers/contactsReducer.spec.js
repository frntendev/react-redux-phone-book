import contacts from "./contactsReducer";
import * as Actions from "../constants";

describe("reducers", () => {
  describe("contacts", () => {
    const initialState = {
      readyState: Actions.CONTACT_INFO_INVALID,
      result: null
    };
    const state = {
      result: [
        {
          id: 88,
          first_name: "Randie",
          last_name: "Addekin",
          email: "raddekin2f@yandex.ru",
          gender: "Male",
          phone_number: "193-323-1494",
          company: "Innotype",
          is_blocked: false
        },
        {
          id: 14,
          first_name: "Reinhard",
          last_name: "Agastina",
          email: "ragastinad@hostgator.com",
          gender: "Male",
          phone_number: "835-300-8197",
          company: "Quinu",
          is_blocked: false
        },
        {
          id: 11,
          first_name: "Nichols",
          last_name: "Aksell",
          email: "naksella@microsoft.com",
          gender: "Male",
          phone_number: "346-173-3524",
          company: "Yodoo",
          is_blocked: false
        }
      ]
    };

    it("should provide the initial state", () => {
      expect(contacts(undefined, {})).toEqual(initialState);
    });

    it("should handle fetching state", () => {
      expect(
        contacts(initialState, { type: Actions.CONTACT_INFO_FETCHING })
      ).toEqual({ readyState: Actions.CONTACT_INFO_FETCHING, result: null });
    });

    it("should handle fetch failed state", () => {
      expect(
        contacts(initialState, { type: Actions.CONTACT_INFO_FAILED })
      ).toEqual({ readyState: Actions.CONTACT_INFO_FAILED, result: undefined });
    });

    it("should handle fetched state", () => {
      expect(
        contacts(initialState, { type: Actions.CONTACT_INFO_FETCHED })
      ).toEqual({
        readyState: Actions.CONTACT_INFO_FETCHED,
        result: undefined
      });
    });

    it("should handle ADD_TO_BLACKLIST action", () => {
      expect(
        contacts(state, { type: Actions.ADD_TO_BLACKLIST, payload: 88 })
      ).toEqual({
        result: [
          {
            id: 88,
            first_name: "Randie",
            last_name: "Addekin",
            email: "raddekin2f@yandex.ru",
            gender: "Male",
            phone_number: "193-323-1494",
            company: "Innotype",
            is_blocked: true
          },
          {
            id: 14,
            first_name: "Reinhard",
            last_name: "Agastina",
            email: "ragastinad@hostgator.com",
            gender: "Male",
            phone_number: "835-300-8197",
            company: "Quinu",
            is_blocked: false
          },
          {
            id: 11,
            first_name: "Nichols",
            last_name: "Aksell",
            email: "naksella@microsoft.com",
            gender: "Male",
            phone_number: "346-173-3524",
            company: "Yodoo",
            is_blocked: false
          }
        ]
      });
    });

    it("should handle ADD_TO_BLACKLIST action when the contact doesn't exist", () => {
      expect(contacts(state, { type: Actions.ADD_TO_BLACKLIST, payload: 99 })).toEqual(
        state
      );
    });
  });
});
