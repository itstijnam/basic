import React from 'react'
import './Projects.css'
import { useNavigate } from 'react-router-dom'

function Projects() {

    const navigate = useNavigate();

    return (
        <>
        <div className='project-section'>
            <h1>Our Best Projects</h1>
            <h3>Our top picks because you deserve nothing but the best</h3>
            <div className='projects-container'>
                <div className="project project-1">
                    <div className="project-overlay"></div>
                    
                        <h4>Behror Project</h4>
                </div>
                <div className="project project-2">
                    <div className="project-overlay"></div>
                    <h4>Office Project</h4>
                </div>
                <div className="project project-3">
                    <div className="project-overlay"></div>
                    <h4>Jaipur, Mahima Florenza</h4>
                </div>
            </div>
        <button className='projects_explore_btn' onClick={()=>navigate('/portfolio')}>Explore All Projects</button>
        </div>
        </>
    )
}

export default Projects
