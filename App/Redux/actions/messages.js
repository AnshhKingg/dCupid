import {Constants} from '../constants';
import axiosService from '../../service/axios';

export const getNotification = () => {
  return (dispatch, getState) => {
    axiosService(getState().auth.token)
      .get('/chat/get-unread-count')
      .then(resp => {
        dispatch({
          type: Constants.GET_NOTIFICATION,
          payload: resp.data.data,
        });
      })
      .catch(er => {
        console.log(er);
      });
  };
};
