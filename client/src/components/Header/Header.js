import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';
import Drawer from '../Drawer';
import Anchor from '../Anchor';

import Modal from '../Modal';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toogle: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        const { toogle } = this.state;

        this.setState({ toogle: !toogle });
    }

    render() {
        const { toogle } = this.state;
        const { user, logout } = this.props;

        return (
            <div className={styles.headerFixed}>
                <div className={styles.header}>
                    <div>
                        <FontAwesomeIcon
                            icon="bars"
                            onClick={this.handleClick}
                            className={styles.margin}
                        />
                        <Anchor to="/">
                            <h5>Blog mern demo</h5>
                        </Anchor>
                        <Modal show={toogle} handleClose={this.handleClick}>
                            <Drawer
                                show={toogle}
                                user={user}
                                handleLogout={logout}
                            />
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
