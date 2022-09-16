import {Alert} from 'react-native';
import {Constants} from '../constants';
import axiosService from '../../service/axios';
import {navigationRef} from '../../Routes/navigation/RootNavigation';
import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';

export const login = (uid, mobile, token, id) => {
  return (dispatch, getState) => {
    console.log('api in progress', mobile);
    axiosService()
      .post('/login', {
        uid: uid,
        mobile: mobile,
        token: token,
        deviceId: id,
      })
      .then(resp => {
        console.log('-------login resp----------', resp.data);
        dispatch({type: Constants.SET_PROFILE, payload: resp.data.user});
        dispatch({type: Constants.SET_AUTHKEY, payload: resp.data});
      })
      .catch(er => {
        console.log(er.response.data);
        if (
          er?.response?.data?.message ===
          "You can't login this user because it is deleted."
        ) {
          dispatch({type: Constants.LOGOUT});
          auth().signOut();
          navigationRef.current.navigate('homepage');
          Alert.alert('Error', 'Your account is under deletion.');
        }

        // Alert.alert(er, er.response.data);
      });
  };
};

export const logout = () => {
  return async (dispatch, getState) => {
    const deviceId = await messaging().getToken();
    axiosService(getState().auth.token)
      .get(`/user/logout/${deviceId}`)
      .then(() => {
        dispatch({type: Constants.REMOVE_PROFILE});
        dispatch({type: Constants.LOGOUT});
      })
      .catch(er => {
        dispatch({type: Constants.REMOVE_PROFILE});
        dispatch({type: Constants.LOGOUT});
        console.log(er.response.data);
      });
  };
};
