import React from 'react'
import founderImg from './founder.jpg';
import bgImage from './bg.jpg'
import quoteImage from './image 2.png'
import ValuesCarousel from './carousel/ValuesCarousel';
import { Minus } from 'lucide-react'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './About.css'

function About() {
    const [ref1, inView1] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const [ref2, inView2] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const [ref3, inView3] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const [ref4, inView4] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div className='about-container'>
            <section className="hero">
                <div className="overlay"></div>
                <div className="hero-content">
                    <div className="hero-content-text">
                        <h1>Arch <span>space</span></h1>
                        <p className='sub-text'>Let's create something extraordinary together</p>
                        <p className='main-text'>Our commitment to precision engineering ensures that every structure we design is not only asthetically striking but also built to stand the test of time.</p>
                        <button>CALL NOW</button>
                    </div>
                    <div className="hero-content-carousel">
                        <ValuesCarousel />
                    </div>
                </div>
            </section>

            {/* -------------------- ACHIEVEMENT SECTION ---------------------- */}

            <section class="achievements-section">
                <div class="content">
                    <motion.h2
                        ref={ref1}
                        initial={{ opacity: 0, scale: 0, y: 100 }}
                        animate={inView1 ? { opacity: 1, scale: 1, y: 0 } : {}}
                        transition={{
                            duration: 0.5,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                    >Our Achievements Speak for Themselves</motion.h2>
                    <motion.p
                        ref={ref1}
                        initial={{ opacity: 0, scale: 0, y: 100 }}
                        animate={inView1 ? { opacity: 1, scale: 1, y: 0 } : {}}
                        transition={{
                            duration: 0.5,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                    >
                        At Arch Space, we pride ourselves on delivering exceptional architectural solutions.
                        Our commitment to quality and innovation has led to numerous successful projects across various locations.
                    </motion.p>
                    <motion.div
                        ref={ref1}
                        initial={{ opacity: 0, scale: 0, y: 50 }}
                        animate={inView1 ? { opacity: 1, scale: 1, y: 0 } : {}}
                        transition={{
                            duration: 0.2,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                            delay: 0.5,
                        }}
                        class="achievements-container">
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
                    </motion.div>
                </div>
            </section>

            {/* -------------------- VALUE SECTION ---------------------- */}

            <section class="values-section">
                <motion.h2
                    ref={ref2}
                    initial={{ x: -400, opacity: 0, scale: 0 }}
                    animate={inView2 ? { x: 0, opacity: 1, scale: 1, rotate: 360 } : {}}
                    transition={{
                        duration: 0.5,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                >
                    Our values
                </motion.h2>
                <motion.div
                    ref={ref2}
                    initial={{ opacity: 0, y: 50, scale: 0 }}
                    animate={inView2 ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{
                        duration: 0.5,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        delay: 0.4
                    }}
                    class="values-text">
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
                </motion.div>

                <motion.div
                    ref={ref2}
                    initial={{ opacity: 0, y: 50, scale: 0 }}
                    animate={inView2 ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{
                        duration: 0.3,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        delay: 0.6,
                    }}
                    class="image-row">
                    <img src={bgImage} alt="img2" class="rounded rounded-left" />
                    <img src={bgImage} alt="img1" class="rounded rounded-left second-left" />
                    <img src={bgImage} alt="img3" class="rounded rounded-arch" />
                    <img src={bgImage} alt="img4" class="rounded rounded-right second-right" />
                    <img src={bgImage} alt="img5" class="rounded rounded-right" />
                </motion.div>
            </section>

            {/* ---------------------- TEAM SECTION ----------------- */}

            <section className="team-section">
                <motion.h1
                    ref={ref3}
                    initial={{ x: -400, opacity: 0, scale: 0 }}
                    animate={inView3 ? { x: 0, opacity: 1, scale: 1, rotate: 360 } : {}}
                    transition={{
                        duration: 0.5,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                    className="team-title"
                >
                    Our Team
                </motion.h1>
                <div className="team-grid">
                    <motion.div
                        ref={ref3}
                        initial={{ opacity: 0, scale: 0, y: 50 }}
                        animate={inView3 ? { opacity: 1, scale: 1, y: 0 } : {}}
                        transition={{
                            duration: 0.2,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                            delay: 0.2,
                        }}
                        className="member-card">
                        <img src={founderImg} alt="Yash Gupta" className="member-image" />
                        <div className="member-info">
                            <h3 className="member-name">Yash Gupta</h3>
                            <p className="member-role">Architect, Founder</p>
                        </div>
                    </motion.div>
                    <motion.div
                        ref={ref3}
                        initial={{ opacity: 0, scale: 0, y: 50 }}
                        animate={inView3 ? { opacity: 1, scale: 1, y: 0 } : {}}
                        transition={{
                            duration: 0.2,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                            delay: 0.3,
                        }}
                        className="member-card">
                        <img src={founderImg} alt="Yash Gupta" className="member-image" />
                        <div className="member-info">
                            <h3 className="member-name">Yash Gupta</h3>
                            <p className="member-role">Architect, Founder</p>
                        </div>
                    </motion.div>
                    <motion.div
                        ref={ref3}
                        initial={{ opacity: 0, scale: 0, y: 50 }}
                        animate={inView3 ? { opacity: 1, scale: 1, y: 0 } : {}}
                        transition={{
                            duration: 0.2,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                            delay: 0.4,
                        }}
                        className="member-card">
                        <img src={founderImg} alt="Yash Gupta" className="member-image" />
                        <div className="member-info">
                            <h3 className="member-name">Yash Gupta</h3>
                            <p className="member-role">Architect, Founder</p>
                        </div>
                    </motion.div>
                    <motion.div
                        ref={ref3}
                        initial={{ opacity: 0, scale: 0, y: 50 }}
                        animate={inView3 ? { opacity: 1, scale: 1, y: 0 } : {}}
                        transition={{
                            duration: 0.2,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                            delay: 0.5,
                        }}
                        className="member-card">
                        <img src={founderImg} alt="Yash Gupta" className="member-image" />
                        <div className="member-info">
                            <h3 className="member-name">Yash Gupta</h3>
                            <p className="member-role">Architect, Founder</p>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* -----------------------QUOTE SECTION --------------------------- */}

            <section className="quote-section">
                <motion.div
                    ref={ref4}
                    initial={{ opacity: 0, scale: 0, x: -100, y: 100 }}
                    animate={inView4 ? { opacity: 1, scale: 1, x: 0, y: 0 } : {}}
                    transition={{
                        duration: 0.5,
                    }}
                    className="quote-content">
                    <h1>Elevate your space with Arch <i>space</i></h1>
                    <p><span><Minus /></span>let's create something extraordinary together</p>
                    <button className='quote-btn'>GET YOUR FREE QUOTE!</button>
                </motion.div>
                <motion.div
                    ref={ref4}
                    initial={{ opacity: 0, scale: 0, x: -900, y: 100 }}
                    animate={inView4 ? { opacity: 1, scale: 1, x: 0, y: 0 } : {}}
                    transition={{
                        duration: 0.5,
                    }} 
                    className="quote-image">
                    <img src={quoteImage} alt="" />
                </motion.div>
            </section>
        </div >
    )
}

export default About
