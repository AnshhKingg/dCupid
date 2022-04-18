import { Constants } from '../constants/index';

const initialState = {
    key: null
};

const auth = (state = initialState, action) => {
    switch (action.type) {

        case Constants.SET_AUTHKEY:
            return {
                key: action.payload,
            };

        case Constants.LOGOUT:
            return {
                key: null,
            };

        default:
            return state;
    }
};

export default auth;
