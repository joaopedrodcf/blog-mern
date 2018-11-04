import React from 'react';
import { Formik } from 'formik';

import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.module.scss';
import Button from '../../Button';

const cx = classnames.bind(styles);

function handleCreateComment(values, postId, createComment, { resetForm }) {
    const { text } = values;

    createComment(text, postId);
    resetForm();
}

function validate(values) {
    const errors = {};

    if (!values.text) {
        errors.text = 'Required';
    }

    return errors;
}

const CommentFormik = ({ postId, createComment }) => (
    <div className={styles.wrapper}>
        <Formik
            initialValues={{
                text: ''
            }}
            validate={values => validate(values)}
            onSubmit={(values, ...rest) =>
                handleCreateComment(values, postId, createComment, ...rest)
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
                        className={cx(
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
                            className={cx(
                                styles.input,
                                (styles.inputActivated: values.text)
                            )}
                        />
                        <label
                            htmlFor="text"
                            className={cx(
                                styles.label,
                                values.text !== '' && styles.labelTop,
                                styles.typographyCaption
                            )}
                        >
                            Text
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
                        <Button type="submit" label="Comment" />
                    </div>
                </form>
            )}
        />
    </div>
);

CommentFormik.propTypes = {
    postId: PropTypes.number.isRequired,
    createComment: PropTypes.func.isRequired
};

export default CommentFormik;
