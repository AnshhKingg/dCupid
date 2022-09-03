import { Constants } from '../constants';
import axiosService from '../../service/axios';

export const blockUser = () => {
    return (dispatch, getState) => {
        axiosService(getState().auth.token)
            .post('/user/get-block')
            .then(resp => {
                dispatch({ type: Constants.FETCH_BLOCK, payload: resp.data });
            })
            .catch(er => {
                console.log(er);
            });
    };
};

