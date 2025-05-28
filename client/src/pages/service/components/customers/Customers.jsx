import React, { useRef, useState } from 'react'
import '../../style/Customers.scss'
import backImage from '../assets/house.jpg'
import avatar2 from '../assets/houseview.jpg'
import addIcon from '/icon/addImage.png'
import axios from 'axios';
import { baseUrl } from '../../../../utils/baseUrl'
import { useSelector } from 'react-redux'

function Customers() {

    const { currentAuthUser } = useSelector(store => store.auth)

    const isAdmin = currentAuthUser?.role === 'admin'
    console.log(isAdmin)


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
        },
        {
            quote: 'Exceptional service! From the initial consultation to the final reveal, your team demonstrated professionalism & a keen eye for design. Highly recommend!',
            profile_pic: avatar2,
            name: 'Robert',
            city: 'New York',
            country: 'America'
        }
    ]

    const [form, setForm] = useState({
        name: '',
        image: null,
        city: '',
        country: '',
        quote: ''
    })
    const [dialogue, setDialogue] = useState(false)

    const ref = useRef();

    const cancelHandler = () => {
        setDialogue(false);
        setForm({ name: '', image: null, city: '', country: '', quote: '' })
    }

    const submitHandler = async () => {
        try {
            const formData = new FormData();
            formData.append('name', form.name);
            formData.append('city', form.city);
            formData.append('country', form.country);
            formData.append('quote', form.quote);
            if (form.image) {
                formData.append('image', form.image);
            }

            const res = await axios.post(
                `${baseUrl}/testimonials/create`,
                formData,
                {
                    headers: { 'Content-Type': 'multipart/form-data' },
                    withCredentials: true
                }
            )

            if (res.data.success) {
                console.log(res.data.message);
                cancelHandler();
            }
        } catch (error) {
            console.error(error?.response?.data?.message || error.message)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setForm((prev) => ({ ...prev, image: file }));
        }
    }

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

                        {/* testimonial card 2 end */}

                        {isAdmin &&
                            <div className="testimonial_add_section" onClick={() => setDialogue(!dialogue)}>
                                <h3>+</h3>
                            </div>
                        }


                    </div>
                </div>
            </div>

            {/* dialogue start */}


            {dialogue && isAdmin &&
                <div className='testimonial_add'>
                    <div className="profileImage" onClick={() => ref.current.click()} >
                        {form.image ? <img src={URL.createObjectURL(form.image)} alt="Preview" /> : <img src={addIcon} alt="Add" />}
                        <input
                            id="fileInput"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                            ref={ref}
                        />
                    </div>

                    <div className="userbox">
                        <div className="user_details">
                            <span>Name</span>
                            <input
                                type="text"
                                name="name"
                                placeholder='Name'
                                value={form.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="user_location">
                            <div className="user_area">
                                <span>City</span>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder='City'
                                    value={form.city}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="user_area">
                                <span>Country</span>
                                <input
                                    type="text"
                                    name="country"
                                    placeholder='Country'
                                    value={form.country}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="user_quote">
                            <span>Quote</span>
                            <textarea
                                name="quote"
                                placeholder='Quote'
                                value={form.quote}
                                onChange={handleChange}
                            />
                            {isAdmin &
                                <div className="testimonial_action_btn">
                                    <button onClick={cancelHandler}>Cancel</button>
                                    <button onClick={submitHandler}>Add</button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }


            {/* dialogue end */}

        </div>
    )
}

export default Customers
