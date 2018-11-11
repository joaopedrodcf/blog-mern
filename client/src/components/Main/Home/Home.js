/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../Card';

const Home = ({ posts, createLike, deleteLike }) => (
    <div>
        {posts.map(post => (
            <Card key={post._id} isDetailed={false} {...post} createLike= {createLike} isLike={post.likes.length>0} deleteLike={deleteLike} />
        ))}
    </div>
);

Home.propTypes = {
    posts: PropTypes.arrayOf(),
    createLike: PropTypes.func,
    deleteLike: PropTypes.func,
};

export default Home;
