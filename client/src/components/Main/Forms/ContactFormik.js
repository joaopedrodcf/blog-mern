import React from 'react';
import { Formik } from 'formik';

import classnames from 'classnames';
import autosize from 'autosize';
import styles from './styles.module.scss';
import { contactService } from '../../../services/api';
import Button from '../../Button';

const cx = classnames.bind(styles);

function sendMessage(values, { resetForm }) {
    const { name, email, message } = values;

    contactService(name, email, message).then(
        () => {
            resetForm();
        },
        () => {
            resetForm();
        }
    );
}

function validate(values) {
    const errors = {};

    autosize(document.getElementById('message'));

    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }

    if (!values.message) {
        errors.message = 'Required';
    }

    if (!values.name) {
        errors.name = 'Required';
    }

    return errors;
}

const ContactFormik = () => (
    <div className={styles.wrapper}>
        <Formik
            initialValues={{
                name: '',
                email: '',
                message: ''
            }}
            validate={values => validate(values)}
            onSubmit={(values, ...rest) => sendMessage(values, ...rest)}
            render={({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
            }) => (
                <form onSubmit={handleSubmit}>
                    <div className={styles.formTitle}>
                        <h5>Contact us</h5>
                    </div>
                    <div
                        className={cx(
                            styles.formGroup,
                            touched.name && errors.name && values.name !== ''
                                ? styles.error
                                : ''
                        )}
                    >
                        <input
                            id="name"
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            required
                            className={cx(
                                styles.input,
                                (styles.inputActivated: values.name)
                            )}
                        />
                        <label
                            htmlFor="name"
                            className={cx(
                                styles.label,
                                values.name !== '' && styles.labelTop,
                                styles.typographyCaption
                            )}
                        >
                            Name
                        </label>
                        <span
                            className={cx(
                                styles.help,
                                styles.typographyCaption
                            )}
                        >
                            Required
                        </span>
                    </div>
                    <div
                        className={cx(
                            styles.formGroup,
                            touched.email && errors.email && values.email !== ''
                                ? styles.error
                                : ''
                        )}
                    >
                        <input
                            id="email"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            required
                            className={cx(
                                styles.input,
                                (styles.inputActivated: values.email)
                            )}
                        />
                        <label
                            htmlFor="email"
                            className={cx(
                                styles.label,
                                values.email !== '' && styles.labelTop,
                                styles.typographyCaption
                            )}
                        >
                            Email
                        </label>
                        <span
                            className={cx(
                                styles.help,
                                styles.typographyCaption
                            )}
                        >
                            {touched.email && errors.email
                                ? `${errors.email}`
                                : 'Required'}
                        </span>
                    </div>
                    <div
                        className={cx(
                            styles.formGroup,
                            touched.message &&
                                errors.message &&
                                values.message !== ''
                                ? styles.error
                                : ''
                        )}
                    >
                        <textarea
                            id="message"
                            name="message"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                            required
                            className={cx(
                                styles.textarea,
                                (styles.textareaActivated: values.message)
                            )}
                        />
                        <label
                            htmlFor="message"
                            className={cx(
                                styles.label,
                                values.message !== '' && styles.labelTop,
                                styles.typographyCaption
                            )}
                        >
                            Message
                        </label>
                        <span
                            className={cx(
                                styles.help,
                                styles.typographyCaption
                            )}
                        >
                            Required
                        </span>
                    </div>
                    {isSubmitting && (
                        <button type="button">Sent with success</button>
                    )}
                    <div className={styles.formFooter}>
                        <Button type="submit" label="Send message" />
                    </div>
                </form>
            )}
        />
    </div>
);

export default ContactFormik;
