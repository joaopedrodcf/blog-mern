import styled from 'styled-components';

const color = props =>
    props.active ? props.theme.color.blue.default : props.theme.color.white;
export const ContainerPages = styled.div`
    background-color: #01579b;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    padding: ${props => props.theme.space.md};
    border-radius: 0.4rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #ffffff;

    > h1 {
        text-align: center;
    }
`;

export const PaginationButton = styled.button`
    background: none;
    border: none;
    color: #fdd835;
    border-bottom: 4px solid transparent;
    padding: ${props => props.theme.space.md};
    margin: 0 ${props => props.theme.space.sm};
    ${props => props.active && `border-bottom: 4px solid #ffff6b;`};

    &:hover {
        color: ${props => props.theme.color.blue.default};
        border-bottom: 4px solid ${props => props.theme.color.blue.default};
    }
`;
