/* eslint-disable class-methods-use-this */

import React, { Component } from 'react';
import { Formik } from 'formik';

import classnames from 'classnames';
import PropTypes from 'prop-types';
import autosize from 'autosize';
import styles from './styles.module.scss';
import Button from '../../Button';

const cx = classnames.bind(styles);

function handleCreatePost(values, createPost, { resetForm }) {
    const { title, description, text, image } = values;
    createPost(title, description, text, image);
    resetForm();
    document.querySelector('input[type=file]').value = '';
}

function validate(values) {
    const errors = {};

    autosize(document.getElementById('description'));
    autosize(document.getElementById('text'));

    if (!values.title) {
        errors.title = 'Required';
    }

    if (!values.description) {
        errors.description = 'Required';
    }

    if (!values.text) {
        errors.text = 'Required';
    }

    if (!values.image) {
        errors.image = 'Required';
    }

    return errors;
}

class CreatePostFormik extends Component {
    constructor(props) {
        super(props);

        this.state = {
            file: null
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleFileInput = this.handleFileInput.bind(this);
    }

    imagePreview(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        });
    }

    handleClick() {
        const fileInput = document.getElementById('fileInput');

        if (fileInput) {
            fileInput.click();
        }
    }

    handleFileInput(event) {
        if (event.target.files[0] !== undefined) {
            this.setState({ file: event.target.files[0].name });
        }
    }

    render() {
        const { file } = this.state;
        const { createPost } = this.props;

        return (
            <div className={styles.wrapper}>
                <Formik
                    initialValues={{
                        title: '',
                        description: '',
                        text: '',
                        image: ''
                    }}
                    validate={values => validate(values)}
                    onSubmit={(values, ...rest) =>
                        handleCreatePost(values, createPost, ...rest)
                    }
                    render={({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        setFieldValue
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formTitle}>
                                <h5>Create post</h5>
                            </div>
                            <div
                                className={cx(
                                    styles.formGroup,
                                    touched.title &&
                                    errors.title &&
                                    values.title !== ''
                                        ? styles.error
                                        : ''
                                )}
                            >
                                <input
                                    id="title"
                                    type="text"
                                    name="title"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.title}
                                    required
                                    className={cx(
                                        styles.input,
                                        (styles.inputActivated: values.title)
                                    )}
                                />
                                <label
                                    htmlFor="title"
                                    className={cx(
                                        styles.label,
                                        values.title !== '' && styles.labelTop,
                                        styles.typographyCaption
                                    )}
                                >
                                    Title
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
                                    touched.description &&
                                    errors.description &&
                                    values.description !== ''
                                        ? styles.error
                                        : ''
                                )}
                            >
                                <textarea
                                    id="description"
                                    type="text"
                                    name="description"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                    required
                                    className={cx(
                                        styles.textarea,
                                        (styles.textareaActivated: values.description)
                                    )}
                                />
                                <label
                                    htmlFor="description"
                                    className={cx(
                                        styles.label,
                                        values.description !== '' &&
                                            styles.labelTop,
                                        styles.typographyCaption
                                    )}
                                >
                                    Description
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
                                    touched.text &&
                                    errors.text &&
                                    values.text !== ''
                                        ? styles.error
                                        : ''
                                )}
                            >
                                <textarea
                                    id="text"
                                    type="text"
                                    name="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.text}
                                    required
                                    className={cx(
                                        styles.textarea,
                                        (styles.textareaActivated: values.text)
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

                            <div
                                className={cx(
                                    styles.formGroup,
                                    styles.typographyBody2,
                                    touched.text &&
                                    errors.text &&
                                    values.text !== ''
                                        ? styles.error
                                        : ''
                                )}
                            >
                                <input
                                    id="fileInput"
                                    name="image"
                                    type="file"
                                    accept="image/*"
                                    required
                                    onChange={event => {
                                        setFieldValue(
                                            'image',
                                            event.currentTarget.files[0]
                                        );
                                        this.setState({
                                            file: event.target.files[0].name
                                        });
                                    }}
                                />
                                <Button
                                    id="fileButton"
                                    label="Upload image"
                                    buttonSize="small"
                                    onClick={this.handleClick}
                                />
                                {file}
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
                                <Button type="submit" label="Create post" />
                            </div>
                        </form>
                    )}
                />
            </div>
        );
    }
}

CreatePostFormik.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default CreatePostFormik;
