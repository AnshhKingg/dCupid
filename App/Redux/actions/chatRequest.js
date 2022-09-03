import {Constants} from '../constants';
import axiosService from '../../service/axios';

export const getConversationsRequested = () => {
  return (dispatch, getState) => {
    dispatch({
      type: Constants.GET_CONVERSATION_REQUESTED_LOADING,
    });
    axiosService(getState().auth.token)
      .get('/chat/get-requestedconversations')
      .then(resp => {
        dispatch({
          type: Constants.GET_CONVERSATION_REQUESTED,
          payload: resp.data.data,
        });
      })
      .catch(er => {
        dispatch({
          type: Constants.GET_CONVERSATION_REQUESTED_FAILURE,
        });
        console.log('get conv error');
        console.log(er.response.data);
      });
  };
};
