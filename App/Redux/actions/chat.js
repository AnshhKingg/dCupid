import {Alert} from 'react-native';
import {Constants} from '../constants';
import axiosService from '../../service/axios';

export const getConversations = () => {
  return (dispatch, getState) => {
    dispatch({
      type: Constants.GET_CONVERSATION_LOADING,
    });
    axiosService(getState().auth.token)
      .get('/chat/get-conversations/accepted')
      .then(resp => {
        dispatch({type: Constants.GET_CONVERSATION, payload: resp.data.data});
      })
      .catch(er => {
        dispatch({
          type: Constants.GET_CONVERSATION_FAILURE,
        });
        console.log('get conv error');
        console.log(er.response.data);
      });
  };
};
