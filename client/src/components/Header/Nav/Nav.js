import React from 'react';
import PropTypes from 'prop-types';
import NavWrapper from './style'; // TODO this need to be revised
import LogButton from '../LogButton';
import Links from '../Links';

const Nav = ({ isAuthenticated, email, logoutRedux }) => (
    <NavWrapper>
        <Links isAuthenticated={isAuthenticated} />
        {isAuthenticated && (
            <LogButton email={email} logoutRedux={logoutRedux} />
        )}
    </NavWrapper>
);

Nav.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    email: PropTypes.string,
    logoutRedux: PropTypes.func.isRequired
};

Nav.defaultProps = {
    email: null
};

export default Nav;
