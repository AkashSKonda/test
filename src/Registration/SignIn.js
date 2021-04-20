import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const SignIn = () => {
  const validate = Yup.object({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required')
  })
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div className="container">
          <div className="row">
            <div className="col-sm-6 p-5">
            <h1 className="my-4 font-weight-bold .display-4">Sign In </h1>
          <Form>
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <button className="btn btn-dark mt-3" type="submit">Sign in</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Cancel</button>
          </Form>
          <p className="pt-4">
          If You don't Have Account please <a href="/Signup"> Sign Up </a>
          </p>
          
            </div>
            
          <div className="col-sm-6 mt-5 p-5">
          <img style={{borderRadius:20,height:300,width:100}}
                    className="d-block w-100 img-responsive "
                    src="images/kerela.png"
                    alt="first slide" 
                  />
          </div>

          </div>          
        </div>
      )}
    </Formik>
  )
}