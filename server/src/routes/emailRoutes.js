const nodemailer = require('nodemailer');
const Joi = require('joi');

const schema = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string()
        .email()
        .required(),
    message: Joi.string().required()
});

const validateSchema = (req, res, next) => {
    Joi.validate(req.body, schema, err => {
        if (err) return res.status(400).send({ message: 'Missing parameters' });

        next();
    });
};

module.exports = app => {
    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_PASSWORD;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user,
            pass
        }
    });

    const mailOptions = {
        from: user,
        to: user,
        subject: 'Sending Email using Node.js',
        text: ''
    };

    app.post('/api/send-email', validateSchema, (req, res) => {
        const { name, email, message } = req.body;

        mailOptions.text = `Name:${name}\nEmail:${email}\nMessage:${message}`;

        transporter.sendMail(mailOptions, (error, info) => {
            if (error)
                return res
                    .status(500)
                    .send({ message: 'There was a problem sending the email' });

            return res.status(200).send(info);
        });
    });
};
