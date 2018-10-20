import React from 'react';
import { Formik } from 'formik';
import { PropTypes } from 'prop-types';

import {
    Label,
    ErrorLabel,
    Form,
    WrapperTitle,
    Wrapper,
    Input,
    WrapperButton,
    Alert
} from './style';

import Button from '../../Button';

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

const LoginFormik = ({ login, errorMessage }) => (
    <Wrapper>
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
                isSubmitting,
                dirty
            }) => (
                <Form onSubmit={handleSubmit}>
                    <WrapperTitle>
                        <h5>Login</h5>
                    </WrapperTitle>

                    <Label htmlFor="email">
                        Email
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                    </Label>
                    <ErrorLabel>
                        {' '}
                        {touched.email &&
                            errors.email && <div>{errors.email}</div>}
                    </ErrorLabel>

                    <Label htmlFor="password">
                        Password
                        <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                    </Label>

                    <ErrorLabel>
                        {' '}
                        {touched.password &&
                            errors.password && <div>{errors.password}</div>}
                    </ErrorLabel>

                    {errorMessage && <Alert error>{errorMessage}</Alert>}

                    <WrapperButton>
                        <Button
                            type="submit"
                            disabled={
                                (Object.keys(errors).length !== 0 &&
                                    !isSubmitting) ||
                                !dirty
                            }
                            label="Login"
                        />
                    </WrapperButton>
                </Form>
            )}
        />
    </Wrapper>
);

LoginFormik.propTypes = {
    login: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
};

export default LoginFormik;
