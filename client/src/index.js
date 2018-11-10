import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
    faWindowClose,
    faBars,
    faHeart,
    faShareAlt,
    faUserCircle,
    faHome,
    faEnvelope,
    faPen
} from '@fortawesome/free-solid-svg-icons';

import Routes from './Routes';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';

library.add(
    fab,
    faBars,
    faWindowClose,
    faHeart,
    faShareAlt,
    faUserCircle,
    faHome,
    faEnvelope,
    faPen
);

const initialState = {
    isAuthenticated: !!localStorage.getItem('token'),
    email: localStorage.getItem('email'),
    posts: [],
    user: {}
};

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Routes />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
