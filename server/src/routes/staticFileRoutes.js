const express = require('express');
const path = require('path');

module.exports = app => {
    // get reference to the client build
    const staticFiles = express.static(
        path.join(__dirname, '../../../client/build')
    );

    app.get('/*', staticFiles);
};
