import _ from "lodash";
import { createSelector } from "reselect";

const getContactInfo = state => state.contactsInfo;

const getContacts = state =>
  state.contactsInfo.result !== null && state.contactsInfo.result;

const getSearchTerm = state => state.searchTerm;

export const getContactsByAlphabet = createSelector([getContacts], contacts => {
  const result = _(contacts)
    .groupBy(o => o.last_name[0].toUpperCase())
    .map((contacts, letter) => ({ letter, contacts }))
    .value();
  return result;
});

export const getFilteredContacts = createSelector(
  [getContacts, getSearchTerm],
  (contacts, searchTerm) => {
    if (contacts.length > 0)
      return contacts.filter(
        s =>
          searchTerm === "" ||
          s.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          s.last_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }
);

export const getShowFiltered = createSelector(
  [getContactInfo, getSearchTerm],
  (contactsInfo, searchTerm) => {
    return (
      searchTerm !== "" && contactsInfo.readyState === "CONTACT_INFO_FETCHED"
    );
  }
);

export const getShowAlphabet = createSelector(
  [getContactInfo, getSearchTerm],
  (contactsInfo, searchTerm) => {
    return (
      searchTerm === "" && contactsInfo.readyState === "CONTACT_INFO_FETCHED"
    );
  }
);
