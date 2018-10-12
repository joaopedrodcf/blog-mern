import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

import {
    Label,
    ErrorLabel,
    Form,
    Button,
    WrapperTitle,
    Wrapper,
    Figure,
    Input,
    WrapperButton,
    Alert
} from './style';

function handleRegister(values, register, { resetForm }) {
    const { email, password } = values;
    register(email, password);
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

const RegisterFormik = ({ register, errorMessage }) => (
    <Wrapper>
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validate={values => validate(values)}
            onSubmit={(values, ...rest) =>
                handleRegister(values, register, ...rest)
            }
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
                        <h3>Register</h3>
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
                        >
                            Register
                        </Button>
                    </WrapperButton>
                </Form>
            )}
        />
    </Wrapper>
);

RegisterFormik.propTypes = {
    register: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
};

export default RegisterFormik;
