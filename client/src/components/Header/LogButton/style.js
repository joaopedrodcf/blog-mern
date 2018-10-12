import styled from 'styled-components';

const Wrapper = styled.button`
    margin: 10px 10px;
    border: none;
    padding: ${props => props.theme.space.md};
    border-radius: ${props => props.theme.space.xs};
    background-color: ${props => props.theme.color.blue.default};
    color: ${props => props.theme.color.white};

    &:hover {
        transform: scale(1.01);
        background-color: ${props => props.theme.color.blue.light};
    }
`;

export default Wrapper;
