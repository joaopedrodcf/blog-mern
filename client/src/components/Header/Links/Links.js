import React from 'react';
import PropTypes from 'prop-types';
import Link from './style';

const Links = ({ isAuthenticated }) => (
    <>
        <Link exact to="/">
            Home
        </Link>
        <Link exact to="/contactus">
            Contact us
        </Link>
        {isAuthenticated === false && (
            <>
                <Link exact to="/login">
                    Login
                </Link>
                <Link exact to="/register">
                    Register
                </Link>
            </>
        )}

        {isAuthenticated === true && (
            <Link exact to="/create-post">
                Create post
            </Link>
        )}

        {isAuthenticated === true && (
            <Link exact to="/settings">
                Settings
            </Link>
        )}
    </>
);

Links.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
};

export default Links;
