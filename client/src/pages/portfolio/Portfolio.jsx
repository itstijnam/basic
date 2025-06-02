import React from 'react'
import ArchSpaceInterio from './components/ArchSpaceInterio'
// import HoverTestimonialForm from './components/HoverTestimonialForm'
import TestimonialList from './components/TestimonialList'
import Testimonials from '../home/components/Testimonials'

function Portfolio() {
    return (
        <div className="portfolio_page">
            <ArchSpaceInterio />

            {/* Other sections */}


            {/* <TestimonialList /> */}
            <Testimonials />
            
            {/* Other sections */}
        </div>
    )
}

export default Portfolio