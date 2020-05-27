import React, { useState, useEffect } from 'react';
//import axios from 'axios'
import * as yup from 'yup';
import { Link } from 'react-router-dom'

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
  .min(5, 'Password must be at least 5 characters')
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


  return (
    <div>
      
    </div>
  )
}

export default Login
