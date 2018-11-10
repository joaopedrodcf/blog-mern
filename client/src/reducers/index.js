import actionTypes from '../actions/actionsTypes';

const authentication = (state = [], action) => {
    switch (action.type) {
        case actionTypes.LOGIN_START:
            return {
                ...state
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                user: {
                    email: action.payload.email
                },
                isAuthenticated: true,
                errorMessage: 'success',
                email: action.payload.email
            };
        case actionTypes.LOGIN_ERROR:
            return {
                ...state,
                errorMessage: action.payload.err.response.data.message
            };

        case actionTypes.REGISTER_START:
            return {
                ...state
            };
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                user: {
                    email: action.payload.email
                },
                isAuthenticated: true,
                errorMessage: 'success',
                email: action.payload.email
            };
        case actionTypes.REGISTER_ERROR:
            return {
                ...state,
                errorMessage: 'The user already exists' // needs dev in BE to pass error message correctly
            };

        case actionTypes.LOGOUT_START:
            return {
                ...state
            };
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                user: {},
                isAuthenticated: false
            };
        case actionTypes.LOGOUT_ERROR:
            return {
                ...state
            };

        case actionTypes.COMMENT_START:
            return {
                ...state
            };
        case actionTypes.COMMENT_SUCCESS:
            return {
                ...state,
                posts: state.posts.map(post =>
                    post._id === action.payload.postId
                        ? {
                              ...post,
                              comments: [
                                  ...post.comments,
                                  action.payload.comment
                              ]
                          }
                        : post
                )
            };
        case actionTypes.COMMENT_ERROR:
            return {
                ...state
            };

        case actionTypes.GET_POSTS_START:
            return {
                ...state
            };
        case actionTypes.GET_POSTS_SUCCESS: {
            state.posts.map(post => {
                if (post._id === action.payload.postId) {
                    return {
                        ...post,
                        liked: [...post.comments, action.payload.comment]
                    };
                }
            });

            return {
                ...state,
                posts: action.payload.posts
            };
        }

        case actionTypes.GET_POSTS_ERROR:
            return {
                ...state
            };

        case actionTypes.CREATE_POST_START:
            return {
                ...state
            };
        case actionTypes.CREATE_POST_SUCCESS:
            return {
                ...state,
                posts: [action.payload.post, ...state.posts]
            };
        case actionTypes.CREATE_POST_ERROR:
            return {
                ...state
            };

        case actionTypes.LIKE_POST_START:
            return {
                ...state
            };
        case actionTypes.LIKE_POST_SUCCESS:
            return {
                ...state,
                posts: state.posts.map(post =>
                    post._id === action.payload.postId
                        ? {
                              ...post,
                              likes: [...post.likes, action.payload.comment]
                          }
                        : post
                )
            };
        case actionTypes.LIKE_POST_ERROR:
            return {
                ...state
            };

        default:
            return state;
    }
};

export default authentication;
