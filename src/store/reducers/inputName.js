import * as actionTypes from '../actions/actionTypes';
// import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';

const initialState = {
  name: '',
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.NEW_SEARCH_USER:
      return {
        ...state,
        name: payload.name,
      };
    default:
      return state;
  }
};

export default reducer;

// export default combineReducers({
//     reducer,
// });
