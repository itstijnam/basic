import React from 'react'
import './Header.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
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
      text: 'Portfolio',
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
  ]

  const getCapName = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  const navHandler = (text) => {
    if (text === 'Home') {
      navigate('/')
    } else if (text === 'Service') {
      navigate('/service')

    } else if (text === 'About') {
      navigate('/about')

    } else if (text === 'Portfolio') {
      navigate('/portfolio')

    } else if (text === 'Log In') {
      navigate('/login')
    }
  }

  const whatsappNumber = "919999167989"; // No '+' sign, just country code + number

  const handleClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}`;
    window.open(url, "_blank");
  };

  return (
    <div className='header'>
      <div className="header_box">

        {/* <div className="arch_logo">
          <img src={LOGO} alt="" />
        </div> */}
        <div className="arch_header_nav">
          <ul className='arch_nav_ul'>
            {archNav.map((arch, i) => (
              <li key={i} onClick={() => navHandler(arch.text)} >{getCapName(arch.text)}</li>
            ))}
          </ul>
          <button onClick={handleClick} className='arch_contact_btn'>Contact Us</button>
        </div>

      </div>
    </div>
  )
}

export default Header