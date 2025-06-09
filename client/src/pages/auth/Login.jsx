import React from 'react'
import './style/Login.css'
import { useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../utils/baseUrl';
import { setAuthUser } from '../../redux/authSlice';
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post(`${baseUrl}/api/auth/login`, {
        email: formData.email,
        password: formData.password
      });

      if (res.data.success) {
        console.log(res.data.message)
        dispatch(setAuthUser(res.data.currentUser));
        navigate('/');
      }
    } catch (error) {
      console.error(error?.respnose?.data?.message);
    }
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
            <button onClick={()=>navigate('/signup')}>Create Account</button>
          </form>
            <button onClick={()=>navigate(-1)}  className='backBtn'>Back to Home Page</button>
        </div>
      </div>
    </div>
  )
}

export default Login