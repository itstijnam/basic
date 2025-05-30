import React from 'react'
import founderImg from './founder.jpg';
import bgImage from './bg.jpg'
import './About.css'

function About() {
    return (
        <div className='about-container'>
            <section className="hero">
                <div className="overlay"></div>
                <div className="hero-content">
                    <h1>Arch Space Interio</h1>
                    <p>Ideas become reality. We design elegant spaces with stable design and aesthetics.</p>
                    <button>Call Now</button>
                </div>
            </section>

            {/* -------------------- ACHIEVEMENT SECTION ---------------------- */}

            <section class="achievements-section">
                <div class="content">
                    <h2>Our Achievements Speak for Themselves</h2>
                    <p>
                        At Arch Space, we pride ourselves on delivering exceptional architectural solutions.
                        Our commitment to quality and innovation has led to numerous successful projects across various locations.
                    </p>
                    <div class="achievements-container">
                        <div class="image-wrapper">
                            <img src={bgImage} alt="Interior design" />
                        </div>
                        <div class="stats">
                            <div class="stat">
                                <h3>15+</h3>
                                <p>Years of Experience</p>
                            </div>
                            <div class="stat">
                                <h3>99%</h3>
                                <p>Client Satisfaction</p>
                            </div>
                            <div class="stat">
                                <h3>100+</h3>
                                <p>Project Completed</p>
                            </div>
                            <div class="stat">
                                <h3>21+</h3>
                                <p>Awards & Recognitions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* -------------------- VALUE SECTION ---------------------- */}

            <section class="values-section">
                <h2>Our values</h2>
                <div class="values-text">
                    <div class="value-item">
                        <h4>Market Expertise</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div class="value-item">
                        <h4>Client First Service</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div class="value-item">
                        <h4>Transparency</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div class="value-item">
                        <h4>Integrity</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                <div class="image-row">
                    <img src={bgImage} alt="img2" class="rounded rounded-left" />
                    <img src={bgImage} alt="img1" class="rounded rounded-left second-left" />
                    <img src={bgImage} alt="img3" class="rounded rounded-arch" />
                    <img src={bgImage} alt="img4" class="rounded rounded-right second-right" />
                    <img src={bgImage} alt="img5" class="rounded rounded-right" />
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
                    </div>-
                </div>
            </section>


        </div >
    )
}

export default About
