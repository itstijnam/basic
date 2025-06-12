import React, { useEffect, useRef } from "react";
import "../style/Architecture_Box.scss";
import { useNavigate } from "react-router-dom";

function Architecture_box() {
    const boxRefs = useRef([]);
    const navigate = useNavigate();
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-up");
                    }
                });
            },
            { threshold: 0.4 }
        );

        boxRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            boxRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []); 

    return (
        <div className="Architecture_Box_Container">
            <div
                className="One_Architecture_Box Architecture_Box AB"
                ref={(el) => (boxRefs.current[0] = el)}
                // onClick={()=>navigate('/service')}
            >
                <div className="overlay">
                    <h1 className="overlayText">Lighting</h1>
                    <span className="overlayText">Design</span>
                    <p className="architecture_content">Lighting design is the art and science of illuminating spaces to enhance their beauty, functionality, and emotional impact. Beyond mere brightness, it involves strategically placing fixtures, selecting appropriate light temperatures, and controlling intensity to sculpt
                        atmosphere and highlight architectural features. Effective lighting can transform a room,
                        influence mood, and improve usability, ensuring every corner feels welcoming and purposeful. We craft bespoke lighting schemes that bring your vision to light, literally.</p>
                </div>
            </div>

            <div
                className="Second_Architecture_Box Architecture_Box AB"
                ref={(el) => (boxRefs.current[1] = el)}
                // onClick={()=>navigate('/service')}
            >
                <div className="overlay">
                    <h1 className="overlayText">Interior</h1>
                    <span className="overlayText">Design</span>
                    <p className="architecture_content">Transform your living spaces into havens of comfort and style with our expert
                        interior design services. We believe your home should reflect your unique personality and cater to your lifestyle. From conceptualization to flawless execution, we meticulously craft designs that blend aesthetics with functionality, making every corner a true reflection of
                        you. Let us bring your vision to life, creating spaces you'll love to live in.</p>
                </div>
            </div>

            <div
                className="Third_Architecture_Box Architecture_Box AB"
                ref={(el) => (boxRefs.current[2] = el)}
                // onClick={()=>navigate('/service')}
            >
                <div className="overlay">
                    <h1 className="overlayText">Outdoor</h1> 
                    <span className="overlayText">Design</span>
                    <p className="architecture_content">Outdoor design transforms your exterior areas into a seamless extension of your indoor living space.
                        It's about creating functional, beautiful, and inviting environments right outside your doors. From meticulously planned patios and vibrant gardens to thoughtful lighting and comfortable furnishings, we curate every element to enhance your lifestyle. Discover how a well-designed
                        outdoor space can add value, beauty, and endless possibilities for relaxation and entertainment.</p>
                </div>
            </div>

            <div
                className="Fourth_Architecture_Box Architecture_Box AB"
                ref={(el) => (boxRefs.current[3] = el)}
                // onClick={()=>navigate('/service')}
            >
                <div className="overlay">
                    <h1 className="overlayText">Office</h1>
                    <span className="overlayText">Design</span>
                    <p className="architecture_content">Office design goes beyond aesthetics; it's about crafting environments that foster productivity,
                        collaboration, and employee well-being. We specialize in creating dynamic workspaces that optimize flow, provide ergonomic comfort, and integrate inspiring elements. From efficient layouts and flexible work zones to thoughtful lighting and acoustics, our designs aim to reduce stress, boost creativity, and ultimately, enhance the overall success and
                        satisfaction of your team. Transform your office into a place where work thrives.</p>
                </div>
            </div>
        </div>
    );
}

export default Architecture_box;