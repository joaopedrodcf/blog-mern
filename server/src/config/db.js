require('dotenv').config();

module.exports = {
    db_dev: process.env.DB || 'mongodb://127.0.0.1:27017/db'
};
