import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.module.scss';
import CommentCard from '../../CommentCard';
import CommentFormik from '../Forms/CommentFormik';
import Card from '../../Card';
import Anchor from '../../Anchor';
import Button from '../../Button';

const cx = classnames.bind(styles);

const PostDetailed = ({ match, post, createComment, user }) => (
    <>
        {post !== undefined && (
            <>
                <Card key={post._id} isDetailed {...post} />
                {Object.keys(user).length ? (
                    <CommentFormik
                        postId={match.params.id}
                        createComment={createComment}
                    />
                ) : (
                    <div className={styles.warnWrapper}>
                        <div className={cx(styles.typographyBody1)}>
                            Please login to comment
                        </div>
                        <div
                            className={cx(styles.warn, styles.typographyButton)}
                        >
                            <Anchor to="/login">
                                <Button label="login" />
                            </Anchor>
                        </div>
                    </div>
                )}
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
