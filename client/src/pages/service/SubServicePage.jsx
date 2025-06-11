import React, { useEffect, useState } from 'react';
import './style/SubServicePage.scss';
import BGIMAGE from "./components/assets/ourservice.webp";
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import archspacedata from './sample_api';

function SubServicePage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    const { services } = useSelector(store => store.service);

    console.log(services)
    const { pagename } = useParams();

    const [selectedSubCat, setSelectedSubCat] = useState('All');

    useEffect(() => {
        const isValid = services.some(c => c.type.toLowerCase() === pagename.toLowerCase());
        if (!isValid) {
            navigate('/service');
        }
    }, [pagename, navigate]);

    const subCategory = [
        { text: 'All', icon: '' },
        { text: 'WC Design', icon: '' },
        { text: 'Kitchen', icon: '' },
        { text: 'Commercial Design', icon: '' },
        { text: 'Residential Work', icon: '' },
        { text: 'Mandir', icon: '' },
        { text: 'Corporate Work', icon: '' },
        { text: 'Pre Fabrication', icon: '' },
        { text: 'Facade', icon: '' },
        { text: 'Cottage Work', icon: '' },
        { text: 'Walkin Closet', icon: '' },
        { text: 'Entrance Lobby', icon: '' },
    ];

    // Improved filtering logic with case-insensitive partial matching
    const filteredProjects = services?.filter(c => {
        const typeMatch = c?.type?.toLowerCase() === pagename.toLowerCase();

        if (selectedSubCat === 'All') return typeMatch;

        if (!c.subcat) return false;

        // Check if any word in the subcategory includes the selected text
        const subcatWords = c?.subcat?.toLowerCase()?.split(/\s+/);
        const searchWords = selectedSubCat?.toLowerCase().split(/\s+/);

        return typeMatch && searchWords?.some(word =>
            subcatWords?.some(subcatWord => subcatWord?.includes(word))
        );
    });

    return (
        <div className='subservicepage'>
            <div className="subservicepageimagecontainer">
                <div className="image_container">
                    <div className="servimage">
                        <img src={BGIMAGE} alt="" />
                    </div>
                </div>
                <div className="container_content">
                    <h1>{pagename}</h1>
                    <strong>where your money values</strong>
                </div>
            </div>

            <div className="service_category">
                <div className="service_item">
                    {subCategory.map((cat, i) => (
                        <div
                            className={`cat_card ${selectedSubCat === cat.text ? 'active' : ''}`}
                            key={i}
                            onClick={() => setSelectedSubCat(cat.text)}
                        >
                            <div className="icon">
                                <p className='cat_icon'>🥘</p>
                            </div>
                            <p className='cat_text'>{cat.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="filtered_projects">
                {filteredProjects?.map((c, i) => (
                    <div className="filtered_project_card" key={i}>
                        <img src={c?.image} style={{ height: '6rem', width: '6rem', borderRadius: '8px' }} alt={c.projectName} />
                        <h3>{c?.heading}</h3>
                        <p><strong>Type:</strong> {c?.type}</p>
                        <p><strong>Subcategory:</strong> {c?.subcat}</p>
                        <p><strong>Plot Area:</strong> {c?.plot_area}</p>
                        <p><strong>Completed in:</strong> {c?.completed_in}</p>
                    </div>
                ))}
                {filteredProjects.length === 0 && (
                    <p style={{ textAlign: 'center', marginTop: '2rem', fontWeight: 'bold' }}>
                        No projects found for selected subcategory.
                    </p>
                )}
            </div>
        </div>
    );
}

export default SubServicePage;