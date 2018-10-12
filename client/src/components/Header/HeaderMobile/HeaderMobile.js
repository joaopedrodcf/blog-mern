import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './style';
import CloseButton from '../CloseButton';

const HeaderMobile = ({
    toogle,
    handleClick,
    isAuthenticated,
    email,
    logoutRedux
}) => (
    <Wrapper toogle={toogle}>
        <CloseButton
            handleClick={handleClick}
            isAuthenticated={isAuthenticated}
            email={email}
            logoutRedux={logoutRedux}
        />
    </Wrapper>
);

HeaderMobile.propTypes = {
    toogle: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    logoutRedux: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
};

export default HeaderMobile;
