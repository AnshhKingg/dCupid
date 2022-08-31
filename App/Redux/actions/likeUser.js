import {Constants} from '../constants';
import axiosService from '../../service/axios';

export const likeUser = () => {
  return (dispatch, getState) => {
    axiosService(getState().auth.token)
      .get('/user/get-likes')
      .then(resp => {
        dispatch({
          type: Constants.FETCH_LIKES,
          payload: resp.data.data.userLikes,
        });
      })
      .catch(er => {
        console.log(er);
      });
  };
};

export const getLikedReceivedUsers = () => {
  return (dispatch, getState) => {
    axiosService(getState().auth.token)
      .get('/user/get-likes-received')
      .then(resp => {
        dispatch({
          type: Constants.FETCH_LIKES_RECEIVED,
          payload: resp.data.data,
        });
      })
      .catch(er => {
        console.log(er);
      });
  };
};
