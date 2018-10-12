import styled from 'styled-components';

const color = props =>
    props.active ? props.theme.color.blue.default : props.theme.color.white;
export const ContainerPages = styled.div`
    background-color: ${props => props.theme.color.blue.dark};
    box-shadow: ${props => props.theme.shadow.gray};
    padding: ${props => props.theme.space.md};
    border-radius: ${props => props.theme.space.xs};
    display: flex;
    flex-direction: column;
    text-align: center;
    color: ${props => props.theme.color.white};

    > h1 {
        text-align: center;
    }
`;

export const PaginationButton = styled.button`
    background: none;
    border: none;
    color: ${color};
    border-bottom: 4px solid transparent;
    padding: ${props => props.theme.space.md};
    margin: 0 ${props => props.theme.space.sm};
    ${props =>
        props.active &&
        `border-bottom: 4px solid ${props.theme.color.blue.default};`};

    &:hover {
        color: ${props => props.theme.color.blue.default};
        border-bottom: 4px solid ${props => props.theme.color.blue.default};
    }
`;
