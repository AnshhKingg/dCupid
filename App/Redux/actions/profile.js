import {Constants} from '../constants';
import axiosService from '../../service/axios';
import auth from '@react-native-firebase/auth';

export const setProfile = data => {
  return dispatch => {
    dispatch({type: Constants.SET_PROFILE, payload: data});
  };
};

export const getProfile = () => {
  return (dispatch, getState) => {
    axiosService(getState().auth.token)
      .get('/user/get-profile')
      .then(resp => {
        console.log('Profile get update.');
        dispatch({type: Constants.SET_PROFILE, payload: resp.data.data});
      })
      .catch(er => {
        if (er?.response?.data?.status === 'Unauthorized') {
          dispatch({type: Constants.LOGOUT});
          auth().signOut();
        }
      });
  };
};

export const updateProfile = data => {
  return (dispatch, getState) => {
    axiosService(getState().auth.token)
      .post('/user/update', data)
      .then(resp => {
        console.log('Update data');
        dispatch({type: Constants.SET_PROFILE, payload: resp.data.user});
      })
      .catch(er => {
        console.log(er);
        // Alert.alert(er, er.response.data);
      });
  };
};

export const removeProfile = data => {
  return (dispatch, getState) => {
    dispatch({type: Constants.REMOVE_PROFILE});
  };
};
