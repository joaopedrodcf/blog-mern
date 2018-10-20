import React from 'react';
import { Formik } from 'formik';

import classnames from 'classnames';
import styles from './styles.module.scss';
import { contactService } from '../../../services/api';
import Button from '../../Button';

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
                isSubmitting,
                dirty
            }) => (
                <form onSubmit={handleSubmit}>
                    <div className={styles.formTitle}>
                        <h5>Contact us</h5>
                    </div>
                    <div
                        className={classnames(
                            styles.formGroup,
                            touched.name && errors.name && values.name !== ''
                                ? styles.error
                                : ''
                        )}
                    >
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            required
                            className={classnames(
                                styles.input,
                                (styles.inputActivated: values.name)
                            )}
                        />
                        <label
                            htmlFor="name"
                            className={classnames(
                                styles.label,
                                values.name !== '' && styles.labelTop,
                                styles.typographyCaption
                            )}
                        >
                            Name
                        </label>
                        <span
                            className={classnames(
                                styles.help,
                                styles.typographyCaption
                            )}
                        >
                            {touched.name && errors.name ? (
                                <>{errors.name}</>
                            ) : (
                                'Required'
                            )}
                        </span>
                    </div>
                    <div
                        className={classnames(
                            styles.formGroup,
                            touched.email && errors.email && values.email !== ''
                                ? styles.error
                                : ''
                        )}
                    >
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            required
                            className={classnames(
                                styles.input,
                                (styles.inputActivated: values.email)
                            )}
                        />
                        <label
                            htmlFor="email"
                            className={classnames(
                                styles.label,
                                values.email !== '' && styles.labelTop,
                                styles.typographyCaption
                            )}
                        >
                            Email
                        </label>
                        <span
                            className={classnames(
                                styles.help,
                                styles.typographyCaption
                            )}
                        >
                            {touched.email && errors.email ? (
                                <>{errors.email}</>
                            ) : (
                                'Required'
                            )}
                        </span>
                    </div>
                    <div
                        className={classnames(
                            styles.formGroup,
                            touched.message &&
                            errors.message &&
                            values.message !== ''
                                ? styles.error
                                : ''
                        )}
                    >
                        <input
                            name="message"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                            required
                            className={classnames(
                                styles.input,
                                (styles.inputActivated: values.message)
                            )}
                        />
                        <label
                            htmlFor="message"
                            className={classnames(
                                styles.label,
                                values.message !== '' && styles.labelTop,
                                styles.typographyCaption
                            )}
                        >
                            Message
                        </label>
                        <span
                            className={classnames(
                                styles.help,
                                styles.typographyCaption
                            )}
                        >
                            {touched.message && errors.message ? (
                                <>{errors.message}</>
                            ) : (
                                'Required'
                            )}
                        </span>
                    </div>
                    {isSubmitting && (
                        <button type="button">Sent with success</button>
                    )}
                    <div className={styles.formFooter}>
                        <Button
                            type="submit"
                            disabled={
                                (Object.keys(errors).length !== 0 &&
                                    !isSubmitting) ||
                                !dirty
                            }
                            label="Send message"
                        />
                    </div>
                </form>
            )}
        />
    </div>
);

export default ContactFormik;
