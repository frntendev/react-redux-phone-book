import * as Actions from "../constants";

const initialState = "";
export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.CHANGE_SEARCHTERM:
      return action.payload;

    default:
      return state;
  }
};
