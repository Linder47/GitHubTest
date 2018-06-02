import * as actionTypes from '../actions/actionTypes';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const initialState = {
    name: '',
    repos: {},
    loading: true,
    error: false,
};

const fetchState = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case actionTypes.USER_SEARCH_REQUEST:
            return {
                ...state,
            }

        case actionTypes.USER_SEARCH_SUCCES:
            return {
                ...state,
                loading: false,
            }

        case actionTypes.USER_SEARCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            }

        default:
            return state;
    }
}

const searchUser = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case actionTypes.NEW_SEARCH_USER:
            return {
                ...state,
                name: payload.name,
            }
        default:
            return state;
    }
};

export default combineReducers({
    fetchState,
    searchUser,
    form: formReducer,
});