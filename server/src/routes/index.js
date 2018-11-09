const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const emailRoutes = require('./emailRoutes');
const commentRoutes = require('./commentRoutes');
const staticFileRoutes = require('./staticFileRoutes');
const likeRoutes = require('./likeRoutes');

module.exports = app => {
    userRoutes(app);
    postRoutes(app);
    emailRoutes(app);
    commentRoutes(app);
    staticFileRoutes(app);
    likeRoutes(app);
    // Other route groups could go here, in the future
};
