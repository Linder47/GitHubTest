import axios from 'axios';
import * as actionTypes from './actionTypes';
import routes from '../../routes';

export const getData = name => async (dispatch) => {
    dispatch(actionTypes.USER_SEARCH_REQUEST());
    try {
        const url = routes.userUrl(name);
        const response = await axios.get(url);
        dispatch(actionTypes.USER_SEARCH_SUCCES({ repos: response.data }));
    } catch (e) {
        dispatch(actionTypes.USER_SEARCH_FAILURE());
    }
};

export const searchUser = (name) => ({
    type: actionTypes.NEW_SEARCH_USER,
    payload: {
        name,
    }
});