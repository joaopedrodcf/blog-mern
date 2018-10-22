import React from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Article,
    Figure,
    FigureContainer,
    Comment,
    CommentSection
} from './style';
import { getPost } from '../../../services/api';
import CommentFormik from '../Forms/CommentFormik';

const formatDate = date => new Date(date).toDateString();

class PostDetailed extends React.Component {
    // This type of constructor is useful basically is doing {match} = this.props.match
    constructor(props) {
        super(props);

        this.state = {
            post: {},
            author: {},
            comments: []
        };
    }

    componentDidMount() {
        this.getPost();
    }

    getPost() {
        const {
            match: {
                params: { id }
            }
        } = this.props;

        getPost(id).then(response => {
            this.setState({
                post: response.data,
                author: response.data.author,
                comments: response.data.comments
            });
        });
    }

    render() {
        const { post, author, comments } = this.state;
        const { title, date, text, image } = post;
        const {
            match: {
                params: { id }
            },
            isAuthenticated
        } = this.props;

        return (
            <>
                {title !== undefined && (
                    <>
                        <Container>
                            <Article>
                                <h2>{title}</h2>
                                <h4>
                                    {author.email} on {formatDate(date)}
                                </h4>
                                <p>{text}</p>
                            </Article>
                            <FigureContainer>
                                <Figure src={image} alt="about-me-img" />
                            </FigureContainer>
                        </Container>

                        <CommentFormik postId={id} />

                        <CommentSection>
                            <h3>Comments section</h3>

                            {comments.length === 0 &&
                                isAuthenticated === true && (
                                    <h6>
                                        There are no comments yet *Login to be
                                        able to comment
                                    </h6>
                                )}

                            {comments.map(comment => (
                                <Comment>
                                    <p>Author: {comment.author.email}</p>
                                    <p>text: {comment.text}</p>
                                </Comment>
                            ))}
                        </CommentSection>
                    </>
                )}
            </>
        );
    }
}

PostDetailed.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({ id: PropTypes.number.isRequired })
    }).isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

export default PostDetailed;
