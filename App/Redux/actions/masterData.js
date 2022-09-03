import {Constants} from '../constants';
import axiosService from '../../service/axios';

export const masterData = () => {
  return dispatch => {
    axiosService()
      .get('/masterdata')
      .then(resp => {
        console.log('Master api ran');
        dispatch({type: Constants.SET_DATA, payload: resp.data});
      })
      .catch(er => {
        console.log(er);
        console.log('Master api failed');
      });
  };
};
