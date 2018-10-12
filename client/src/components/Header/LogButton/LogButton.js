import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './style';

const LogButton = ({ logoutRedux, email }) => (
    <Wrapper onClick={logoutRedux}>Logout: {email} </Wrapper>
);

LogButton.propTypes = {
    logoutRedux: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
};

export default LogButton;
