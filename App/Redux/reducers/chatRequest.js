import {Constants} from '../constants/index';

const initialState = {
  loading: false,
  data: {filterOut: [], regular: []},
  error: null,
};

const getRequestedConversations = (state = initialState, action) => {
  switch (action.type) {
    case Constants.GET_CONVERSATION_REQUESTED_LOADING:
      return {...state, loading: true};
    case Constants.GET_CONVERSATION_REQUESTED:
      return {...state, loading: false, data: action.payload};
    case Constants.GET_CONVERSATION_REQUESTED_FAILURE:
      return {...state, loading: false, data: {filterOut: [], regular: []}};
    default:
      return state;
  }
};

export default getRequestedConversations;
