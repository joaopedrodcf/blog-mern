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
    Input,
    WrapperButton
} from './style';
import { createCommentService } from '../../../services/api';

function createComment(values, postId, { resetForm }) {
    const { text } = values;

    createCommentService(text, postId).then(
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

    if (!values.text) {
        errors.text = 'Required';
    }

    return errors;
}

const CommentFormik = ({ postId }) => (
    <Wrapper>
        <Formik
            initialValues={{
                text: ''
            }}
            validate={values => validate(values)}
            onSubmit={(values, ...rest) =>
                createComment(values, postId, ...rest)
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
                        <h3>Comment</h3>
                    </WrapperTitle>
                    <Label htmlFor="text">
                        Text
                        <Input
                            type="text"
                            name="text"
                            placeholder="Text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                    </Label>
                    <ErrorLabel>
                        {touched.name &&
                            errors.name && <div>{errors.name}</div>}
                    </ErrorLabel>

                    <WrapperButton>
                        <Button
                            type="submit"
                            disabled={
                                (Object.keys(errors).length !== 0 &&
                                    !isSubmitting) ||
                                !dirty
                            }
                        >
                            Create comment
                        </Button>
                    </WrapperButton>
                </Form>
            )}
        />
    </Wrapper>
);

CommentFormik.propTypes = {
    postId: PropTypes.number.isRequired
};

export default CommentFormik;
