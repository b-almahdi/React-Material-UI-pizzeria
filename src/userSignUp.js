import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { GET_USERS, PUT_USER, POST_USER, DELETE_USER, CANCEL_USER_UPDATE, EDIT_USER } from './actions';




class userSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          users: []
        }
      }
    render() {
        return (
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                validationSchema={Yup.object().shape({
                    firstName: Yup.string()
                        .required('First Name is required'),
                    lastName: Yup.string()
                        .required('Last Name is required'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                        telephone: Yup.string()
                        .min(6, 'telephone must be at least 6 characters')
                        .required('telephone is required'),
                })}
                onSubmit={fields => {
                    this.addUser(fields)
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                    console.log(fields);
                                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                            <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                            <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telephone">telephone</label>
                            <Field name="telephone" type="telephone" className={'form-control' + (errors.telephone && touched.telephone ? ' is-invalid' : '')} />
                            <ErrorMessage name="telephone" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Register</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                        </div>
                    </Form>
                )}
            />
        )
    }

    addUser = (fields) => {
        this.props.addUser({ nom: fields.firstName,
           prenom: fields.lastName,
           adresse: fields.email,
           telephone: fields.telephone, });
      }
    
}



const mapDispatchToProps = (dispatch) => {
    return {
      getUsers: () => {
        dispatch({ type: GET_USERS });
      },
      addUser: (user) => {
        dispatch({ type: POST_USER, value: user });
      },
      deleteUser: (userId) => {
        dispatch({ type: DELETE_USER, value: userId });
      },
      editUser: (userId) => {
        dispatch({ type: EDIT_USER, value: userId });
      },
      updateUser: (user) => {     
        console.log('dispatch update', user) 
        dispatch({ type: PUT_USER, value: user });
      },
      cancelUpdate: (userId) => {
        dispatch({ type: CANCEL_USER_UPDATE, value: userId });
      },
    }
  }
  
  const mapStateTopProps = (state) => {
    return {
      users: state.users
    }
  }
export default connect(mapStateTopProps, mapDispatchToProps)(userSignUp);
  
