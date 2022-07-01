import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }

  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 20) {
    errors.username = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8) {
    errors.password = 'Must be 8 characters or more';
  }

  return errors;
};

const Register = () => {
  /*   const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');*/
  const [checbox, setChecbox] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      password: '',
      email: '',
    },
    validate,
    onSubmit: (values) => {
      if (window.confirm('sign up?')) {
        alert(JSON.stringify(values, null, 2));
      }
    },
  });

  return (
    <div id='container' className='cls-container'>
      {/* BACKGROUND IMAGE */}
      {/*===================================================*/}
      <div id='bg-overlay' />
      {/* REGISTRATION FORM */}
      {/*===================================================*/}
      <div className='cls-content'>
        <div className='cls-content-lg panel'>
          <div className='panel-body'>
            <div className='mar-ver pad-btm'>
              <h1 className='h3'>Create a New Account</h1>
              <p>Come join the Nifty community! Let's set up your account.</p>
            </div>
            <form action='pages-login.html' onSubmit={formik.handleSubmit}>
              <div className='row'>
                <div className='col-sm-6'>
                  <div className='form-group'>
                    <input
                      id='name'
                      type='text'
                      name='name'
                      className='form-control'
                      placeholder='Full name'
                      value={formik.values.name}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.name ? (
                      <div>{formik.errors.name}</div>
                    ) : null}
                  </div>
                  <div className='form-group'>
                    <input
                      id='email'
                      type='text'
                      name='email'
                      className='form-control'
                      placeholder='E-mail'
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.email ? (
                      <div>{formik.errors.email}</div>
                    ) : null}
                  </div>
                </div>
                <div className='col-sm-6'>
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
                    {formik.errors.username ? (
                      <div>{formik.errors.username}</div>
                    ) : null}
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
                    {formik.errors.password ? (
                      <div>{formik.errors.password}</div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className='checkbox pad-btm text-left'>
                <input
                  id='demo-form-checkbox'
                  className='magic-checkbox'
                  type='checkbox'
                  onClick={() => setChecbox(!checbox)}
                />
                <label htmlFor='demo-form-checkbox'>
                  I agree with the{' '}
                  <a href='#' className='btn-link text-bold'>
                    Terms and Conditions
                  </a>
                </label>
              </div>
              {/*  <Link to='/' className='btn-link mar-rgt text-bold'>
                <button
                  className='btn btn-primary btn-lg btn-block'
                  type='submit'
                >
                  Register
                </button>
              </Link> */}

              <button
                className='btn btn-primary btn-lg btn-block'
                type='submit'
                disabled={!checbox}
              >
                Register
              </button>
            </form>
          </div>
          <div className='pad-all'>
            Already have an account ?{' '}
            <Link to='/login' className='btn-link mar-rgt text-bold'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
