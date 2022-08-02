import { Constants } from '../constants';
import axiosService from '../../service/axios';

export const likeUser = () => {
    return (dispatch, getState) => {
        axiosService(getState().auth.token).get('/user/get-likes')
            .then(resp => {
                dispatch({ type: Constants.FETCH_LIKES, payload: resp.data });
            }).catch(er => {
                console.log(er);
            });
    };
};
