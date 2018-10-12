import styled from 'styled-components';

const Container = styled.footer`
    grid-area: footer;
    background-color: ${props => props.theme.color.blue.dark};
    box-shadow: ${props => props.theme.shadow};
    padding: ${props => props.theme.space.lg};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.color.white};
`;

export default Container;
