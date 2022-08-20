import { Constants } from '../constants';
import axiosService from '../../service/axios';

export const getConversationsRequested = () => {
    return (dispatch, getState) => {
        axiosService(getState().auth.token)
            .get('/chat/get-conversations/requested')
            .then(resp => {
                console.log(resp.data);
                dispatch({ type: Constants.GET_CONVERSATION_REQUESTED, payload: resp.data.data });
            })
            .catch(er => {
                console.log('get conv error');
                console.log(er.response.data);
            });
    };
};