/* eslint-disable no-underscore-dangle */
import React from 'react';

import Card from '../../Card';

export default class Home extends React.Component {
    componentDidMount() {
        const { getPosts } = this.props;

        getPosts();
    }

    render() {
        const { posts } = this.props;

        return (
            <div>
                {posts.map(post => (
                    <Card key={post._id} {...post} />
                ))}
            </div>
        );
    }
}
