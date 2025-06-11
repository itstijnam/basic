import React from 'react'
import '../style/Schedule.scss'
import IMG from '../../../assets/images/houseview.jpg'
import Tick from '../../home/assets/icons/Correct.png'
import Idea from '../../home/assets/icons/Idea.png'
import Rocket from '../../home/assets/icons/Rocket.png'

function Schedule() {

  const whatsappNumber = "919999167989"; // No '+' sign, just country code + number

  const handleClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}`;
    window.open(url, "_blank");
  };


  return (
    <div className='Schedule_container'>
      <div className='Schedule_content'>
        <h2 className="Schedule_heading">
          Designing Your Dream in <br /> Three Simple Steps
        </h2>

        <div className="Schedule_step">
          <div className="Schedule_icon">
            <img src={Rocket} alt="Rocket" />
          </div>
          <div className="Schedule_text">
            <h3>Start Project</h3>
            <p>
              Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience.
            </p>
          </div>
        </div>

        <div className="Schedule_step">
          <div className="Schedule_icon">
            <img src={Idea} alt="Idea" />
          </div>
          <div className="Schedule_text">
            <h3>Craft</h3>
            <p>
              Collaborate closely to achieve design excellence, refining your vision and crafting brilliance into every aspect of your space.
            </p>
          </div>
        </div>

        <div className="Schedule_step">
          <div className="Schedule_icon">
            <img src={Tick} alt="Correct" />
          </div>
          <div className="Schedule_text">
            <h3>Execute</h3>
            <p>
              Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space.
            </p>
          </div>
        </div>

        <button className="Schedule_button" onClick={()=>handleClick()} >Schedule For Consultation</button>
      </div>

      <div className='Schedule_image'>
        <img src={IMG} alt="Interior" />
      </div>
    </div>
  );
}

export default Schedule;