import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Wrapper from './style';
import Nav from '../Nav';
import Logo from '../Logo';
import HamburguerButton from '../HamburguerButton';
import Anchor from '../../Anchor';

const HeaderWrapper = ({
    handleClick,
    isAuthenticated,
    email,
    logoutRedux
}) => (
    <Wrapper>
        <Anchor to="/">
            <h5>Blog-mern-demo</h5>
        </Anchor>
        <Nav
            isAuthenticated={isAuthenticated}
            email={email}
            logoutRedux={logoutRedux}
        />
        <HamburguerButton handleClick={handleClick} />
    </Wrapper>
);

HeaderWrapper.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
    logoutRedux: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
};

export default HeaderWrapper;
