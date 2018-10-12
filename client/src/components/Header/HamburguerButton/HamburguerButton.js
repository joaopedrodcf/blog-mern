import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Wrapper from './style';

const HamburguerButton = ({ handleClick }) => (
    <Wrapper onClick={handleClick}>
        <FontAwesomeIcon icon="bars" size="1x" />
    </Wrapper>
);

HamburguerButton.propTypes = {
    handleClick: PropTypes.func.isRequired
};

export default HamburguerButton;
