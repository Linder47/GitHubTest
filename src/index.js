import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
// import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import searchReducer from './store/reducers/search';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(searchReducer, composeEnhancers(
    applyMiddleware(thunk),
));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
