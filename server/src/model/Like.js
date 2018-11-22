const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    post: {
        type: mongoose.Schema.ObjectId,
        ref: 'Post',
        required: true
    }
});

// schema unique 2 indexes : https://stackoverflow.com/questions/48344599/combination-of-multiple-fields-unique-in-mongoose-nodejs
LikeSchema.index({ author: 1, post: 1 }, { unique: true });

module.exports = mongoose.model('Like', LikeSchema);
