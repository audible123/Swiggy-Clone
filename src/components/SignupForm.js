import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const SignupForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = 'First Name is required';
    }

    if (!values.lastName) {
      errors.lastName = 'Last Name is required';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className='border-black  flex justify-center items-center h-[100vh]'>
          <div className='w-3/6 h-2/5 bg-slate-600 flex flex-col justify-center item-center'>
          <div className='m-5'>
            <label htmlFor="firstName">First Name</label>
            <Field type="text" id="firstName" name="firstName" />
            <ErrorMessage name="firstName" component="div" />
          </div>
          <div className='m-5'>
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" id="lastName" name="lastName" />
            <ErrorMessage name="lastName" component="div" />
          </div>
          <div className='m-5'>
            <label htmlFor="email" className='mr-7'>Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div className='m-5'>
            <label htmlFor="password" className='mr-4'>Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <button className='bg-cyan-600' type="submit" disabled={isSubmitting}>
            Submit
          </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
