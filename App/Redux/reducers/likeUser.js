import {Constants} from '../constants/index';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const likeUser = (state = initialState, action) => {
  switch (action.type) {
    case Constants.FETCH_LIKES_LOADING:
      return {...state, loading: true};
    case Constants.FETCH_LIKES:
      return {...state, data: action.payload, loading: false};
    case Constants.FETCH_LIKES_FAILURE:
      return {...state, data: [], loading: false};
    default:
      return state;
  }
};

export default likeUser;
