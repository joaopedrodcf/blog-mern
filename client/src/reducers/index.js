import actionTypes from '../actions/actionsTypes';

const authentication = (state = [], action) => {
    switch (action.type) {
        case actionTypes.LOGIN_START:
            return {
                ...state
            };
        case actionTypes.LOGIN_SUCCESS: {
            const { user } = action.payload;

            return {
                ...state,
                user,
                errorMessage: 'success'
            };
        }
        case actionTypes.LOGIN_ERROR:
            return {
                ...state,
                errorMessage: action.payload.err.response.data.message
            };

        case actionTypes.REGISTER_START:
            return {
                ...state
            };
        case actionTypes.REGISTER_SUCCESS: {
            const { user } = action.payload;

            return {
                ...state,
                user,
                errorMessage: 'success'
            };
        }
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
                user: {}
            };
        case actionTypes.LOGOUT_ERROR:
            return {
                ...state
            };

        case actionTypes.COMMENT_START:
            return {
                ...state
            };
        case actionTypes.COMMENT_SUCCESS: {
            const { postId, comment } = action.payload;

            const posts = state.posts.map(post =>
                post._id === postId
                    ? {
                          ...post,
                          comments: [...post.comments, comment]
                      }
                    : post
            );

            return {
                ...state,
                posts
            };
        }
        case actionTypes.COMMENT_ERROR:
            return {
                ...state
            };

        case actionTypes.GET_POSTS_START:
            return {
                ...state
            };
        case actionTypes.GET_POSTS_SUCCESS: {
            const email = localStorage.getItem('email');

            if (email) {
                const posts = action.payload.posts.map(post => {
                    const { likes } = post;

                    for (let index = 0; index < likes.length; index++) {
                        if (likes[index].author.email === email) {
                            return {
                                ...post,
                                isLiked: true
                            };
                        }
                    }

                    return {
                        ...post
                    };
                });

                return {
                    ...state,
                    posts
                };
            }

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
        case actionTypes.LIKE_POST_SUCCESS: {
            const { postId, like } = action.payload;

            const posts = state.posts.map(post =>
                post._id === postId
                    ? {
                          ...post,
                          likes: [...post.likes, like],
                          isLiked: true
                      }
                    : post
            );

            return {
                ...state,
                posts
            };
        }

        case actionTypes.LIKE_POST_ERROR:
            return {
                ...state
            };

        case actionTypes.DISLIKE_POST_SUCCESS: {
            const { postId } = action.payload;
            const email = localStorage.getItem('email');

            const posts = state.posts.map(post => {
                const { likes } = post;

                if (post._id === postId) {
                    for (let index = 0; index < likes.length; index++) {
                        if (likes[index].author.email === email) {
                            likes.splice(index, 1);

                            return {
                                ...post,
                                likes,
                                isLiked: false
                            };
                        }
                    }
                }

                return {
                    post
                };
            });

            return {
                ...state,
                posts
            };
        }

        case actionTypes.DISLIKE_POST_ERROR:
            return {
                ...state
            };

        default:
            return state;
    }
};

export default authentication;
