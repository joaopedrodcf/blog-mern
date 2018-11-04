import React from 'react';
import { Formik } from 'formik';
import { PropTypes } from 'prop-types';

import classnames from 'classnames';
import styles from './styles.module.scss';

import Button from '../../Button';
import Anchor from '../../Anchor';

const cx = classnames.bind(styles);

function handleLogin(values, login, { resetForm }) {
    const { email, password } = values;
    login(email, password);
    resetForm();
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

    if (!values.password) {
        errors.password = 'Required';
    }

    return errors;
}

const LoginFormik = ({ login }) => (
    <div className={styles.wrapper}>
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validate={values => validate(values)}
            onSubmit={(values, ...rest) => handleLogin(values, login, ...rest)}
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
                        <h5>Login</h5>
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
                            Required
                        </span>
                    </div>

                    <div
                        className={cx(
                            styles.formGroup,
                            touched.password &&
                            errors.password &&
                            values.password !== ''
                                ? styles.error
                                : ''
                        )}
                    >
                        <input
                            id="password"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            required
                            className={cx(
                                styles.input,
                                (styles.inputActivated: values.password)
                            )}
                        />
                        <label
                            htmlFor="password"
                            className={cx(
                                styles.label,
                                values.password !== '' && styles.labelTop,
                                styles.typographyCaption
                            )}
                        >
                            Password
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
                    <div className={cx(styles.footer, styles.typographyButton)}>
                        <Anchor to="/register" colorAnchor="blue">
                            Register now
                        </Anchor>
                        <Button type="submit" label="Login" />
                    </div>
                    <div
                        className={cx(styles.options, styles.typographyButton)}
                    />
                </form>
            )}
        />
    </div>
);

LoginFormik.propTypes = {
    login: PropTypes.func.isRequired
};

export default LoginFormik;
