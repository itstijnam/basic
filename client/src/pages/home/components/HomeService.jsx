import React from 'react'
import '../style/HomeService.scss'
import Line from '../assets/icons/LineImg.png';

function HomeService() {
    return (
        <>
            <h2 className="services_heading">
                {/* <span className="line"></span> */}
                <div className="text">
                    Our Services
                    <img src={Line} alt="LineImg" />
                </div>
            </h2>
            {/* <div className="services_cards">
                <div className="service_card">
                    <div className="service_top">
                        <img src={lightingIcon} alt="Lighting Design" className="service_icon" />
                        <h3>Lighting Design</h3>
                    </div>
                    <p>Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere</p>
                </div>
                <div className="service_card">
                    <div className="service_top">
                        <img src={interiorIcon} alt="Interior Design" className="service_icon" />
                        <h3>Interior Design</h3>
                    </div>
                    <p>From concept to completion, we oversee every detail to bring your vision to life efficiently</p>
                </div>
                <div className="service_card">
                    <div className="service_top">
                        <img src={outdoorIcon} alt="Outdoor Design" className="service_icon" />
                        <h3>Outdoor Design</h3>
                    </div>
                    <p>Celebrate the changing seasons with our seasonal outdoor decor services</p>
                </div>
            </div> */}
        </>
    )
}

export default HomeService