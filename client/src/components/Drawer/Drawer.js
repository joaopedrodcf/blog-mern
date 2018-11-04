import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';
import Anchor from '../Anchor';

const cx = classnames.bind(styles);

const Drawer = ({ user, show, handleLogout }) => (
    <div className={cx(styles.drawer, show ? [styles.drawerShow] : '')}>
        <div className={styles.header}>
            <h5>Blog mern demo</h5>
        </div>
        <div className={styles.links}>
            <li>
                <ul>
                    <Anchor exact to="/" colorAnchor="blue">
                        Home
                    </Anchor>
                </ul>
                <ul>
                    <Anchor exact to="/contactus" colorAnchor="blue">
                        Contact us
                    </Anchor>
                </ul>

                {Object.keys(user).length ? (
                    <>
                        <ul>
                            <Anchor exact to="/create-post" colorAnchor="blue">
                                Create post
                            </Anchor>
                        </ul>
                        <ul>
                            <Anchor
                                exact
                                colorAnchor="blue"
                                onClick={handleLogout}
                            >
                                Logout
                            </Anchor>
                        </ul>
                    </>
                ) : (
                    <>
                        <ul>
                            <Anchor exact to="/login" colorAnchor="blue">
                                Login
                            </Anchor>
                        </ul>
                        <ul>
                            <Anchor exact to="/register" colorAnchor="blue">
                                Register
                            </Anchor>
                        </ul>
                    </>
                )}
            </li>
        </div>
    </div>
);

export default Drawer;
