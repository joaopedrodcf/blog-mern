import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

const cx = classnames.bind(styles);

const Drawer = ({ user, show, handleLogout }) => (
    <div className={cx(styles.drawer, show ? [styles.drawerShow] : '')}>
        <div className={styles.header}>
            <h5>Blog mern demo</h5>
        </div>
        <div className={cx(styles.links, styles.typographySubtitle1)}>
            <li>
                <ul>
                    <NavLink
                        exact
                        to="/"
                        className={styles.anchor}
                        activeClassName={styles.selected}
                    >
                        <div className={styles.unselected}>
                            <FontAwesomeIcon
                                icon="home"
                                className={styles.margin}
                            />
                            Home
                        </div>
                    </NavLink>
                </ul>
                <ul>
                    <NavLink
                        exact
                        to="/contact-us"
                        className={styles.anchor}
                        activeClassName={styles.selected}
                    >
                        <div className={styles.unselected}>
                            <FontAwesomeIcon
                                icon="envelope"
                                className={styles.margin}
                            />{' '}
                            Contact us
                        </div>{' '}
                    </NavLink>
                </ul>

                {Object.keys(user).length ? (
                    <>
                        <ul>
                            <NavLink
                                exact
                                to="/create-post"
                                className={styles.anchor}
                                activeClassName={styles.selected}
                            >
                                <div className={styles.unselected}>
                                    <FontAwesomeIcon
                                        icon="pen"
                                        className={styles.margin}
                                    />
                                    Create post
                                </div>
                            </NavLink>
                        </ul>
                        <ul>
                            <a
                                className={styles.anchor}
                                activeClassName={styles.selected}
                                onClick={handleLogout}
                            >
                                <div className={styles.unselected}>
                                    <FontAwesomeIcon
                                        icon="user-circle"
                                        className={styles.margin}
                                    />{' '}
                                    Logout
                                </div>{' '}
                            </a>
                        </ul>
                    </>
                ) : (
                    <>
                        <ul>
                            <NavLink
                                exact
                                to="/login"
                                className={styles.anchor}
                                activeClassName={styles.selected}
                            >
                                <div className={styles.unselected}>
                                    <FontAwesomeIcon
                                        icon="user-circle"
                                        className={styles.margin}
                                    />{' '}
                                    Login
                                </div>
                            </NavLink>
                        </ul>
                        <ul>
                            <NavLink
                                exact
                                to="/register"
                                className={styles.anchor}
                                activeClassName={styles.selected}
                            >
                                <div className={styles.unselected}>
                                    <FontAwesomeIcon
                                        icon="user-circle"
                                        className={styles.margin}
                                    />{' '}
                                    Register
                                </div>
                            </NavLink>
                        </ul>
                    </>
                )}
            </li>
        </div>
    </div>
);

export default Drawer;
