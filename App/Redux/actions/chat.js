import { Alert } from 'react-native';
import { Constants } from '../constants';
import axiosService from '../../service/axios';

export const getConversations = () => {
    return (dispatch, getState) => {
        axiosService(getState().auth.token)
            .get('/chat/get-conversations/accepted')
            .then(resp => {
                console.log(resp.data.data);
                dispatch({ type: Constants.GET_CONVERSATION, payload: resp.data.data });
            })
            .catch(er => {
                console.log('get conv error');
                console.log(er.response.data);
            });
    };
};