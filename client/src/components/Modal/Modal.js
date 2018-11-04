import React from 'react';

import classnames from 'classnames';
import styles from './styles.module.scss';

const cx = classnames.bind(styles);

const Modal = ({ show, children, handleClose }) => {
    const showHideClassName = show
        ? cx(styles.modal, styles.displayBlock)
        : cx(styles.modal, styles.displayNone);

    return (
        <div className={showHideClassName} onClick={handleClose}>
            {children}
        </div>
    );
};

export default Modal;
