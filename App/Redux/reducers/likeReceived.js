import {Constants} from '../constants/index';

const initialState = {
  loading: false,
  data: {filterOut: [], regular: []},
  error: null,
};

const likedReceived = (state = initialState, action) => {
  switch (action.type) {
    case Constants.FETCH_LIKES_RECEIVED_LOADING:
      return {...state, loading: true};
    case Constants.FETCH_LIKES_RECEIVED:
      return {...state, data: action.payload, loading: false};
    case Constants.FETCH_LIKES_RECEIVED_FAILURE:
      return {...state, data: {filterOut: [], regular: []}, loading: false};
    default:
      return state;
  }
};

export default likedReceived;
