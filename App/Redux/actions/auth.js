import { Alert } from 'react-native'
import axios from 'axios';
import { Constants } from '../constants';


export const login = (mobile) => {
    return (dispatch, getState) => {
        axios.post('https://vast-island-86310.herokuapp.com/rest-auth/login/', {
            "username": mobile,
            "password": "test@123"
        }, {
            withCredentials: false,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((resp) => {
            dispatch({ type: Constants.SET_AUTHKEY, payload: resp.data.key });
        }).catch((er) => {
            console.log(er.response.data);
            Alert.alert('Unable to login')
        })
    }
};

export const register = () => {
    return (dispatch, getState) => {
        axios.post('https://vast-island-86310.herokuapp.com/rest-auth/registration/', {
            "username": "",
            "email": "",
            "password1": "",
            "password2": ""
        }, {
            withCredentials: false,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((resp) => {
            console.log(resp.data);
            // dispatch({ type: Constants.SET_AUTHKEY, payload: resp.data.key });
        }).catch((er) => {
            console.log(er.response.data);
        })
    }
};

export const logout = () => {
    return (dispatch, getState) => {
        axios.post('https://vast-island-86310.herokuapp.com/rest-auth/logout/', {}, {
            withCredentials: false,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((resp) => {
            console.log(resp);
            dispatch({ type: Constants.LOGOUT });
        }).catch((er) => {
            console.log(er.response.data);
        })
    }
};