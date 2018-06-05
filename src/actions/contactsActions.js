import fetch from "isomorphic-fetch";
import * as Actions from "../constants";

export const getContactsInfo = () => dispatch => {
  dispatch(contactsFetching());
  return fetch("http://localhost:4000/contacts?_sort=last_name")
    .then(res => {
      if (res.status !== 200) dispatch(contactsFetchFailed("error"));
      else return res.json();
    })
    .then(res => {
      if (res) dispatch(contactsFetched(res));
    })
    .catch(err => {
      dispatch(contactsFetchFailed(err));
    });
};

export const contactsFetching = () => ({
  type: Actions.CONTACT_INFO_FETCHING
});

export const contactsFetched = res => ({
  type: Actions.CONTACT_INFO_FETCHED,
  payload: res
});

export const contactsFetchFailed = err => ({
  type: Actions.CONTACT_INFO_FAILED,
  payload: err
});
