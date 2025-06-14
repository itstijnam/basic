import React, { useEffect } from 'react';
import './ProjectDisplay.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ProjectDisplay() {
  const { selectedService } = useSelector(store => store.service);
  const navigate = useNavigate();
  console.log(selectedService)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project_display">
      <div className="pd_container">
        <div className="pad_left">
          <div className="pd_image">
            <img src={selectedService?.image} alt="Project" />
          </div>
        </div>
        <div className="pad_right">
          <div className="project_content">

            {/* Back Button */}
            <button className="back_button" onClick={() => navigate(-1)}>
              ← 
            </button>

            <h1 className="pro_text">{selectedService?.heading}</h1>
            <pre className="pro_quote">{selectedService?.short_desc}</pre>
            <pre className="pro_desc">{selectedService?.desc}</pre>

            <div className="about_project">
              <span className="line"></span>
              <div className="project-area">
                <div className="detail_container">
                  <p>Type: <span>{selectedService?.type}</span></p>
                </div>
                <div className="detail_container">
                  <p>Plot Area: <span>{selectedService?.plot_area}</span></p>
                </div>
                <div className="detail_container">
                  <p>Build Up Area: <span>{selectedService?.build_up_area}</span></p>
                </div>
                <div className="detail_container">
                  <p>Completed In: <span>{selectedService?.completed_in}</span></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;
