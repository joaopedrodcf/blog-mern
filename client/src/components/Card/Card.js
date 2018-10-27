import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';
import Anchor from '../Anchor';

const formatDate = date => new Date(date).toDateString();

const renderCard = (_id, title, description) => (
    <>
        <div className={classnames(styles.cardText, styles.typographyBody1)}>
            {description}
        </div>
        <div className={styles.cardOptions}>
            <Anchor
                to={`/post/${_id}`}
                colorAnchor="blue"
                otherStyles={classnames(styles.typographyButton, styles.reset)}
                title={title}
            >
                Read more
            </Anchor>
            <div className={styles.optionsLeft}>
                <div className={styles.heart}>
                    <FontAwesomeIcon icon="heart" />
                </div>
                <div className={styles.shareAlt}>
                    <FontAwesomeIcon icon="share-alt" />
                </div>
            </div>
        </div>
    </>
);

const renderCardDetail = text => (
    <>
        <div className={classnames(styles.cardText, styles.typographyBody1)}>
            {text}
        </div>
    </>
);

const Card = ({
    _id,
    title,
    date,
    description,
    image,
    author,
    text,
    isDetailed
}) => (
    <div className={styles.card}>
        <div className={styles.cardTitle}>
            <h5>{title}</h5>
            <div
                className={classnames(
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
            ? renderCardDetail(text)
            : renderCard(_id, title, description)}
    </div>
);

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
