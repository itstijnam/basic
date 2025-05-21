import React from 'react'
import './Header.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch }  from 'react-redux'
import LOGO from '../../assets/arch_space.png'

function Header() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const archNav = [
    {
      text: 'Home',
      url: '',
    },
    {
      text: 'Service',
      url: '',
    },
    {
      text: 'About',
      url: '',
    },
    {
      text: 'Portfolio',
      url: '',
    },
  ]

  const getCapName = (text)=>{
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  const navHandler = (text)=>{
    if(text === 'Home'){
      navigate('/')
    } else if( text === 'Service'){
      navigate('/service')
      
    }else if( text === 'About'){
      navigate('/')
      
    }else if( text === 'Portfolio'){
      navigate('/')
      
    }
  }

  return (
    <div className='header'>
        <div className="arch_logo">
          <img src={LOGO} alt="" />
        </div>
        <div className="arch_header_nav">
            <ul className='arch_nav_ul'>
              {archNav.map((arch, i)=>(
                <li key={i} onClick={()=>navHandler(arch.text)} >{getCapName(arch.text)}</li>
              ))}
            </ul>
            <button className='arch_contact_btn'>Contact Us</button>
        </div>
    </div>
  )
}

export default Header