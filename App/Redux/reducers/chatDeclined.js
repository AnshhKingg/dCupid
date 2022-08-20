import { Constants } from '../constants/index';

const initialState = {
    data: []
};

const getDeclinedConversations = (state = initialState, action) => {
    switch (action.type) {
        case Constants.GET_CONVERSATION_DECLINED:
            return { data: action.payload };
        default:
            return state;
    }
};

export default getDeclinedConversations;