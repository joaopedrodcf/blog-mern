/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../Card';

const Home = ({ posts, likePost, dislikePost }) => (
    <div>
        {posts.map(post => (
            <Card
                key={post._id}
                isDetailed={false}
                {...post}
                likePost={likePost}
                dislikePost={dislikePost}
            />
        ))}
    </div>
);

Home.propTypes = {
    posts: PropTypes.arrayOf()
};

export default Home;
