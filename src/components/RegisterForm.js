import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import * as yup from 'yup';

const RegisterForm = () => {

  const [ formState, setFormState ] = useState({
    name: '',
    username: '',
    businessName: '',
    email: '',
    password: '',
    terms: '',
});

const [ errors, setErrors ] = useState({
    name: '',
    username: '',
    businessName: '',
    email: '',
    password: '',
    terms: '',
});

const [ btnDisabled, setBtnDisabled ] = useState('');

const [ post, setPost ] = useState([]);

const validForm = yup.object().shape({
   
        name: yup.string()
            .min(2, 'Please enter your first and last name.')
            .required('The name field is a required.'),
        username: yup.string
            .min(5, 'Username must be at least 5 characters')
            .required('Username is a required field'),
        businessName: yup.string
            .min(2, 'The buisness name must be at least 2 characters')
            .required('The buisness name is a required field'),
        password: yup.string()
            .trim()
            .max(25, 'The password max character limit is twenty-five (25)')
            .matches
            (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character')
            .required('The password is a required field'),
        email: yup.string()
            .email('The email must be a valid email address')
            .required('The email is a required field'),
        terms: yup.boolean()
            .oneOf([true], 'You must accept the Terms of Service')
   
});

useEffect (() => {
    console.log('the form state has changed');
    validForm.isValid(formState).then((valid) => { setBtnDisabled(!valid); });
});

const validateChange = (e) => {
    yup
    .reach(validForm, e.target.name)
    .validate(e.target.value)
    .then(valid => {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    })
    .catch(err => {
      setErrors({
        ...errors,
        [e.target.name]: err.errors[0]
      });
    });
};

const inputChange = (e) => {
    e.persist();

    const newFormData = {
        ...formState,
        [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    };
    validateChange(e);
    setFormState(newFormData);
};

const formSubmit = (e) => {
    e.preventDefault();
    // axios
    // .post('url', formState)
    // .then((res) => {
    //     setPost(res.data);
    //     console.log('success', post);
    //     setFormState({
    //       name: '',
    //       username: '',
    //       businessName: '',
    //       email: '',
    //       password: '',
    //       terms: '',
    //     });
    // })
    // .catch((err) => {
    //     console.log(err.response);
    // });
};
    return (
       <form className='form-container' onSubmit={formSubmit}>
           <div className='all-center'>
               <h2>Fill out this form, please.</h2>

               {/* // Text Input // */}
               <label htmlFor='first-name'>
                   Username:&nbsp;
                   <input 
                   value={formState.username}
                   onChange={inputChange}
                   id='username'
                   name='username'
                   type='text'
                   placeholder='Pick a user name'
                   />
                </label>

               <label htmlFor='passwordInput'>
                   Password: &nbsp;
                   <input 
                   value={formState.password}
                   onChange={inputChange}
                   id='passwordInput'
                   name='password'
                   type='password'
                   placeholder='Password'
                   />
                </label>

                <label htmlFor='name'>
                   Last Name:&nbsp;
                   <input 
                   value={formState.name}
                   onChange={inputChange}
                   id='name'
                   name='name'
                   type='text'
                   placeholder='John Doe'
                   />
                </label>

                <label htmlFor='busineesName'>
                  Business Name:&nbsp;
                  <input 
                  value={formState.businessName}
                  onChange={inputChange}
                  id='businessName'
                  name='businessName'
                  type='text'
                  placeholder='A Business Name' 
                  />
                </label>

               <label htmlFor='emailInput'>
                   Email:&nbsp;
                   <input 
                   value={formState.email}
                   onChange={inputChange}
                   id='emailInput'
                   name='email'
                   type='email'
                   placeholder='youremail@email.com'
                   />
                </label>

                {/* // Errors // */}
            <div className='alert'>
                <div> {errors.username} </div>
                <div> {errors.businessName} </div>
                <div> {errors.name} </div>
                <div> {errors.email} </div>
                <div> {errors.password} </div>
                <div> {errors.terms} </div>
            </div>

            <div className='form-checkbox'>
               
               <label htmlFor='termsInput'>
                   <h4>Do you agree to the Terms of Service?</h4> &nbsp;
                   <input 
                   type='checkbox'
                   name='terms'
                   id='termsInput'
                   checked={formState.terms}
                   onChange={inputChange}
                   />
                </label>
            </div>

             {/* // Submit Button // */}
            <div className='submit-btn'>
                {/* //disable button until form is complete */}
                <button className='btn' disabled={btnDisabled} type='submit'>
                    Submit
                </button>
            </div>{/* // Ends form submit-btn div*/}

           </div>{/* // Ends form text div*/}
       </form>
    )
}


export default RegisterForm
