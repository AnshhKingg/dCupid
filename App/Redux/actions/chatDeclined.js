import { Constants } from '../constants';
import axiosService from '../../service/axios';

export const getConversationsDeclined = () => {
    return (dispatch, getState) => {
        axiosService(getState().auth.token)
            .get('/chat/get-conversations/declined')
            .then(resp => {
                console.log(resp.data);
                dispatch({ type: Constants.GET_CONVERSATION_DECLINED, payload: resp.data.data });
            })
            .catch(er => {
                console.log(er.response.data);
            });
    };
};