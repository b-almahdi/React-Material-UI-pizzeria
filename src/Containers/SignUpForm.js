import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import * as yup from 'yup';

const useStyles = makeStyles(theme => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        margin: theme.spacing(1)
    }
}));

const validationSchema = yup.object({
    Prenom: yup
        .string()
        .required('First Name is required')
        .max(20),
    Nom: yup
        .string()
        .required('Last Name is required')
        .max(20),
    email: yup
        .string()
        .email('Invalid email')
        .required('Email is required'),
    telephone: yup
        .string()
        .required('Phone')
        .max(20)
});

export const SignUpForm = ({ formData, setFormData, nextStep }) => {
    const classes = useStyles();
    return (
        <>
            <Formik
                initialValues={{
                    Prenom: "",
                    Nom: "",
                    email: "",
                    telephone: ""
                }}
                onSubmit={values => {
                    // setFormData(values);
                    // nextStep();
                }}
                validationSchema={validationSchema}
            >
                {({ errors, touched }) => (
                    <Form className={classes.form}>
                        <Field
                            name='Prenom'
                            label='Prénom *'
                            margin='normal'
                            as={TextField}
                            error={touched.Prenom && errors.Prenom}
                            helperText={touched.Prenom && errors.Prenom}
                        />
                        <Field
                            name='Nom'
                            label='Nom *'
                            margin='normal'
                            as={TextField}
                            error={touched.Nom && errors.Nom}
                            helperText={touched.Nom && errors.Nom}
                        />
                        <Field
                            type='email'
                            name='email'
                            label='Email *'
                            margin='normal'
                            as={TextField}
                            error={touched.email && errors.email}
                            helperText={touched.email && errors.email}
                        />
                        <Field
                            type='telephone'
                            name='telephone'
                            label='telephone *'
                            margin='normal'
                            as={TextField}
                            error={touched.telephone && errors.telephone}
                            helperText={touched.telephone && errors.telephone}
                        />
                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                            className={classes.button}
                        >
                            Continue
            </Button>
                    </Form>
                )}
            </Formik>
        </>
    );
};

SignUpForm.propTypes = {
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired
};
export default SignUpForm;