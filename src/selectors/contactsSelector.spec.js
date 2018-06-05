import {
  getContactsByAlphabet,
  getFilteredContacts,
  getShowFiltered,
  getShowAlphabet
} from "./contactsSelector";

describe("selectors", () => {
  describe("blacklist", () => {
    const state = {
      searchTerm: "add",
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
            id: 94,
            first_name: "Felicity",
            last_name: "Donwell",
            email: "fdonwell2l@w3.org",
            gender: "Female",
            phone_number: "558-770-3160",
            company: "Skimia",
            is_blocked: false
          }
        ]
      }
    };

    it("should sort and group contacts by alphabet based on last name", () => {
      expect(getContactsByAlphabet(state)).toEqual([
        {
          letter: "A",
          contacts: [
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
          ]
        },
        {
          letter: "D",
          contacts: [
            {
              id: 94,
              first_name: "Felicity",
              last_name: "Donwell",
              email: "fdonwell2l@w3.org",
              gender: "Female",
              phone_number: "558-770-3160",
              company: "Skimia",
              is_blocked: false
            }
          ]
        }
      ]);
    });

    it("should filter contacts based on input", () => {
      getFilteredContacts(state);
      expect(getFilteredContacts(state)).toEqual([
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

    it("should filter contacts based on input", () => {
      const state_2 = { ...state };
      state_2.searchTerm = "$%##$%";
      expect(getFilteredContacts(state_2)).toEqual([]);
    });

    it("should display show filtered", () => {
      expect(getShowFiltered(state)).toBe(true);
      const state_3 = { ...state };
      state_3.searchTerm = "";
      expect(getShowFiltered(state_3)).toBe(false);
    });

    it("should display show alphabet", () => {
      expect(getShowAlphabet(state)).toBe(false);
      const state_4 = { ...state };
      state_4.searchTerm = "";
      expect(getShowAlphabet(state_4)).toBe(true);
    });
  });
});
