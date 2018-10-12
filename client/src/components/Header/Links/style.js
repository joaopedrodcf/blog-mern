import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const color = props => props.theme.color.blue.light;
const fontSize = props => props.theme.typography.lg;
const space = props => props.theme.space.md;

const Link = styled(NavLink).attrs({
    activeClassName: 'active'
})`
    padding: ${space};
    text-decoration: none;
    color: ${props => props.theme.color.white};
    border-bottom: 4px solid transparent;
    height: 100%;
    font-size: ${fontSize};
    display: flex;
    align-items: flex-end;
    margin-right: ${props => props.theme.space.lg}

    &:hover {
        border-bottom: 4px solid ${color};
    }

    &.active {
        border-bottom: 4px solid ${color};
    }
`;

export default Link;
