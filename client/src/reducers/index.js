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
                posts: state.posts.map(
                    post =>
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
        case actionTypes.GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload.posts
            };
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
        case actionTypes.CREATE_LIKE_START:
            return {
                ...state
            };
        case actionTypes.CREATE_LIKE_SUCCESS:
            return {
                ...state,
                posts: state.posts.map(post=>{
                    if(post._id === action.payload.post.id){
                        return {
                            ...post,
                            likes: [...post.likes, action.payload.post.like]
                        }
                    }
                    return post;
                })
            };
        case actionTypes.CREATE_LIKE_ERROR:
            return {
                ...state
            };
        case actionTypes.DELETE_LIKE_START:
            return {
                ...state
            };
        case actionTypes.DELETE_LIKE_SUCCESS:
            return {
                ...state,
                posts: state.posts.map(post=>{
                    if(post._id === action.payload.post.postId){
                        return {
                            ...post,
                            likes: []
                        }
                    }
                    return post;
                })
            };
        case actionTypes.DELETE_LIKE_ERROR:
            return {
                ...state
            };


        default:
            return state;
    }
};

export default authentication;
