import * as actionTypes from '../actions/actionTypes';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const initialState = {
    // name: '',
    repos: {},
    loading: true,
    error: false,
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.USER_SEARCH_REQUEST:
            return {
                ...state,
            }

        case actionTypes.USER_SEARCH_SUCCES:
            return {
                ...state,
                repos: payload.repos,
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

export default reducer;

// export default combineReducers({
//     form: formReducer,
//     reducer
// });