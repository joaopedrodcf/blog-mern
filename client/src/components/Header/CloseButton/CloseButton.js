import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Button } from './style';

import Links from '../Links';
import LogButton from '../LogButton';

const CloseButton = ({ handleClick, isAuthenticated, email, logoutRedux }) => (
    <Container onClick={handleClick}>
        <Button>
            <FontAwesomeIcon icon="window-close" size="1x" />
        </Button>
        <div>
            <Links isAuthenticated={isAuthenticated} />
            {isAuthenticated && (
                <LogButton email={email} logoutRedux={logoutRedux} />
            )}
        </div>
    </Container>
);

CloseButton.propTypes = {
    handleClick: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    logoutRedux: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
};

export default CloseButton;
