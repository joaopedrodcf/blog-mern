/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';
import Anchor from '../Anchor';

const cx = classnames.bind(styles);

const formatDate = date => new Date(date).toDateString();

const renderCard = (_id, title, description, isLiked, likes, handleLike) => (
    <>
        <div className={cx(styles.cardText, styles.typographyBody1)}>
            {description}
        </div>
        <div className={styles.cardOptions}>
            <Anchor
                to={`/post/${_id}`}
                colorAnchor="blue"
                otherStyles={cx(styles.typographyButton, styles.reset)}
                title={title}
            >
                Read more
            </Anchor>
            <div className={styles.optionsLeft}>
                <div
                    className={cx(
                        styles.heart,
                        isLiked ? styles.liked : styles.disliked
                    )}
                    onClick={handleLike}
                >
                    <FontAwesomeIcon icon="heart" />
                    {likes.length}
                </div>
                <div className={styles.shareAlt}>
                    <FontAwesomeIcon icon="share-alt" />
                </div>
            </div>
        </div>
    </>
);

const renderCardDetail = (text, likes, isLiked, handleLike) => (
    <>
        <div className={cx(styles.cardText, styles.typographyBody1)}>
            {text}
        </div>
        <div className={styles.cardOptionsLeft}>

            <div className={styles.optionsLeft}>
                <div
                    className={cx(
                        styles.heart,
                        isLiked ? styles.liked : styles.disliked
                    )}
                    onClick={handleLike}
                >
                    <FontAwesomeIcon icon="heart" />
                    {likes.length}
                </div>
                <div className={styles.shareAlt}>
                    <FontAwesomeIcon icon="share-alt" />
                </div>
            </div>
        </div>
    </>
);

class Card extends Component {
    constructor(props) {
        super(props);

        this.handleLike = this.handleLike.bind(this);
    }

    handleLike() {
        const { _id, likePost, isLiked } = this.props;

        likePost(_id, isLiked);
    }

    render() {
        const {
            _id,
            title,
            date,
            description,
            image,
            author,
            text,
            isDetailed,
            likes,
            isLiked
        } = this.props;

        return (
            <div className={styles.card}>
                <div className={styles.cardTitle}>
                    <h5>{title}</h5>
                    <div
                        className={cx(
                            styles.cardBy,
                            styles.typographySubtitle1
                        )}
                    >
                        by {author.email} on {formatDate(date)}
                    </div>
                </div>
                <div className={styles.cardImage}>
                    <img alt="img-card" src={image} />
                </div>
                {isDetailed
                    ? renderCardDetail(
                        text,
                        likes,
                        isLiked,
                        this.handleLike
                    )
                    : renderCard(
                        _id,
                        title,
                        description,
                        isLiked,
                        likes,
                        this.handleLike
                    )}
            </div>
        );
    }
}

Card.propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    text: PropTypes.string.isRequired,
    isDetailed: PropTypes.bool.isRequired
};

export default Card;
