import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.module.scss';
import CommentCard from '../../CommentCard';
import CommentFormik from '../Forms/CommentFormik';
import Card from '../../Card';

const PostDetailed = ({ match, post, createComment }) => (
    <>
        {post !== undefined && (
            <>
                <Card key={post._id} isDetailed {...post} />
                <CommentFormik
                    postId={match.params.id}
                    createComment={createComment}
                />
                <div className={styles.card}>
                    <div className={styles.header}>
                        <h5> User comments </h5>
                    </div>
                    {post.comments.map(comment => (
                        <CommentCard {...comment} />
                    ))}
                </div>
            </>
        )}
    </>
);

PostDetailed.propTypes = {
    match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    post: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    createComment: PropTypes.func.isRequired
};

export default PostDetailed;
