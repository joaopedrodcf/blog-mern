import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Main from './Main';
import {
    login,
    register,
    createComment,
    getPosts,
    createPost
} from '../../actions';

const mapStateToProps = (
    { isAuthenticated, email, errorMessage, posts, user },
    ownProps
) => ({
    isAuthenticated,
    email,
    errorMessage,
    ownProps,
    posts,
    user
});

const mapDispatchToProps = dispatch => ({
    login: (email, password) => {
        dispatch(login(email, password));
    },
    register: (email, password) => {
        dispatch(register(email, password));
    },
    createComment: (text, postId) => {
        dispatch(createComment(text, postId));
    },
    getPosts: () => {
        dispatch(getPosts());
    },
    createPost: (title, description, text, image) => {
        dispatch(createPost(title, description, text, image));
    }
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Main)
);
