import {Constants} from '../constants/index';

const initialState = {
  data: {filterOut: [], regular: []},
};

const likedReceived = (state = initialState, action) => {
  switch (action.type) {
    case Constants.FETCH_LIKES_RECEIVED:
      return {data: action.payload};
    default:
      return state;
  }
};

export default likedReceived;
