import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import Button from '../Button';
import Anchor from '../Anchor';

const formatDate = date => new Date(date).toDateString();

const Card = ({ _id, title, date, description, image, author }) => (
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
        <div className={classnames(styles.cardText, styles.typographyBody1)}>
            {description}
        </div>
        <div className={styles.cardOptions}>
            <Anchor
                to={`/post/${_id}`}
                colorAnchor="blue"
                otherStyles={classnames(styles.typographyButton, styles.reset)}
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
    </div>
);

Card.propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default Card;
