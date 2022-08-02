import { Constants } from '../constants/index';

const initialState = {
    data: []
};

const likeUser = (state = initialState, action) => {
    switch (action.type) {
        case Constants.FETCH_LIKES:
            return { data: action.payload };
        default:
            return state;
    }
};

export default likeUser;