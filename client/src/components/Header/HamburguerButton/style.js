import styled from 'styled-components';

const Wrapper = styled.button`
    background: none;
    border: none;
    display: none;

    @media (max-width: 600px) {
        display: unset;
        color: ${props => props.theme.color.white};
        margin: ${props => props.theme.space.md};
        font-size: ${props => props.theme.typography.xxl};
        cursor: pointer;
    }
`;

export default Wrapper;
