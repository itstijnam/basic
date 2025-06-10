import React from 'react'
import './style/SubServicePage.scss'
import BGIMAGE from "./components/assets/ourservice.webp"
// import BGIMAGE from "./components/assets/houseview.jpg"
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function SubServicePage() {

    const { services } = useSelector(store => store.service);
        
    return (

        <div className='subservicepage'>
            <div className="subservicepageimagecontainer">
                <div className="image_container">
                    <div className="servimage"> <img src={BGIMAGE} alt="" /> </div>
                </div>
                <div className="container_content">
                    <h1>Projects</h1>
                    <strong>where your money values</strong>
                </div>
            </div>


        

            <div className="mid_container">

                {services?.map((service, i) => (



                    <div className={ (i%2===0) ? "MC_container" : "MC_container makeflexrowreverse" } key={i} >
                        <div className="leftBox">
                            <div className='projectHeading'>
                                <div className="heading">
                                    <h2>{service?.heading}</h2>
                                    <span>{service?.short_desc}</span>
                                </div>
                                <div className="about_project">
                                    {service?.desc}
                                </div>
                                {/* <div className="line"><hr /></div> */}
                            </div>
                            {/* <div className="project_infra">
                                <div className="about_tag">
                                    <h2>Type</h2>
                                    <p>Residential</p>
                                </div>
                                <div className="about_tag">
                                    <h2>Service Offered</h2>
                                    <p>Architecture Design & Interior</p>
                                </div>
                                <div className="about_tag">
                                    <h2>Plot Area</h2>
                                    <p>936 Square Feet</p>
                                </div>
                            </div> */}
                        </div>
                        <div className="rightBox">
                            <div className="projectImages">
                                <img src={service?.image} alt="" />
                            </div>
                            {/* <div className="project_action_btn">
                                <button>left</button>
                                <button>right</button>
                            </div> */}
                        </div>
                    </div>
                ))}
            </div>
            <div className="back_btn_from_projects_page">
                <button>back</button>
            </div>
        </div>

    )
}

export default SubServicePage