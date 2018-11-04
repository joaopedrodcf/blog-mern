import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import formatDate from '../../utils/date';

const cx = classnames.bind(styles);

const CommentCard = ({ _id, author, date, text }) => (
    <div key={_id} className={styles.comment}>
        <h6>{author.email}</h6>
        <div className={cx(styles.typographySubtitle2, styles.date)}>
            on {formatDate(date)}
        </div>
        <div className={cx(styles.typographyBody1, styles.text)}>{text}</div>
    </div>
);

export default CommentCard;
