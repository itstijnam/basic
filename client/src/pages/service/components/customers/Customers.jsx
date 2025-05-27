import React, { useState } from 'react'
import '../../style/Customers.scss'
import backImage from '../assets/house.jpg'
import avatar2 from '../assets/houseview.jpg'
import addIcon from '/icon/addImage.png'
function Customers() {

    const testimonials = [
        {
            quote: 'Exceptional service! From the initial consultation to the final reveal, your team demonstrated professionalism & a keen eye for design. Highly recommend!',
            profile_pic: avatar2,
            name: 'James Bennet',
            city: 'Toronto',
            country: 'Canada'
        },
        {
            quote: 'Exceptional service! From the initial consultation to the final reveal, your team demonstrated professionalism & a keen eye for design. Highly recommend!',
            profile_pic: avatar2,
            name: 'Robert',
            city: 'New York',
            country: 'America'
        }
    ]

    const [dialogue, setDialogue] = useState(false)


    return (
        <div className='customers'>
            <div className="customer_section">
                <div className="bacground_image_section">
                    <div className="image_section">
                        <img src={backImage} alt="" />
                    </div>
                    <div className="action_btn">
                        <button>&larr;</button>
                        <button>&rarr;</button>
                    </div>
                </div>
                <div className="customer_testimonial_section">
                    <div className="cutomer_header">
                        <h1>Our Customers</h1>
                    </div>
                    <div className="customer_testimonial_box">

                        {/* testimonial card 1 */}


                        <div className="testimonial_card">
                            <div className="inverted_comma"> <h1>“</h1> </div>
                            <p className="customer-card__quote"> {testimonials[0]?.quote} </p>
                            <footer className="customer-card__footer">
                                <img className="customer-card__avatar" src={testimonials[0]?.profile_pic} alt="James Bennett" />
                                <div>
                                    <p className="customer-card__name">{testimonials[0]?.name}</p>
                                    <p className="customer-card__location">{testimonials[0]?.city}, {testimonials[0]?.country}</p>
                                </div>
                            </footer>
                        </div>


                        {/* testimonial card 2 */}

                        <div className="testimonial_card">
                            <div className="inverted_comma"> <h1>“</h1> </div>
                            <p className="customer-card__quote"> {testimonials[1]?.quote} </p>
                            <footer className="customer-card__footer">
                                <img className="customer-card__avatar" src={testimonials[1]?.profile_pic} alt="James Bennett" />
                                <div>
                                    <p className="customer-card__name">{testimonials[1]?.name}</p>
                                    <p className="customer-card__location">{testimonials[1]?.city}, {testimonials[1]?.country}</p>
                                </div>
                            </footer>
                        </div>

                        <div className="testimonial_add_section" onClick={()=>setDialogue(!dialogue)} > <h3>+</h3> </div>

                    </div>
                </div>
            </div>

            {dialogue &&

                <div className='testimonial_add'>
                    <div className="profileImage"> <img src={addIcon} alt="" /> </div>
                    
                    
                    <div className="userbox">

                        <div className="user_details">
                            <span>Name</span>
                            <input type="text" placeholder='name' />
                        </div>
                        <div className="user_location">
                            <div className="user_area">
                                <span>City</span>
                                <input type="text" placeholder='city' />
                            </div>
                            <div className="user_area">
                                <span>Country</span>
                                <input type="text" placeholder='Country' />
                            </div>
                        </div>
                        <div className="user_quote">
                            <span>Quote</span>
                            <textarea name="" id="" placeholder='Quote' ></textarea>
                        </div>

                    </div>

                </div>

            }

        </div>
    )
}

export default Customers