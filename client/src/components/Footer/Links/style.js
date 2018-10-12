import styled from 'styled-components';

const Link = styled.a`
    display: inline-block;
    transition: 0.3s;
    font-weight: bold;
    text-decoration: none;
    color: ${props => props.theme.color.white};
    margin: 0 ${props => props.theme.space.md};
    margin-bottom: ${props => props.theme.space.md};

    &:hover {
        transform: scale(1.2);
    }
`;

export default Link;
