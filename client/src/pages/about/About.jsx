import React from 'react'
import founderImg from './founder.jpg';
import './About.css'

function About() {
    return (
        <div>
            <section className="hero">
                <div className="overlay"></div>
                <div className="hero-content">
                    <h1>Arch Space Interio</h1>
                    <p>Ideas become reality. We design elegant spaces with stable design and aesthetics.</p>
                    <button>Call Now</button>
                </div>
            </section>

            {/* -------------------- INTRO SECTION ---------------------- */}

            <section class="intro-section">
                <p class="brand-heading">
                    <span class="brand-box">"ARCH SPACE INTERIO"</span>
                    is a leading designer of a multifaceted firm that work across india in architecture, interiors, furniture, lighting, product design with stable design and landscaping & Industrial pre fabrication Work.
                </p>

                <p>
                    Design is usually considered as USP of a project, but it does not mean creating beautiful views rather it should create a “Sense of belonging/ act as part of whole” for the user and the cityscapes.
                </p>

                <p>
                    ASI has a creative team of Landscape Planners, Architects, Draftsman and technical staff committed to designing of urban spaces and landscape art. With the diverse disciplines in ASI, we create and design in different realms. Our well equipped studio and team of highly qualified professionals are well versed with computer aided design.
                </p>

                <p>
                    Any project here is taken up with an intent to suffice the needs of client with keeping in mind the design sensibilities.
                </p>
            </section>

            {/* -------------------- VALUE SECTION ---------------------- */}

            <section class="values-section">
                <h2 class="section-title">Our Values</h2>

                <div class="value-card">
                    <h3 class="value-title">Client-Centric Approach</h3>
                    <p class="value-description">
                        We put our clients needs and vision at the heart of every project.
                    </p>
                </div>

                <div class="value-card">
                    <h3 class="value-title">Attention to Detail</h3>
                    <p class="value-description">
                        We believe that perfection lies in the details, and we strive for excellence in every aspect of our work.
                    </p>
                </div>

                <div class="value-card">
                    <h3 class="value-title">Attention to Detail</h3>
                    <p class="value-description">
                        We believe that perfection lies in the details, and we strive for excellence in every aspect of our work.
                    </p>
                </div>
            </section>

            {/* ---------------------- TEAM SECTION ----------------- */}

            <section className="team-section">
                <h1 className="team-title">Our Team</h1>
                <div className="team-grid">
                    <div className="member-card">
                        <img src={founderImg} alt="Yash Gupta" className="member-image" />
                        <div className="member-info">
                            <h3 className="member-name">Yash Gupta</h3>
                            <p className="member-role">Architect, Founder</p>
                        </div>
                    </div>
                    <div className="member-card">
                        <img src={founderImg} alt="Yash Gupta" className="member-image" />
                        <div className="member-info">
                            <h3 className="member-name">Yash Gupta</h3>
                            <p className="member-role">Architect, Founder</p>
                        </div>
                    </div>
                    <div className="member-card">
                        <img src={founderImg} alt="Yash Gupta" className="member-image" />
                        <div className="member-info">
                            <h3 className="member-name">Yash Gupta</h3>
                            <p className="member-role">Architect, Founder</p>
                        </div>
                    </div>
                    <div className="member-card">
                        <img src={founderImg} alt="Yash Gupta" className="member-image" />
                        <div className="member-info">
                            <h3 className="member-name">Yash Gupta</h3>
                            <p className="member-role">Architect, Founder</p>
                        </div>
                    </div>
                    <div className="member-card">
                        <img src={founderImg} alt="Yash Gupta" className="member-image" />
                        <div className="member-info">
                            <h3 className="member-name">Yash Gupta</h3>
                            <p className="member-role">Architect, Founder</p>
                        </div>
                    </div>
                </div>
            </section>


        </div >
    )
}

export default About
