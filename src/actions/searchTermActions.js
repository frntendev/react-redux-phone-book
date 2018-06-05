import * as Actions from "../constants";

export const changeSearchTerm = value => dispatch => {
  dispatch({
    type: Actions.CHANGE_SEARCHTERM,
    payload: value
  });
};
