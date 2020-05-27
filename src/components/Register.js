import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContainerDiv } from '../styled/Styled';
//import axios from 'axios'
import * as yup from 'yup';
//import { BrowserRouter as Router, Link } from 'react-router-dom'

//setting initial look of login form
const initialRegForm = { //initial State
  username: '',
  password: '',
  name: '',
  email: '',
  businessName: '',
  terms: ''
  //need help with terms checkbox
}

//setting initial errors of form with placeholders(?)
const initialErrors = {
  username:'A username is required',
  password:'A password is required',
  name: 'A name is required',
  email: 'An email ir required',
  businessName: 'A business name is required',
  terms: 'Terms of Service must be accepted'
  //need help with terms checkbox
}

//schema of Login form with yup validation

const regSchema = yup.object().shape({
  username: yup
  .string()
  .min(3, 'Username must be at least 3 characters')
  .required('Username is required'),
  password: yup
  .string()
  .min(8, 'Password must be at least 8 characters')
  .required('Password is required'),
  name: yup
  .string()
  .min(3, 'Please type your first and last name')
  .required('Name is required'),
  businessName: yup
  .string()
  .min(3, 'The business name must be at least 3 characters')
  .required('The business name is required'),
  email: yup
  .string()
  .email('The email must be valid')
  .required('Email is required'),
  //terms goes here terms: yup.bool().oneOf(true), 'message')
  // terms: yup
  // .bool()
  // .oneOf([true], 'Terms of Service must be accepted')
});

const Register = (props) => {
  //set states for reg (register), form errors, and button disable
  const [ reg, setReg ] = useState(initialRegForm);

  const [ regErrors, setRegErrors] = useState(initialErrors);

  //btn unavailable until form is filled correctly
  const [ btnEnable, setBtnEnable ] = useState(false); 


  //stop side effects
  useEffect(() => {
    //if form is filled completely
    regSchema.isValid(reg).then(valid => {
      setBtnEnable(valid); //sets button to true
    })
  }, [reg]) //focuses on login state

  //when inouts change event handler
  const onChange = e => {
    e.persist();
    //setLogin {copy login state, event target's name is event target's value}
    setReg({...reg, [e.target.name]: e.target.value });

    //yup validation

    yup
    .reach(regSchema, e.target.name) //use login schema to check targets
    .validate(e.target.value) // make sure they are valid
    .then(valid => {
      setRegErrors({...regErrors, [e.target.name]: ''});
    })
    .catch(err => {
      setRegErrors({...regErrors, [e.target.name]: err.errors[0]
      })
    })
  };

  //when Login submit button is pressed

  const onSubmit = e => {
    e.preventDefault();
    console.log('Success!!')
    alert('Submission succedded!'); //erase later, just a check to see if working
    //axios goes here commented out til i get correct url
    //axios.post('url', reg)
    //.then(res => {
      //axios stuff
    //})
    //.catch(err => {
      //console.log('Registration was not successful', err);
    //})
  };

  return (
    <ContainerDiv>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <div className='form-area'>
          <label>Username:&nbsp;</label>
          <input
          placeholder='username'
          onChange={onChange}
          type='text'
          name='username'
          value={reg.username}
          />

          <label>Password:&nbsp;</label>
          <input
          placeholder='password'
          onChange={onChange}
          type='password'
          name='password'
          value={reg.password}
          />

          <label>Name:&nbsp;</label>
          <input
          placeholder='Fluffy McFlooferbottom'
          onChange={onChange}
          type='text'
          name='name'
          value={reg.name} 
          />

          <label>Business Name:&nbsp;</label>
          <input
          placeholder='Catnip'
          onChange={onChange}
          type='text'
          name='businessName'
          value={reg.businessName} 
          />

          <label>Email:&nbsp;</label>
          <input
          placeholder='cats@arecute.com'
          onChange={onChange}
          type='email'
          name='email'
          value={reg.email} 
          />

          
          {/* <input
          onChange={onChange}
          type='checkbox'
          name='terms'
          checked={reg.terms}
          value={reg.terms} 
          />
          <label>&nbsp; Terms of Service</label> */}

          {/* //add on click event that links to whatever profile page */}
          <button className='submitButton'
          disabled={!btnEnable} type='submit'> Register</button>
          <div className='form-errors'> {regErrors.username} </div>
          <div className='form-errors'> {regErrors.password} </div>
          <div className='form-errors'> {regErrors.name} </div>
          <div className='form-errors'> {regErrors.businessName} </div>
          <div className='form-errors'> {regErrors.email} </div>
          {/* <div className='form-errors'> {regErrors.terms} </div>  */}
        

        </div>
      </form>

      <div>
        {/* //add link to Login  here using Link to after register pages is working */}
        No account?  <Link to='/'>Login here.</Link>
      </div>
      
    </ContainerDiv>
  )
}

export default Register
