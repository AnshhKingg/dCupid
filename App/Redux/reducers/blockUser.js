import {Constants} from '../constants/index';

const initialState = {
  data: [],
};

const blockUser = (state = initialState, action) => {
  switch (action.type) {
    case Constants.FETCH_BLOCK:
      return {data: action.payload};
    default:
      return state;
  }
};

export default blockUser;
