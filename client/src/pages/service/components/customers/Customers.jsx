import React, { useEffect, useRef, useState } from 'react'
import '../../style/Customers.scss'
import backImage from '../assets/house.jpg'
import avatar2 from '../assets/houseview.jpg'
import addIcon from '/icon/addImage.png'
import axios from 'axios';
import { baseUrl } from '../../../../utils/baseUrl'
import { useDispatch, useSelector } from 'react-redux'
import GetAllTestimonials from '../../../../hooks/GetAllTestimonials'
import { setTestimonials } from '../../../../redux/serviceSlice'

function Customers() {

    const { currentAuthUser } = useSelector(store => store.auth)
    const { testimonials } = useSelector(store => store.service)
    const [currentIndex, setCurrentIndex] = useState(1);
    const [apiMessage, setApiMessage] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const isAdmin = currentAuthUser?.role === 'admin'

    GetAllTestimonials()

    const goPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const goNext = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

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

        if (name === "quote") {
            const wordCount = value.trim().split(/\s+/).filter(Boolean).length;

            if (wordCount > 25) {
                setMessage("Only 25 words are allowed.");
                return;
            } else {
                setMessage("");
            }
        }

        setForm((prev) => ({ ...prev, [name]: value }));
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setForm((prev) => ({ ...prev, image: file }));
        }
    }

    const deleteHandler = async (deletId) => {
        try {
            const res = await axios.delete(`${baseUrl}/testimonials/delete/${deletId}`);
            if (res.data.success) {
                const updatedTestimonials = testimonials.filter(card => card._id !== deletId);
                dispatch(setTestimonials(updatedTestimonials));
                setApiMessage(res.data.message)
            }
        } catch (error) {
            console.error(error?.response?.data?.message || error.message);
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setApiMessage('');
            setMessage('');
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='customers'>
            <div className="customer_section">
                <div className="bacground_image_section">
                    <div className="image_section">
                        <img src={backImage} alt="" />
                    </div>
                    <div className="action_btn desktop_action">
                        <button onClick={() => goPrev()} >&larr;</button>
                        <button onClick={() => goNext()}>&rarr;</button>
                    </div>
                </div>
                <div className="customer_testimonial_section" style={{ color: 'white' }}>
                    <div className="cutomer_header">
                        <h1>Our Customers</h1>
                        {apiMessage && <small style={{ color: 'orange' }} >{apiMessage}</small>}

                    </div>
                    <div className="customer_testimonial_box">

                        {/* testimonial card 1 */}

                        <div className="testimonial_card">
                            {isAdmin && <span style={{ color: 'red' }} onClick={() => deleteHandler(testimonials[currentIndex]?._id)} >Delete</span>}
                            <div className="inverted_comma"> <h1>“</h1> </div>
                            <p className="customer-card__quote"> {testimonials[currentIndex]?.quote} </p>
                            <footer className="customer-card__footer">
                                <img className="customer-card__avatar" src={testimonials[currentIndex]?.image} alt="James Bennett" />
                                <div>
                                    <p className="customer-card__name">{testimonials[currentIndex]?.testimonial_name}</p>
                                    <p className="customer-card__location">{testimonials[currentIndex]?.city}, {testimonials[0]?.country}</p>
                                </div>
                            </footer>
                        </div>


                        {/* testimonial card 2 */}

                        <div className="testimonial_card TCPhoneview">
                            {isAdmin &&
                                <span style={{ color: 'red' }} onClick={() =>
                                    deleteHandler(testimonials[(currentIndex + 1) % testimonials.length]?._id)
                                }>
                                    Delete
                                </span>
                            }

                            <div className="inverted_comma"><h1>“</h1></div>
                            <p className="customer-card__quote">{testimonials[(currentIndex + 1) % testimonials.length]?.quote}</p>
                            <footer className="customer-card__footer">
                                <img className="customer-card__avatar"
                                    src={testimonials[(currentIndex + 1) % testimonials.length]?.image}
                                    alt="Customer"
                                />
                                <div>
                                    <p className="customer-card__name">{testimonials[(currentIndex + 1) % testimonials.length]?.testimonial_name}</p>
                                    <p className="customer-card__location">{testimonials[(currentIndex + 1) % testimonials.length]?.city}, {testimonials[(currentIndex + 1) % testimonials.length]?.country}</p>
                                </div>
                            </footer>
                        </div>


                        <div className="action_btn laptop_action">
                            <button onClick={() => goPrev()} >&larr;</button>
                            <button onClick={() => goNext()}>&rarr;</button>
                        </div>

                        {/* testimonial card 2 end */}

                        {isAdmin &&
                            <div className="testimonial_add_section" onClick={() => setDialogue(!dialogue)}>
                                <h3 style={{ color: 'white' }}>+</h3>
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
                            <small style={{ color: 'red' }}>{message}</small>
                            {/* {message && <small style={{ color: 'red' }}>{message}</small>} */}
                            {isAdmin &&
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
