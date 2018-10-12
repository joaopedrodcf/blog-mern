const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const emailRoutes = require('./emailRoutes');
const commentRoutes = require('./commentRoutes');
const staticFileRoutes = require('./staticFileRoutes');

module.exports = app => {
    userRoutes(app);
    postRoutes(app);
    emailRoutes(app);
    commentRoutes(app);
    staticFileRoutes(app);
    // Other route groups could go here, in the future
};
