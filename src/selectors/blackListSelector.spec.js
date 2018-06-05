import { getBlackListContacts } from "./blackListSelector";

describe("selectors", () => {
  describe("blacklist", () => {

    const state = {
      blackList: [88],
      contactsInfo: {
        readyState: "CONTACT_INFO_FETCHED",
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
      }
    };

    it("should produce blacklist contacts based on `blacklist` array", () => {
      expect(getBlackListContacts(state)).toEqual([
        {
          id: 88,
          first_name: "Randie",
          last_name: "Addekin",
          email: "raddekin2f@yandex.ru",
          gender: "Male",
          phone_number: "193-323-1494",
          company: "Innotype",
          is_blocked: false
        }
      ]);
    });
  });
});
