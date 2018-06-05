import _ from "lodash";
import { createSelector } from "reselect";

const getBlackList = state => state.blackList;

const getContacts = state =>
  state.contactsInfo.result !== null && state.contactsInfo.result;

export const getBlackListContacts = createSelector(
  [getContacts, getBlackList],
  (contacts, blackList) => {
    const contactsById = _.keyBy(contacts, "id");
    const contactItems = [];
    blackList.map(item => {
      return contactItems.push(contactsById[item]);
    });
    return contactItems;
  }
);
