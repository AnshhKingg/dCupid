import {Constants} from '../constants/index';

const initialState = {
  data: [],
};

const getConversations = (state = initialState, action) => {
  switch (action.type) {
    case Constants.GET_CONVERSATION_LOADING:
      return {...state, loading: true};
    case Constants.GET_CONVERSATION:
      return {...state, data: action.payload, loading: false};
    case Constants.GET_CONVERSATION_FAILURE:
      return {...state, loading: false, data: []};
    default:
      return state;
  }
};

export default getConversations;
