import React from 'react';
import ReactDOM from 'react-dom';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { HashRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import {AppState, rootReducer} from './store/reducers/index';

import App from './containers/App/App';
import '@/assets/scss/app.scss';
import { AppAction, } from './store/types/actions';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk as ThunkMiddleware<AppState, AppAction>];
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

const app = (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
