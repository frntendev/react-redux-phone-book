import * as Actions from "../constants";

const initialState = {
  readyState: Actions.CONTACT_INFO_INVALID,
  result: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.CONTACT_INFO_FETCHING:
      return {
        ...state,
        readyState: Actions.CONTACT_INFO_FETCHING
      };
    case Actions.CONTACT_INFO_FAILED:
      return {
        ...state,
        readyState: Actions.CONTACT_INFO_FAILED,
        result: action.payload
      };
    case Actions.CONTACT_INFO_FETCHED:
      return {
        ...state,
        readyState: Actions.CONTACT_INFO_FETCHED,
        result: action.payload
      };
    case Actions.ADD_TO_BLACKLIST:
      const user = state.result.find(item => {
        if (item.id === action.payload) return item;
        return null;
      });
      if (user) user.is_blocked = !user.is_blocked;
      return {
        ...state
      };
    default:
      return state;
  }
};
