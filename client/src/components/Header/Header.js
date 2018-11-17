import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hammer from 'hammerjs';
import styles from './styles.module.scss';
import Drawer from '../Drawer';
import Anchor from '../Anchor';

import Modal from '../Modal';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.headerRef = React.createRef();
        this.state = {
            toogle: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.hammer = Hammer(document.getElementById('root'));
        this.hammer.on('swipeleft', () => {
            this.setState({ toogle: false });
        });
        this.hammer.on('swiperight', () => {
            this.setState({ toogle: true });
        });
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
            <div className={styles.headerFixed} ref={this.headerRef}>
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
