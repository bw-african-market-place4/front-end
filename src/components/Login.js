import React, { useState, useEffect } from 'react';
//import axios from 'axios'
import * as yup from 'yup';
//import { BrowserRouter as Router, Link } from 'react-router-dom'

//setting initial look of login form
const initialLoginForm = { //initial State
  username: '',
  password: ''
}

//setting initial errors of form with placeholders(?)
const initialErrors = {
  username:'A username is required',
  password:'A password is required'
}

//schema of Login form with yup validation

const loginSchema = yup.object().shape({
  username: yup
  .string()
  .min(3, 'Username must be at least 3 characters')
  .required('Username is required'),
password: yup
  .string()
  .min(8, 'Password must be at least 8 characters')
  .required('Password is required')
});

const Login = (props) => {
  //set states for login, form errors, and button disable
  const [ login, setLogin ] = useState(initialLoginForm);

  const [ loginErrors, setLoginErrors] = useState(initialErrors);

  //btn unavailable until form is filled correctly
  const [ btnEnable, setBtnEnable ] = useState(false); 


  //stop side effects
  useEffect(() => {
    //if form is filled completely
    loginSchema.isValid(login).then(valid => {
      setBtnEnable(valid); //sets button to true
    })
  }, [login]) //focuses on login state

  //when inouts change event handler
  const onChange = e => {
    e.persist();
    //setLogin {copy login state, event target's name is event target's value}
    setLogin({...login, [e.target.name]: e.target.value });

    //yup validation

    yup
    .reach(loginSchema, e.target.name) //use login schema to check targets
    .validate(e.target.value) // make sure they are valid
    .then(valid => {
      setLoginErrors({...loginErrors, [e.target.name]: ''});
    })
    .catch(err => {
      setLoginErrors({...loginErrors, [e.target.name]: err.errors[0]
      })
    })
  };

  //when Login submit button is pressed

  const onSubmit = e => {
    e.preventDefault();
    console.log('Success!!')
    alert('Submission succedded!'); //erase later, just a check to see if working
    //axios goes here commented out til i get correct url
    //axios.post('url', login)
    //.then(res => {
      //axios stuff
    //})
    //.catch(err => {
      //console.log('Login was not successful', err);
    //})
  };

  return (
    <div className='container'>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <div className='form-area'>
          <label>Username:&nbsp;</label>
          <input
          placeholder='username'
          onChange={onChange}
          type='text'
          name='username'
          value={login.username}
          />

          <label>Password:&nbsp;</label>
          <input
          placeholder='password'
          onChange={onChange}
          type='password'
          name='password'
          value={login.password}
          />
          {/* //add on click event that links to whatever profile page */}
          <button className='submitButton'
          disabled={!btnEnable} type='submit'> Login</button>
          <div className='form-errors'> {loginErrors.username} </div>
          <div className='form-errors'> {loginErrors.password} </div>

        </div>
      </form>

      <div className='register'>
        {/* //add link to Register here using Link to after register pages is working */}
        No account?  Register here.
      </div>
      
    </div>
  )
}

export default Login
