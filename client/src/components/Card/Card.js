import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';
import Anchor from '../Anchor';

const cx = classnames.bind(styles);

const formatDate = date => new Date(date).toDateString();

const renderCard = (_id, title, description, handleLikeClick, isLike) => (
    <Fragment>
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
                <div className={isLike?`${styles.heart} ${styles.clicked}`: `${styles.heart}`} onClick={handleLikeClick}>
                    <FontAwesomeIcon icon="heart" />
                </div>
                <div className={styles.shareAlt}>
                    <FontAwesomeIcon icon="share-alt" />
                </div>
            </div>
        </div>
    </Fragment>
);

const renderCardDetail = text => (
    <>
        <div className={cx(styles.cardText, styles.typographyBody1)}>
            {text}
        </div>
    </>
);

class Card extends Component{

    handleLikeClick =()=>{
        const { createLike, deleteLike, _id, isLike} = this.props;
        isLike? deleteLike(_id): createLike(_id);
    }

    render(){
        const {
            _id,
            title,
            date,
            description,
            image,
            author,
            text,
            isDetailed,
            isLike,
        } = this.props;

        return (
            <div className={styles.card}>
                <div className={styles.cardTitle}>
                    <h5>{title}</h5>
                    <div className={cx(styles.cardBy, styles.typographySubtitle1)}>
                        by {author.email} on {formatDate(date)}
                    </div>
                </div>
                <div className={styles.cardImage}>
                    <img alt="img-card" src={image} />
                </div>
                {isDetailed
                    ? renderCardDetail(text)
                    : renderCard(_id, title, description, this.handleLikeClick, isLike)}
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
    isDetailed: PropTypes.bool.isRequired,
    createLike: PropTypes.func,
    isLike: PropTypes.bool.isRequired,
    deleteLike: PropTypes.func,
};

export default Card;
