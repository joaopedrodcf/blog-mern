import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const COLORS = {
    WHITE: 'white',
    YELLOW: 'yellow',
    BLUE: 'blue',
    PURPLE: 'purple'
};

const index = ({ colorAnchor, children, otherStyles, to, ...rest }) => (
    <>
        {to === undefined ? (
            <a
                {...rest}
                className={classnames(
                    styles.anchor,
                    styles[colorAnchor || COLORS.WHITE],
                    otherStyles
                )}
            >
                {children}
            </a>
        ) : (
            <Link
                exact
                to={to}
                className={classnames(
                    styles.anchor,
                    styles[colorAnchor || COLORS.WHITE],
                    otherStyles
                )}
            >
                {children}
            </Link>
        )}
    </>
);

index.propTypes = {
    href: PropTypes.string.isRequired,
    content: PropTypes.element.isRequired
};

export default index;
