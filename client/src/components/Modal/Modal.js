import React from 'react';

import classnames from 'classnames';
import styles from './styles.module.scss';

const Modal = ({ show, children, handleClose }) => {
    const showHideClassName = show
        ? classnames(styles.modal, styles.displayBlock)
        : classnames(styles.modal, styles.displayNone);

    return (
        <div className={showHideClassName} onClick={handleClose}>
            {children}
        </div>
    );
};

export default Modal;
