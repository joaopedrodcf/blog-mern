const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Like', LikeSchema);