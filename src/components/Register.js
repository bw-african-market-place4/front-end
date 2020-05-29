import React, { useState, useEffect } from "react";
//import { Link } from 'react-router-dom';
import {
  ContainerFormDiv,
  StyleInput,
  StyleLabel,
  StyleError,
  StyleP,
  StyleBtns,
  StyleLink
} from "../styled/Styled";
import axiosWithAuth from "../utils/axiosWithAuth";
import * as yup from "yup";
//import { BrowserRouter as Router, Link } from 'react-router-dom'

//setting initial look of login form
const initialRegForm = {
  //initial State
  username: "",
  password: "",
  name: "",
  email: "",
  businessName: "",
  terms: false
  //need help with terms checkbox
};

//setting initial errors of form with placeholders(?)
const initialErrors = {
  username: "A username is required",
  password: "A password is required",
  name: "A name is required",
  email: "An email is required",
  businessName: "A business name is required",
  terms: "Terms of Service must be accepted"
  //need help with terms checkbox
};

//schema of Login form with yup validation

const regSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  name: yup
    .string()
    .min(3, "Please type your first and last name")
    .required("Name is required"),
  businessName: yup
    .string()
    .min(3, "The business name must be at least 3 characters")
    .required("The business name is required"),
  email: yup
    .string()
    .email("The email must be valid")
    .required("Email is required"),
  //terms goes here terms: yup.bool().oneOf(true), 'message')
  terms: yup.bool().oneOf([true], "Terms of Service must be accepted")
});

const Register = props => {
  //set states for reg (register), form errors, and button disable
  const [reg, setReg] = useState(initialRegForm);

  const [regErrors, setRegErrors] = useState(initialErrors);

  //btn unavailable until form is filled correctly
  const [btnEnable, setBtnEnable] = useState(false);

  //stop side effects
  useEffect(() => {
    //if form is filled completely
    regSchema.isValid(reg).then(valid => {
      setBtnEnable(valid); //sets button to true
    });
  }, [reg]); //focuses on login state

  //for checkbox validation
  //const onCheckbox

  //when inouts change event handler
  const onChange = e => {
    e.persist();
    //setLogin {copy login state, event target's name is event target's value}
    if (e.target.name === "terms") {
      setReg({ ...reg, [e.target.name]: e.target.checked });
    } else {
      setReg({ ...reg, [e.target.name]: e.target.value });
    }

    //yup validation

    yup
      .reach(regSchema, e.target.name) //use login schema to check targets
      .validate(e.target.value) // make sure they are valid
      .then(valid => {
        setRegErrors({ ...regErrors, [e.target.name]: "" });
      })
      .catch(err => {
        setRegErrors({ ...regErrors, [e.target.name]: err.errors[0] });
      });
  };

  //when Login submit button is pressed

  const onSubmit = e => {
    e.preventDefault();
    console.log("Success!!");
    alert("Submission succeded!"); //erase later, just a check to see if working

    axiosWithAuth
      .post("https://afmarket.herokuapp.com/api/auth/register", reg)
      .then(res => console.log(res))
      .catch(err => {
        console.log("Registration was not successful", err);
      });
  };

  return (
    <ContainerFormDiv>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <div className="form-area">
          <StyleLabel>Username:&nbsp;</StyleLabel>
          <StyleInput
            placeholder="username"
            onChange={onChange}
            type="text"
            name="username"
            value={reg.username}
          />

          <StyleLabel>Password:&nbsp;</StyleLabel>
          <StyleInput
            placeholder="password"
            onChange={onChange}
            type="password"
            name="password"
            value={reg.password}
          />

          <StyleLabel>Name:&nbsp;</StyleLabel>
          <StyleInput

          placeholder='Dio Brando'
          onChange={onChange}
          type='text'
          name='name'
          value={reg.name} 
          />

          <StyleLabel>Business Name:&nbsp;</StyleLabel>
          <StyleInput

          placeholder='Get Ripped'
          onChange={onChange}
          type='text'
          name='businessName'
          value={reg.businessName} 

          />

          <StyleLabel>Email:&nbsp;</StyleLabel>
          <StyleInput

          placeholder='itisi@dio.com'
          onChange={onChange}
          type='email'
          name='email'
          value={reg.email} 

          />

          <input
            onChange={onChange}
            type="checkbox"
            name="terms"
            checked={reg.terms}
          />

          <StyleLabel>&nbsp; Do you accept to the Terms of Service?</StyleLabel>

          {/* //add on click event that links to whatever api */}
          <div>
            <StyleBtns
              className="submitButton"
              disabled={!btnEnable}
              type="submit"
            >
              {" "}
              Register
            </StyleBtns>
          </div>

          <StyleError> {regErrors.username} </StyleError>
          <StyleError> {regErrors.password} </StyleError>
          <StyleError> {regErrors.name} </StyleError>
          <StyleError> {regErrors.businessName} </StyleError>
          <StyleError> {regErrors.email} </StyleError>
        </div>
      </form>

      <StyleP>

     
        No account? <StyleLink to='/'>Login here.</StyleLink>

      </StyleP>
    </ContainerFormDiv>
  );
};

export default Register;
