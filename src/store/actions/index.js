import axios from 'axios';
import * as actionTypes from './actionTypes';
import routes from '../../routes';

export const requestRepos = (query) => ({
    type: actionTypes.USER_SEARCH_REQUEST,
    payload: { query },
});

export const reposSuccess = (repos) => ({
    type: actionTypes.USER_SEARCH_SUCCES,
    payload: { repos },
});

export const reposFailure = (error) => ({
    type: actionTypes.USER_SEARCH_FAILURE,
    error,
});

export const fetchRepos = name => async dispatch => {
    try {
        const urlUser = routes.userUrl(name);
        const urlOrg = routes.orgUrl(name);
        const response = await axios.get(urlUser || urlOrg)
        console.log(response);
        dispatch(reposSuccess({ repos: response.data }));
    } catch (e) {
        dispatch(reposFailure(e));
    }
};

export const searchUser = (name) => ({
    type: actionTypes.NEW_SEARCH_USER,
    payload: {
        name,
    }
});