/* eslint-disable no-underscore-dangle */
import React from 'react';

import { ContainerPages, PaginationButton } from './style';
import { getPostsService } from '../../../services/api';
import Card from '../../Card';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            currentPage: 0,
            totalPages: 0
        };

        this.getPostsPagination = this.getPostsPagination.bind(this);
    }

    componentDidMount() {
        const { getPosts } = this.props;

        getPosts();
        this.getPostsPagination(1);
    }

    getPostsPagination(page, isMinus, isPlus) {
        const { currentPage } = this.state;

        getPostsService(page, currentPage, isMinus, isPlus).then(response => {
            this.setState({
                currentPage: response.data.current,
                posts: response.data.posts,
                totalPages: response.data.pages
            });
        });
    }

    render() {
        const { posts, currentPage, totalPages } = this.state;

        const buttons = [];

        for (let i = 1; i < totalPages + 1; i += 1) {
            buttons.push(
                <PaginationButton
                    key={i}
                    onClick={() => this.getPostsPagination(i, false, false)}
                    active={currentPage === i}
                >
                    {i}
                </PaginationButton>
            );
        }

        return (
            <div>
                {posts.map(post => (
                    <Card key={post._id} {...post} />
                ))}
                {totalPages !== 0 && (
                    <ContainerPages>
                        Page {currentPage} of {totalPages}
                        <div>
                            {currentPage - 1 > 0 && (
                                <PaginationButton
                                    onClick={() =>
                                        this.getPostsPagination(0, true, false)
                                    }
                                >
                                    Previous
                                </PaginationButton>
                            )}
                            {buttons}
                            {currentPage < totalPages && (
                                <PaginationButton
                                    onClick={() =>
                                        this.getPostsPagination(0, false, true)
                                    }
                                >
                                    Next
                                </PaginationButton>
                            )}
                        </div>
                    </ContainerPages>
                )}
            </div>
        );
    }
}
