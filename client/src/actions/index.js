import actionTypes from './actionsTypes';

import {
    registerService,
    loginService,
    logoutService,
    createCommentService
} from '../services/api';

/*
 * action creators
 */

export function loginError(err) {
    return {
        type: actionTypes.LOGIN_ERROR,
        payload: { err }
    };
}

export function loginSuccess(email) {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload: { email }
    };
}

export function loginStart() {
    return {
        type: actionTypes.LOGIN_START
    };
}

export function registerError(err) {
    return {
        type: actionTypes.REGISTER_ERROR,
        payload: { err }
    };
}

export function registerSuccess(email) {
    return {
        type: actionTypes.REGISTER_SUCCESS,
        payload: { email }
    };
}

export function registerStart() {
    return {
        type: actionTypes.REGISTER_START
    };
}

export function logoutError() {
    return {
        type: actionTypes.LOGOUT_ERROR
    };
}

export function logoutSuccess() {
    return {
        type: actionTypes.LOGOUT_SUCCESS
    };
}

export function logoutStart() {
    return {
        type: actionTypes.LOGOUT_START
    };
}

export function commentError(err) {
    return {
        type: actionTypes.COMMENT_ERROR,
        payload: { err }
    };
}

export function commentSuccess(text, postId) {
    return {
        type: actionTypes.COMMENT_SUCCESS,
        payload: { text, postId }
    };
}

export function commentStart() {
    return {
        type: actionTypes.COMMENT_START
    };
}

/*
 * action creators async
 */

export function login(email, password) {
    return dispatch => {
        dispatch(loginStart());

        loginService(email, password).then(
            () => {
                dispatch(loginSuccess(email));
            },
            err => {
                dispatch(loginError(err));
            }
        );
    };
}

export function register(email, password) {
    return dispatch => {
        dispatch(registerStart());

        registerService(email, password).then(
            () => {
                dispatch(registerSuccess(email));
            },
            err => {
                dispatch(registerError(err));
            }
        );
    };
}

export function logout() {
    return dispatch => {
        logoutService();

        dispatch(logoutSuccess());
    };
}

export function comment(text, postId) {
    return dispatch => {
        dispatch(commentStart());

        createCommentService(text, postId).then(
            () => {
                dispatch(commentSuccess(text, postId));
            },
            err => {
                dispatch(commentError(err));
            }
        );
    };
}
