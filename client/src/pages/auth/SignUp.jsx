import React, { useState, useEffect } from 'react';
import './style/SignUp.scss';
import bgImage from '../../assets/Images/BackgroundImage.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../utils/baseUrl';

const Signup = () => {
  
  const navigate = useNavigate();
  const [stepCount, setStepCount] = useState(0);
  const [fieldState, setFieldState] = useState(false);
  const [countdown, setCountdown] = useState(30);

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user',
    secret_key: ''
  });

  const countController = () => {
    setStepCount(prev => {
      const newStep = prev + 1;
      if (newStep === 6) {
        setFieldState(true);
        setCountdown(30);
        return 0;
      }
      return newStep;
    });
  };


  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${baseUrl}/api/auth/register`,
        form,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        console.log(res.data.message);
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
      alert(error?.response?.data?.message || "Signup failed");
    }
  };


  // Admin Mode Countdown Effect
  useEffect(() => {
    if (!fieldState) return;

    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setFieldState(false);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [fieldState]);

  return (
    <div className="signup-container">
      <div
        className="left-pane"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh'
        }}
      ></div>

      <div className="right-pane">
        <form className="signup-form">
          <h2 onClick={countController}>
            {fieldState ? `Admin Mode (${countdown}s)` : 'Create Account'}
          </h2>


          <p className="subtext">
            <span>Sign up</span> now and take your first step towards smarter solutions.
          </p>

          <input type="text" placeholder="NAME" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input type="email" placeholder="EMAIL ID" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input type="password" placeholder="PASSWORD" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
          <input type="password" placeholder="CONFIRM PASSWORD" />
          {fieldState && (
            <input
              type="text"
              placeholder="Secret Key*"
              value={form.secret_key}
              onChange={(e) => setForm({ ...form, secret_key: e.target.value })}
            />
          )}


          <div className="admin_cta">
            <button type="button" className="back-btn btn" onClick={() => navigate(-1)}>
              Back
            </button>
            <button type="submit" className="login-btn btn" onClick={signupHandler} >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
