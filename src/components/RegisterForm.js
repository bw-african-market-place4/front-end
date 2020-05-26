import React from 'react'

const RegisterForm = () => {
  return (
    <div>
      <h2> Register </h2>
      <form>
        <label>
          Username:&nbsp;
          <input
          type='text'
          name='username'
          id='username'
          placeholder='Enter your username'
          minLength='2'
          maxLength='25'
          />
        </label>
        
        <label>Password:&nbsp;
         <input
          type='text'
          name='username'
          id='username'
          placeholder='Enter your password'
          minLength='2'
          maxLength='25'
          />
        </label>

        <label>Email:&nbsp;
          <input
          type='text'
          name='username'
          id='username'
          placeholder='Enter your email'
          minLength='2'
          maxLength='25'
          />
        </label>

        <label>Name:&nbsp;
          <input
          type='text'
          name='username'
          id='username'
          placeholder='Enter your name'
          minLength='2'
          maxLength='25'
          />
        </label>

        <label>Business Name:&nbsp;
          <input
          type='text'
          name='username'
          id='username'
          placeholder='Enter your business name'
          minLength='2'
          maxLength='25'
          />
        </label>

        <label>Do you accept the Terms of Service?&nbsp;
          <input
          type='checkbox'
          name='terms'
          id='terms'
          />
        </label>

      </form>
    </div>
  )
}

export default RegisterForm
