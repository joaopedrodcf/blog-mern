const jwt = require('jsonwebtoken');
const Joi = require('joi');
const verifyToken = require('./verifyToken');
const { findUserById } = require('./utils');
const config = require('../config');
const User = require('../model/User');

const schema = Joi.object().keys({
    email: Joi.string()
        .email()
        .required(),
    password: Joi.string().required()
});

const validateSchema = (req, res, next) => {
    Joi.validate(req.body, schema, err => {
        if (err) return res.status(400).send({ message: 'Missing parameters' });

        next();
    });
};

module.exports = app => {
    app.post('/api/register', validateSchema, (req, res) => {
        const user = new User();
        Object.assign(user, req.body);

        user.save(err => {
            if (err) return res.status(400).send({ message: err });

            // create a token
            const token = jwt.sign({ id: user._id }, config.secret, {
                expiresIn: 604800 // expires in 7 days
            });

            return res.status(200).send({ auth: true, token });
        });
    });

    app.get('/api/me', verifyToken, findUserById, (req, res) => {
        res.status(200).send(req.user);
    });

    app.post('/api/login', validateSchema, (req, res) => {
        const { email, password } = req.body;

        User.findOne({ email }, (err, user) => {
            if (err)
                return res
                    .status(500)
                    .send({ message: 'Error on the server.' });

            if (!user)
                return res.status(404).send({ message: 'No user found.' });

            user.comparePassword(password, (error, isMatch) => {
                if (error)
                    return res.status(401).send({ auth: false, token: null });

                if (isMatch) {
                    const token = jwt.sign({ id: user._id }, config.secret, {
                        expiresIn: 86400 // expires in 24 hours
                    });

                    return res.status(200).send({ auth: true, token, user });
                }

                return res
                    .status(400)
                    .send({ message: 'Email and password dont match' });
            });
        });
    });
    // Dont forget that logout is not needed , when the user presses logout on client side, client side only needs to destroy the token
};
