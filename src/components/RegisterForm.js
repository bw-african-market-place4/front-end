import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
//import axios from 'axios';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    name: '',
    businessName: '',
    terms: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
    email: '',
    name: '',
    businessName: '',
    terms: '',
  });

  const [disabled, setDisabled] = useState(true);

  const registerSchema = yup.object().shape({
    username: yup
      .string()
      .min(2, 'Username is required')
      .required('Username is required'),
    password: yup
      .string()
      .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must be at least 8 characters, with one uppercase (ABC), one lowercase (abc), one number (1234) and one special case character (!*%$#^*,etc ...)"
      )
      .required('Password is required'),
    email: yup
      .string()
      .email('Please use a valid email address')
      .required('Email is required'),
    name: yup
      .string()
      .min(3, 'Please enter your first and last name')
      .required('Name is required'),
    businessName: yup
      .string()
      .min(3, 'Please enter your business name')
      .required('Business name is required'),
    terms: yup
    .boolean(true,'Please accept the Terms of Service')
    .required('Accepting the Terms of Service is required')
  });

  //check to see if form is valid
  useEffect(() => {
    console.log('register form state changed');
    registerSchema.isValid(formData).then(valid => {
      setDisabled(!valid);
    })
  })

  //onChange Event
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    })
  }

  //onSubmit Event

  const onSubmit = () => {
    console.log(`Sucess!`)
  }
  return (
    <div>
      <h2> Register </h2>
      <form>
        <label>
          Username:&nbsp;
          <input
          value={formData.username}
          type='text'
          name='username'
          id='username'
          placeholder='Enter your username'
          minLength='2'
          maxLength='25'
          onChange={onChange}
          />
        </label>

        <label>Password:&nbsp;
         <input
          value={formData.password}
          type='password'
          name='password'
          id='password'
          placeholder='Enter your password'
          minLength='2'
          maxLength='25'
          onChange={onChange}
          />
        </label>

        <label>Email:&nbsp;
          <input
          value={formData.email}
          type='text'
          name='email'
          id='email'
          placeholder='Enter your email'
          minLength='2'
          maxLength='25'
          onChange={onChange}
          />
        </label>

        <label>Name:&nbsp;
          <input
          value={formData.name}
          type='text'
          name='name'
          id='name'
          placeholder='Enter your name'
          minLength='2'
          maxLength='25'
          onChange={onChange}
          />
        </label>

        <label>Business Name:&nbsp;
          <input
          value={formData.businessName}
          type='text'
          name='businessName'
          id='businessName'
          placeholder='Enter your business name'
          minLength='2'
          maxLength='25'
          onChange={onChange}
          />
        </label>

        <label>Do you accept the Terms of Service?&nbsp;
          <input
          type='checkbox'
          name='terms'
          id='terms'
          checked={formData.terms}
          onChange={onChange}
          />
        </label>
        <div className='form-errors'>
          {errors.username}
          {errors.password}
          {errors.name}
          {errors.businessName}
          {errors.email}
          {errors.terms}

        </div>

        <button onClick={onSubmit} disabled={disabled}>Submit</button>
      </form>
      Already have a login? <a href='#'>Click here</a>

    </div>
  )
}

export default RegisterForm
