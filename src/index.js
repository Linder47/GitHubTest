import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import reducers from './store/reducers/index';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk),
));

const app = (
    <BrowserRouter basename=''>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
