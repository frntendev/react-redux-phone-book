import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import nock from "nock";
import * as Actions from "../constants";
import {
  getContactsInfo,
  contactsFetched,
  contactsFetching,
  contactsFetchFailed
} from "./contactsActions";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Contacts Actions", () => {
  const store = mockStore({});

  beforeEach(() => {
    store.clearActions();
  });

  it("should execute fetch data", () => {
    nock("http://localhost:4000")
      .get("/contacts?_sort=last_name")
      .reply(200, 1);
    const expectedActions = [
      { type: Actions.CONTACT_INFO_FETCHING },
      {
        payload: 1,
        type: Actions.CONTACT_INFO_FETCHED
      }
    ];
    return store.dispatch(getContactsInfo()).then(() => {
      expect(store.getActions().length).toBe(2);
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should execute fetch failure request", () => {
    nock("http://localhost:4000")
      .get("/contacts?_sort=last_name")
      .reply(500, 1);
    const expectedActions = [
      { type: Actions.CONTACT_INFO_FETCHING },
      {
        payload: "error",
        type: Actions.CONTACT_INFO_FAILED
      }
    ];
    return store.dispatch(getContactsInfo()).then(() => {
      expect(store.getActions().length).toBe(2);
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should execute fetch failure request", () => {
    nock("http://localhost:4000")
      .get("/contacts?_sort=last_name")
      .replyWithError("serverError");
    const expectedActions = [
      { type: Actions.CONTACT_INFO_FETCHING },
      {
        type: Actions.CONTACT_INFO_FAILED
      }
    ];
    return store.dispatch(getContactsInfo()).then(() => {
      expect(store.getActions().length).toBe(2);
      expect(store.getActions()).toMatchObject(expectedActions);
    });
  });
});
