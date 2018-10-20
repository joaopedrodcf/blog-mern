import React from 'react';
import { PropTypes } from 'prop-types';

import {
    Container,
    Article,
    Figure,
    LinkPost,
    FigureContainer,
    Header,
    SubHeader,
    Description
} from './style';
import Button from '../../Button';

const formatDate = date => new Date(date).toDateString();

const Post = ({ _id, title, date, description, image, author }) => (
    <Container>
        <Article>
            <Header>
                <h2>{title}</h2>
                <h5>{author.email}</h5>
            </Header>
            <SubHeader>
                <h5>{formatDate(date)}</h5>
            </SubHeader>
            <Description>
                <p>{description}</p>
            </Description>
        </Article>
        <FigureContainer>
            <Figure src={image} alt="about-me-img" />
        </FigureContainer>

        <LinkPost to={`/post/${_id}`}>
            <Button label="Continue reading" size="medium" />
        </LinkPost>
    </Container>
);

Post.propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default Post;
