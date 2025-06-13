import React, { useEffect, useRef, useState } from 'react'
import './Header.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import LOGO from '/Arch_spaceLogo.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import axios from 'axios'
import { baseUrl } from '../../utils/baseUrl'
import { setAuthUser } from '../../redux/authSlice'

function Header() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [stepCount, setStepCount] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { currentAuthUser } = useSelector(store => store.auth)
    const isAdmin = currentAuthUser?.role === 'admin'
    const mobileNavRef = useRef(null);
    const mobileMenuIconRef = useRef(null);

    // Click outside handler
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobileMenuOpen &&
                mobileNavRef.current &&
                !mobileNavRef.current.contains(event.target) &&
                !mobileMenuIconRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);


    const countController = () => {
        if (stepCount <= 5) {
            setStepCount(prev => prev + 1)
            if (stepCount === 5) {
                navigate('/login')
                setStepCount(0)
            }
        } else {
            setStepCount(0)
        }
    }

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
        // {
        //   text: 'Blogs',
        //   url: '',
        // },
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

    const logoutHandler = async () => {
        try {
            const res = await axios.post(`${baseUrl}/api/auth/logout`, {}, { withCredentials: true });

            if (res.data.success) {

                dispatch(setAuthUser(null));
                navigate('/');
            }
        } catch (error) {
            console.error('Logout failed:', error.message);
        }
    };
    
    
    return (
        <>
            <div className='header'>
                <div className="header_box">
                    <div className="arch_logo" onClick={() => {
                        navigate('/');
                        countController();
                    }}>
                        <img src={LOGO} alt="" />
                    </div>
            
                    {/* desktop nav */}
                    <div className="arch_header_nav">
                        <ul className='arch_nav_ul'>
                            {archNav.map((arch, i) => (
                                <li key={i} onClick={() => navHandler(arch.text)}>{getCapName(arch.text)}</li>
                            ))}
                        </ul>
                        {isAdmin ?
                            <button onClick={logoutHandler} className='arch_contact_btn'>Log Out</button> :
                            
                            <button onClick={handleClick} className='arch_contact_btn'>Enquire Us</button>
                        }
                    </div>

                    <div
                        className="mobile_menu_icon"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Menu"
                        ref={mobileMenuIconRef}
                    >
                        {isMobileMenuOpen ? (
                            <FaTimes className="mobile_icon" />
                        ) : (
                            <FaBars className="mobile_icon" />
                        )}
                    </div>
                </div>

                {/* mobile nav */}
                {isMobileMenuOpen && (
                    <div className="mobile_nav" ref={mobileNavRef}>
                        <ul className='mobile_nav_ul'>
                            {archNav.map((arch, i) => (
                                <li key={i} onClick={() => {
                                    navHandler(arch.text);
                                    setIsMobileMenuOpen(false);
                                }}>{getCapName(arch.text)}</li>
                            ))}
                        </ul>

                        {isAdmin ?
                            <button onClick={() => {
                                logoutHandler();
                                setIsMobileMenuOpen(false);
                            }} className='mobile_contact_btn'>Log Out</button> :
                            <button onClick={() => {
                                handleClick();
                                setIsMobileMenuOpen(false);
                            }} className='mobile_contact_btn'>Enquire Us</button>

                        }

                    </div>
                )}
            </div>
        </>
    );
}

export default Header;