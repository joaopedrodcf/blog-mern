const User = require('../model/User');

const findUserById = (req, res, next) => {
    User.findById(req.userId, { password: 0 }, (err, user) => {
        if (err)
            return res
                .status(500)
                .send({ message: 'There was a problem finding the user.' });

        if (!user) return res.status(404).send({ message: 'No user found.' });

        req.user = user;
        next();
    });
};

module.exports = { findUserById };
