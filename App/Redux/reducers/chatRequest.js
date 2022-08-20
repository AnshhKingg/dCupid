import { Constants } from '../constants/index';

const initialState = {
    data: []
};

const getRequestedConversations = (state = initialState, action) => {
    switch (action.type) {
        case Constants.GET_CONVERSATION_REQUESTED:
            return { data: action.payload };
        default:
            return state;
    }
};

export default getRequestedConversations;