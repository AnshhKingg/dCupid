import {Constants} from '../constants';
import axiosService from '../../service/axios';

export const getConversationsDeclined = () => {
  return (dispatch, getState) => {
    axiosService(getState().auth.token)
      .get('/chat/get-declinedconversations')
      .then(resp => {
        dispatch({
          type: Constants.GET_CONVERSATION_DECLINED,
          payload: resp.data.data,
        });
      })
      .catch(er => {
        console.log(er.response.data);
      });
  };
};
