import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const cx = classnames.bind(styles);

export const COLORS = {
    WHITE: 'white',
    YELLOW: 'yellow',
    BLUE: 'blue',
    PURPLE: 'purple'
};

const Anchor = ({ colorAnchor, children, otherStyles, to, ...rest }) => (
    <>
        {to === undefined ? (
            <a
                {...rest}
                className={cx(
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
                className={cx(
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

Anchor.propTypes = {
    href: PropTypes.string.isRequired,
    content: PropTypes.element.isRequired
};

export default Anchor;
