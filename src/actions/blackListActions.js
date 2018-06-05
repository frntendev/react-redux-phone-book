import * as Actions from "../constants";

export const addToBlackList = id => dispatch => {
  dispatch({
    type: Actions.ADD_TO_BLACKLIST,
    payload: id
  });
};
