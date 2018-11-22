import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Main from './Main';
import * as actions from '../../actions';

const mapStateToProps = ({ errorMessage, posts, user }, ownProps) => ({
    errorMessage,
    ownProps,
    posts,
    user
});

const mapDispatchToProps = dispatch => ({
    login: (email, password) => {
        dispatch(actions.login(email, password));
    },
    register: (email, password) => {
        dispatch(actions.register(email, password));
    },
    createComment: (text, postId) => {
        dispatch(actions.createComment(text, postId));
    },
    getPosts: () => {
        dispatch(actions.getPosts());
    },
    createPost: (title, description, text, image) => {
        dispatch(actions.createPost(title, description, text, image));
    },
    likePost: (postId, isLiked) => {
        dispatch(actions.likePost(postId, isLiked));
    }
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Main)
);
