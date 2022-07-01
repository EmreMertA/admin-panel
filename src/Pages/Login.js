import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

const validate = (values) => {
  const errors = {};

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 5) {
    errors.password = '';
  }

  return errors;
};

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      checbox: false,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));

      navigate('/dashboard');
    },
  });

  return (
    <div id='container' className='cls-container'>
      {/* BACKGROUND IMAGE */}
      {/*===================================================*/}
      <div id='bg-overlay' />
      {/* LOGIN FORM */}
      {/*===================================================*/}
      <div className='cls-content'>
        <div className='cls-content-sm panel'>
          <div className='panel-body'>
            <div className='mar-ver pad-btm'>
              <h1 className='h3'>Account Login</h1>
              <p>Sign In to your account</p>
            </div>
            <form action='index.html' onSubmit={formik.handleSubmit}>
              <div className='form-group'>
                <input
                  id='username'
                  type='text'
                  name='username'
                  className='form-control'
                  placeholder='Username'
                  value={formik.values.username}
                  onChange={formik.handleChange}
                />
              </div>
              <div className='form-group'>
                <input
                  id='password'
                  type='password'
                  name='password'
                  className='form-control'
                  placeholder='Password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </div>
              <div className='checkbox pad-btm text-left'>
                <input
                  id='demo-form-checkbox'
                  className='magic-checkbox'
                  type='checkbox'
                />
                <label htmlFor='demo-form-checkbox'>Remember me</label>
              </div>
              <button
                className='btn btn-primary btn-lg btn-block'
                type='submit'
              >
                Sign In
              </button>

              {/*  <Link to='/' className='btn-link mar-rgt text-bold'>
                <button
                  className='btn btn-primary btn-lg btn-block'
                  type='submit'
                >
                  Sign In
                </button>
              </Link> */}
            </form>
          </div>
          <div className='pad-all'>
            <a href='' className='btn-link mar-rgt'>
              Forgot password ?
            </a>

            <Link to='/register' className='btn-link mar-lft'>
              Create a new account
            </Link>
            <div className='media pad-top bord-top'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
