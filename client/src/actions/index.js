import actionTypes from './actionsTypes';

import {
    registerService,
    loginService,
    logoutService,
    createCommentService,
    getAllPostsService,
    createPostService
} from '../services/api';

/*
 * action creators
 */
export function loginStart() {
    return {
        type: actionTypes.LOGIN_START
    };
}

export function loginSuccess(email) {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload: { email }
    };
}

export function loginError(err) {
    return {
        type: actionTypes.LOGIN_ERROR,
        payload: { err }
    };
}

export function registerStart() {
    return {
        type: actionTypes.REGISTER_START
    };
}

export function registerSuccess(email) {
    return {
        type: actionTypes.REGISTER_SUCCESS,
        payload: { email }
    };
}

export function registerError(err) {
    return {
        type: actionTypes.REGISTER_ERROR,
        payload: { err }
    };
}

export function logoutStart() {
    return {
        type: actionTypes.LOGOUT_START
    };
}

export function logoutSuccess() {
    return {
        type: actionTypes.LOGOUT_SUCCESS
    };
}

export function logoutError() {
    return {
        type: actionTypes.LOGOUT_ERROR
    };
}

export function commentStart() {
    return {
        type: actionTypes.COMMENT_START
    };
}

export function commentSuccess(text, postId, comment) {
    return {
        type: actionTypes.COMMENT_SUCCESS,
        payload: { text, postId, comment }
    };
}

export function commentError(err) {
    return {
        type: actionTypes.COMMENT_ERROR,
        payload: { err }
    };
}

export function getPostsStart() {
    return {
        type: actionTypes.GET_POSTS_START
    };
}

export function getPostsSuccess(posts) {
    return {
        type: actionTypes.GET_POSTS_SUCCESS,
        payload: { posts }
    };
}

export function getPostsError(err) {
    return {
        type: actionTypes.GET_POSTS_ERROR,
        payload: { err }
    };
}

export function createPostStart() {
    return {
        type: actionTypes.CREATE_POST_START
    };
}

export function createPostSuccess(post) {
    return {
        type: actionTypes.CREATE_POST_SUCCESS,
        payload: { post }
    };
}

export function createPostError(err) {
    return {
        type: actionTypes.CREATE_POST_ERROR,
        payload: { err }
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

export function createComment(text, postId) {
    return dispatch => {
        dispatch(commentStart());
        createCommentService(text, postId).then(
            response => {
                dispatch(commentSuccess(text, postId, response.data.comment));
            },
            err => {
                dispatch(commentError(err));
            }
        );
    };
}

export function getPosts() {
    return dispatch => {
        dispatch(getPostsStart());

        getAllPostsService().then(
            response => {
                dispatch(getPostsSuccess(response.data.posts));
            },
            err => {
                dispatch(getPostsError(err));
            }
        );
    };
}

export function createPost(title, description, text, image) {
    return dispatch => {
        dispatch(createPostStart());

        createPostService(title, description, text, image).then(
            response => {
                dispatch(createPostSuccess(response.data.post));
            },
            err => {
                dispatch(createPostError(err));
            }
        );
    };
}
