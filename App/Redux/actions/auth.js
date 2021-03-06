import {Alert} from 'react-native';
import {Constants} from '../constants';
import axiosService from '../../service/axios';

export const login = (uid, mobile) => {
  return (dispatch, getState) => {
    console.log('api in progress');
    axiosService()
      .post('/login', {
        uid: uid,
        mobile: mobile,
      })
      .then(resp => {
        dispatch({type: Constants.SET_PROFILE, payload: resp.data.user});
        dispatch({type: Constants.SET_AUTHKEY, payload: resp.data});
      })
      .catch(er => {
        console.log(er);
        Alert.alert(er, er.response.data);
      });
  };
};

export const logout = () => {
  return (dispatch, getState) => {
    // axiosService.post('/rest-auth/logout/').then((resp) => {

    dispatch({type: Constants.REMOVE_PROFILE});
    dispatch({type: Constants.LOGOUT});
    // }).catch((er) => {
    // console.log(er.response.data);
    // })
  };
};
