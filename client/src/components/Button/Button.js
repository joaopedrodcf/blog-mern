/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.module.scss';

const Button = ({ type, size, label, onClick }) => (
    <button
        type={type}
        className={classnames(styles.button, styles.typographyButton)}
        onClick={onClick}
    >
        {label}
    </button>
);

Button.propTypes = {
    type: PropTypes.string,
    size: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

Button.defaultProps = {
    type: 'button',
    onClick: () => {}
};
export default Button;
