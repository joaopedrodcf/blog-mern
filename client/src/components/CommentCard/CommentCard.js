import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import formatDate from '../../utils/date';

const CommentCard = ({ _id, author, date, text }) => (
    <div key={_id} className={styles.comment}>
        <h6>{author.email}</h6>
        <div className={classnames(styles.typographySubtitle2)}>
            on {formatDate(date)}
        </div>
        <div className={classnames(styles.typographyBody1)}>{text}</div>
    </div>
);

export default CommentCard;
