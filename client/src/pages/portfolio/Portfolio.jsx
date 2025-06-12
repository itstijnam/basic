import React from 'react'
import ArchSpaceInterio from './components/ArchSpaceInterio'
// import HoverTestimonialForm from './components/HoverTestimonialForm'
import TestimonialList from './components/TestimonialList'
import Testimonials from '../../components/testimonials/Testimonials'
import Caraousel from '../service/components/caraousel/Caraousel'
import { useEffect } from 'react'
import VideoCarousel from '../../components/videoCaraousel/VideoCarousel'
import './Portfolio.scss'

function Portfolio() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="portfolio_page">
            <ArchSpaceInterio />

            {/* Other sections */}

            <Caraousel />



            {/* video testimonial  */}
            <div className='video_caraousel' >
                <div className='testimonial_video_content'>
                    Our valuable customers
                </div>
                <VideoCarousel />
            </div>

            {/* <TestimonialList /> */}

            <Testimonials />

            {/* Other sections */}
        </div>
    )
}

export default Portfolio