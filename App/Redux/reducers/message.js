import {Constants} from '../constants/index';

const initialState = 0;

const likeUser = (state = initialState, action) => {
  switch (action.type) {
    case Constants.GET_NOTIFICATION:
      return action.payload;
    default:
      return state;
  }
};

export default likeUser;
