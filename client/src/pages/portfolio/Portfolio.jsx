import React from 'react'
import ArchSpaceInterio from './components/ArchSpaceInterio'
// import HoverTestimonialForm from './components/HoverTestimonialForm'
import TestimonialList from './components/TestimonialList'
import Testimonials from '../../components/testimonials/Testimonials'
import Caraousel from '../service/components/caraousel/Caraousel'
import { useEffect } from 'react'

function Portfolio() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="portfolio_page">
            <ArchSpaceInterio />

            {/* Other sections */}

            <Caraousel />


            {/* <TestimonialList /> */}
            <Testimonials />

            {/* Other sections */}
        </div>
    )
}

export default Portfolio