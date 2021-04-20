import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as yup from 'yup';

export const Signup = () => {
  const validate = yup.object({
    firstName: yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
    City: yup.string()
      .max(15, 'Must be 3 characters or less')
      .required('Required'),
    Address: yup.string()
      .required('Required'),
    Pincode: yup.string()
      .max(6, 'Must be 6 characters ')
      .required('Required'),
     State: yup.string()
      .max(15, 'Must be 3 characters or less')
      .required('Required'),
    email: yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    Mobile: yup.string()
    .max(10, 'Must be 10 characters')
    .required('Required'),      
    password: yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    <Formik
      initialValues={{
        firstName: '',
        City: '',
        Address: '',
        Pincode: '',
        State: '',
        email: '',
        Mobile: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        alert(values);
        console.log(values)
      }}
    >
      {formik => (
        <div className="container">
          <div className="row">
          <div className="col-sm-6 mt-5 p-5">
          <img style={{borderRadius:20,height:'auto',marginTop:100}}
                    className="d-block w-100 img-responsive "
                    src="images/welcome.png"
                    alt="first slide" 
                  />
          </div>
            <div className="col-sm-6 p-5">
            <h1 className="my-4 font-weight-bold .display-4">Sign up </h1>
            <Form>
            <TextField label="Name" name="firstName" type="text" />
            <TextField label="City" name="City" type="text" />
            <TextField label="Address" name="Address" type="text" />
            <TextField label="Pincode" name="Pincode" type="text" />
            <TextField label="State" name="state" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Mobile" name="Mobile" type="text" />
            <TextField label="password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirmPassword" type="password" />
            <button className="btn btn-dark mt-3" type="submit">Register</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
          <p className="pt-4">
            You have already Account please  <a href="/SignIn"> Sign In </a> 
          </p>
            </div>
          </div>          
        </div>
      )}
    </Formik>
  )
}