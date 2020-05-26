import React, { useState } from 'react'

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    name: '',
    businessName: '',
    terms: '',
  });

  

  //onChange Event
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    })
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

      </form>
    </div>
  )
}

export default RegisterForm
