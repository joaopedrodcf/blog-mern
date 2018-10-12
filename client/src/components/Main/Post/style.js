import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: grid;
    grid-template-rows: 175px 3fr 1fr;
    grid-template-columns: 2fr 2fr 1fr;
    grid-gap: ${props => props.theme.space.md};
    padding: ${props => props.theme.space.md};
    grid-template-areas: 'figure article article' 'figure article article' 'figure . button';
    background-color: ${props => props.theme.color.blue.dark};
    box-shadow: ${props => props.theme.shadow.gray};
    margin: ${props => props.theme.space.lg} 0;
    border-radius: ${props => props.theme.space.xs};

    @media (max-width: 900px) {
        grid-template-rows: auto 30px;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 'article article article' '. . button';
    }
`;

export const FigureContainer = styled.div`
    grid-area: figure;

    @media (max-width: 900px) {
        display: none;
    }
`;

export const Figure = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: ${props => props.theme.shadow.black};

    @media (max-width: 900px) {
        display: none;
    }
`;

export const Article = styled.div`
    grid-area: article;

    > * {
        margin: 0;
    }

    > h2 {
        margin-bottom: ${props => props.theme.space.xs};
        color: ${props => props.theme.color.blue.default};
    }

    > h4 {
        margin-bottom: ${props => props.theme.space.xl};
        color: ${props => props.theme.color.blue.light};
    }

    > p {
        text-align: justify;
        color: ${props => props.theme.color.white};
    }
`;

export const LinkPost = styled(Link)`
    grid-area: button;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`;

export const Button = styled.button`
    box-shadow: ${props => props.theme.shadow.black};
    border: none;
    background-color: ${props => props.theme.color.blue.default};
    padding: ${props => props.theme.space.md};
    border-radius: ${props => props.theme.space.xs};

    &:hover {
        transform: scale(1.01);
        background-color: ${props => props.theme.color.blue.light};
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: ${props => props.theme.space.md};

    > h2 {
        color: ${props => props.theme.color.blue.default};
    }

    > h5 {
        color: ${props => props.theme.color.blue.light};
    }
`;

export const SubHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: ${props => props.theme.space.xl};

    > h5 {
        color: ${props => props.theme.color.blue.light};
    }
`;

export const Description = styled.div`
    margin-bottom: ${props => props.theme.space.xl};

    > p {
        text-align: justify;
        color: ${props => props.theme.color.white};
    }
`;
