import styled from 'styled-components';

export const Container = styled.div`
    border: none;
    cursor: pointer;
    background-color: ${props => props.theme.color.blue.dark};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`;

export const Button = styled.button`
    position: absolute;
    border: none;
    top: 0;
    right: 0;
    margin: ${props => props.theme.space.md};
    z-index: 10;
    font-size: ${props => props.theme.typography.xxl};
    cursor: pointer;
    background-color: ${props => props.theme.color.blue.dark};
    color: ${props => props.theme.color.white};
`;
