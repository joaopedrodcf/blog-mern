import React from 'react';
import { Formik } from 'formik';

import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.module.scss';
import { createCommentService } from '../../../services/api';
import Button from '../../Button';

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
    <div className={styles.wrapper}>
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
                isSubmitting
            }) => (
                <form onSubmit={handleSubmit}>
                    <div className={styles.formTitle}>
                        <h5>Comment</h5>
                    </div>
                    <div
                        className={classnames(
                            styles.formGroup,
                            touched.text && errors.text && values.text !== ''
                                ? styles.error
                                : ''
                        )}
                    >
                        <input
                            id="text"
                            type="text"
                            name="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.text}
                            required
                            className={classnames(
                                styles.input,
                                (styles.inputActivated: values.text)
                            )}
                        />
                        <label
                            htmlFor="text"
                            className={classnames(
                                styles.label,
                                values.name !== '' && styles.labelTop,
                                styles.typographyCaption
                            )}
                        >
                            Text
                        </label>
                        <span
                            className={classnames(
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
                        <Button type="submit" label="Comment" />
                    </div>
                </form>
            )}
        />
    </div>
);

CommentFormik.propTypes = {
    postId: PropTypes.number.isRequired
};

export default CommentFormik;
