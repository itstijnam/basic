import React from 'react'

function Store() {
    return (
        <div className="mid_container">

            {services?.map((service, i) => (



                <div className={(i % 2 === 0) ? "MC_container" : "MC_container makeflexrowreverse"} key={i} >
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
    )
}

export default Store