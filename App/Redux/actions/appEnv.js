import { Constants } from '../constants';

export const updateAdrss = address => {
  return dispatch => dispatch({ type: Constants.SET_ADDRESS, payload: address });
};

export const resetAdrss = () => {
  return dispatch => dispatch({ type: Constants.RESET_ADDRESS });
};


