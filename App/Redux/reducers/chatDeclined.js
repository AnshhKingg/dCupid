import {Constants} from '../constants/index';

const initialState = {
  loading: false,
  data: {byMe: [], byOther: []},
  error: null,
};

const getDeclinedConversations = (state = initialState, action) => {
  switch (action.type) {
    case Constants.GET_CONVERSATION_DECLINED_LOADING:
      return {...state, loading: true};
    case Constants.GET_CONVERSATION_DECLINED:
      return {...state, data: action.payload, loading: false};
    case Constants.GET_CONVERSATION_DECLINED_FAILURE:
      return {...state, loading: false, data: {byMe: [], byOther: []}};
    default:
      return state;
  }
};

export default getDeclinedConversations;
