import { Constants } from '../constants/index';

const initialState = {
    data: []
};

const getConversations = (state = initialState, action) => {
    switch (action.type) {
        case Constants.GET_CONVERSATION:
            return { data: action.payload };
        default:
            return state;
    }
};

export default getConversations;