import React from 'react'
import './style/Login.css'
import { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function handleSubmit(){
    
  }

  return (

    <div className='login-container' >
      <div className='left-container'>
        <div className='heading'>
          Welcome to ArchSpace
        </div>
      </div>
      <div className='right-container'>
        <div className='form-container'>
          <h1>Log In</h1>
          <form className='login-form' onSubmit={handleSubmit}>
            <input
              type="email"
              name='email'
              placeholder='Type your email'
              onChange={handleChange}
              value={formData.email}
            />

            <input
              type="password"
              name='password'
              placeholder='Type your password'
              onChange={handleChange}
              value={formData.password}
            />
            <button type='submit'>Log In</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login