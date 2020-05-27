import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
//import axios from 'axios'; 

const initialFormData = {
  username: '',
  password: '',
  email: '',
  name: '',
  businessName: '',
  terms: '',
};

const initialFormErrors = {
  username: '',
  password: '',
  email: '',
  name: '',
  businessName: '',
  terms: '',
};

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
  .boolean()
  .required('Accepting the Terms of Service is required')
});


const Register = () => {
  
  const [ formData, setFormData ] = useState(initialFormData);
  const [ errors, setErrors ] = useState(initialFormErrors);
  const [ disabled, setDisabled ] = useState(true);

  //check to see if form is valid
  useEffect(() => {
    console.log('register form state changed');
    registerSchema.isValid(formData).then(disable => {
      setDisabled(!disable);
    })
  })

  //onChange Event
  const onChange = (e) => {
    e.persist();
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    });

    yup
    .reach(registerSchema, e.target.value)
    .validate(e.target.value)
    .then(valid => {
      setErrors({...errors, [e.target.name]: ''})
    })
    .catch(err => {
      setErrors({...errors, [e.target.name]: err.errors[0]});
    });
  };

  //onSubmit Event

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(`Sucess!`)
    // //axios stuff will go here
    // .then(res =>{
    //   //axios stuff
    // })
    // .catch(err => {
    //   console.log('Something went wrong');
    // });
  };
  
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

        <button onClick={onSubmit} disabled={disabled} type='submit'>Submit</button>
      </form>
      Already have a login? Put a LInk to link here

    </div>
  )
}

export default Register
