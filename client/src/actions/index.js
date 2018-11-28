import actionTypes from './actionsTypes';

import * as services from '../services/api';

/*
 * action creators
 */
export function loginStart() {
    return {
        type: actionTypes.LOGIN_START
    };
}

export function loginSuccess(user) {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload: { user }
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

export function registerSuccess(user) {
    return {
        type: actionTypes.REGISTER_SUCCESS,
        payload: { user }
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

export function likePostStart() {
    return {
        type: actionTypes.LIKE_POST_START
    };
}

export function likePostSuccess(postId, like) {
    return {
        type: actionTypes.LIKE_POST_SUCCESS,
        payload: { postId, like }
    };
}

export function likePostError(err) {
    return {
        type: actionTypes.LIKE_POST_ERROR,
        payload: { err }
    };
}

export function dislikePostStart() {
    return {
        type: actionTypes.DISLIKE_POST_START
    };
}

export function dislikePostSuccess(postId, like) {
    return {
        type: actionTypes.DISLIKE_POST_SUCCESS,
        payload: { postId, like }
    };
}

export function dislikePostError(err) {
    return {
        type: actionTypes.DISLIKE_POST_ERROR,
        payload: { err }
    };
}

/*
 * action creators async
 */

export function login(email, password) {
    return dispatch => {
        dispatch(loginStart());

        services.loginService(email, password).then(
            response => {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('email', email);
                dispatch(loginSuccess(response.data.user));
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

        services.registerService(email, password).then(
            response => {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('email', email);
                const user = { email };
                dispatch(registerSuccess(user));
            },
            err => {
                dispatch(registerError(err));
            }
        );
    };
}

export function logout() {
    return dispatch => {
        services.logoutService();

        dispatch(logoutSuccess());
    };
}

export function getPosts() {
    return dispatch => {
        dispatch(getPostsStart());

        services.getAllPostsService().then(
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

        services.createPostService(title, description, text, image).then(
            response => {
                dispatch(createPostSuccess(response.data.post));
            },
            err => {
                dispatch(createPostError(err));
            }
        );
    };
}

export function createComment(text, postId) {
    return dispatch => {
        dispatch(commentStart());
        services.createCommentService(text, postId).then(
            response => {
                dispatch(commentSuccess(text, postId, response.data.comment));
            },
            err => {
                dispatch(commentError(err));
            }
        );
    };
}

export function likePost(postId, isLiked) {
    return dispatch => {
        dispatch(likePostStart());

        if (!isLiked) {
            services.likePostService(postId).then(
                response => {
                    dispatch(likePostSuccess(postId, response.data.like));
                },
                err => {
                    dispatch(likePostError(err));
                }
            );
        } else {
            services.dislikePostService(postId).then(
                () => {
                    dispatch(dislikePostSuccess(postId));
                },
                err => {
                    dispatch(dislikePostError(err));
                }
            );
        }
    };
}
