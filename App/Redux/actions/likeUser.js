import {Constants} from '../constants';
import axiosService from '../../service/axios';

export const likeUser = () => {
  return (dispatch, getState) => {
    dispatch({
      type: Constants.FETCH_LIKES_LOADING,
    });
    axiosService(getState().auth.token)
      .get('/user/get-likes')
      .then(resp => {
        dispatch({
          type: Constants.FETCH_LIKES,
          payload: resp.data.data.LikedUser,
        });
      })
      .catch(er => {
        dispatch({
          type: Constants.FETCH_LIKES_FAILURE,
        });
        console.log(er);
      });
  };
};

export const getLikedReceivedUsers = () => {
  return (dispatch, getState) => {
    dispatch({
      type: Constants.FETCH_LIKES_RECEIVED_LOADING,
    });
    axiosService(getState().auth.token)
      .get('/user/get-likes-received')
      .then(resp => {
        dispatch({
          type: Constants.FETCH_LIKES_RECEIVED,
          payload: resp.data.data,
        });
      })
      .catch(er => {
        dispatch({
          type: Constants.FETCH_LIKES_RECEIVED_FAILURE,
        });
        console.log(er);
      });
  };
};
