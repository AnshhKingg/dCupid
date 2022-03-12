import {Constants} from '../constants/index';

const initialState = {
  address: '4904 Goldner Ranch.',
};

const appEnv = (state = initialState, action) => {
  switch (action.type) {
    case Constants.SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };

    case Constants.RESET_ADDRESS:
      return {
        ...state,
        address: initialState.address,
      };

    default:
      return state;
  }
};

export default appEnv;
