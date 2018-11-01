import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';
import Drawer from '../Drawer';
import Anchor from '../Anchor';

import Modal from '../Modal';

const cx = classnames.bind(styles);

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

        return (
            <div className={styles.header}>
                <div className={styles.right}>
                    <FontAwesomeIcon icon="bars" onClick={this.handleClick} />
                    <Anchor to="/">
                        <h5>Blog mern demo</h5>
                    </Anchor>
                    <Modal show={toogle} handleClose={this.handleClick}>
                        <Drawer show={toogle} user={this.props.user} />
                    </Modal>
                </div>
                <div className={styles.left}>
                    <FontAwesomeIcon icon="user-circle" />
                </div>
            </div>
        );
    }
}

export default Header;
