import * as Actions from "../constants";

const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_TO_BLACKLIST:
      const hasItem = state.indexOf(action.payload) > -1;
      if (hasItem) return state.filter(s => s !== action.payload);
      else return [...state, action.payload];

    default:
      return state;
  }
};
