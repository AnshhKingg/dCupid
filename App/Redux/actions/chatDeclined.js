import {Constants} from '../constants';
import axiosService from '../../service/axios';

export const getConversationsDeclined = () => {
  return (dispatch, getState) => {
    dispatch({
      type: Constants.GET_CONVERSATION_DECLINED_LOADING,
    });
    axiosService(getState().auth.token)
      .get('/chat/get-declinedconversations')
      .then(resp => {
        dispatch({
          type: Constants.GET_CONVERSATION_DECLINED,
          payload: resp.data.data,
        });
      })
      .catch(er => {
        dispatch({
          type: Constants.GET_CONVERSATION_DECLINED_FAILURE,
        });
        console.log(er.response.data);
      });
  };
};
