import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Main from './Main';
import { login, register, comment, getPosts } from '../../actions';

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
    comment: (text, postId) => {
        dispatch(comment(text, postId));
    },
    getPosts: () => {
        dispatch(getPosts());
    }
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Main)
);
