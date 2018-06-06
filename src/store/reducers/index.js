import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import inputName from './inputName';
import search from './search';

export default combineReducers({
    form: formReducer,
    inputName,
    search,
});