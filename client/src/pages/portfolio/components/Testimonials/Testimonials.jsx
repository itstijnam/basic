import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Testimonials.scss';

// HoverTestimonialForm Component
const HoverTestimonialForm = ({ testimonial, onFormSubmit }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    position: '',
    review: '',
    rating: 5
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (onFormSubmit) {
      onFormSubmit(formData);
    }
    // Reset form
    setFormData({ name: '', company: '', position: '', review: '', rating: 5 });
    setIsHovered(false);
  };

  const handleCancel = () => {
    setFormData({ name: '', company: '', position: '', review: '', rating: 5 });
    setIsHovered(false);
  };

  return (
    <div 
      className="hover-testimonial-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        display: 'block',
        width: '100%'
      }}
    >
      {/* Original Testimonial Card */}
      <div className="testimonial-card">
        <div className="image-wrapper">
          <div className="image-container">
            <img src={testimonial.image} alt={testimonial.name} />
          </div>
        </div>
        <div className="text-content">
          <h3>{testimonial.name}</h3>
          <p>{testimonial.review}</p>
        </div>
      </div>

      {/* Hover Form */}
      {isHovered && (
        <div 
          className="add_testimonial_form"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            height: '420px',
            width: '600px',
            borderRadius: '15px',
            backdropFilter: 'blur(12px)',
            backgroundColor: 'rgba(40, 40, 40, 0.95)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            padding: '20px',
            zIndex: 1000,
            border: '2px solid #4CAF50',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
            animation: 'fadeInScale 0.3s ease-out'
          }}
        >
          {/* Add Image Section */}
          <div 
            className="add_testimonial_image"
            style={{
              cursor: 'pointer',
              boxShadow: '0px 0px 15px rgba(76, 175, 80, 0.3)',
              height: '100%',
              width: '45%',
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '15px',
              overflow: 'hidden',
              backgroundColor: 'rgba(76, 175, 80, 0.1)',
              border: '2px dashed #4CAF50',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0px 0px 25px rgba(76, 175, 80, 0.6)';
              e.currentTarget.style.backgroundColor = 'rgba(76, 175, 80, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0px 0px 15px rgba(76, 175, 80, 0.3)';
              e.currentTarget.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
            }}
          >
            <div style={{ textAlign: 'center', color: '#4CAF50' }}>
              <div style={{
                fontSize: '48px',
                marginBottom: '15px',
                lineHeight: '1',
                fontWeight: 'bold'
              }}>
                📷
              </div>
              <div style={{
                fontSize: '18px',
                fontWeight: 'bold'
              }}>
                Add Photo
              </div>
              <div style={{
                fontSize: '14px',
                marginTop: '8px',
                opacity: 0.8
              }}>
                Upload testimonial image
              </div>
            </div>
          </div>

          {/* Form Details Section */}
          <div 
            className="add_testimonial_details"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              width: '50%',
              padding: '0 15px'
            }}
          >
            {/* Name Field */}
            <div className="form-field" style={{ marginBottom: '10px' }}>
              <label style={{ 
                color: 'white', 
                marginBottom: '4px', 
                fontSize: '14px', 
                fontWeight: '500',
                display: 'block'
              }}>
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter full name"
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid #555',
                  fontSize: '14px',
                  backgroundColor: 'white',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#4CAF50'}
                onBlur={(e) => e.target.style.borderColor = '#555'}
              />
            </div>

            {/* Company and Position Fields */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
              <div className="form-field" style={{ flex: 1 }}>
                <label style={{ 
                  color: 'white', 
                  marginBottom: '4px', 
                  fontSize: '14px', 
                  fontWeight: '500',
                  display: 'block'
                }}>
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company name"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #555',
                    fontSize: '14px',
                    backgroundColor: 'white',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#4CAF50'}
                  onBlur={(e) => e.target.style.borderColor = '#555'}
                />
              </div>
              <div className="form-field" style={{ flex: 1 }}>
                <label style={{ 
                  color: 'white', 
                  marginBottom: '4px', 
                  fontSize: '14px', 
                  fontWeight: '500',
                  display: 'block'
                }}>
                  Position
                </label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  placeholder="Job title"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #555',
                    fontSize: '14px',
                    backgroundColor: 'white',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#4CAF50'}
                  onBlur={(e) => e.target.style.borderColor = '#555'}
                />
              </div>
            </div>

            {/* Rating Field */}
            <div className="form-field" style={{ marginBottom: '10px' }}>
              <label style={{ 
                color: 'white', 
                marginBottom: '4px', 
                fontSize: '14px', 
                fontWeight: '500',
                display: 'block'
              }}>
                Rating
              </label>
              <select
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid #555',
                  fontSize: '14px',
                  backgroundColor: 'white',
                  cursor: 'pointer'
                }}
              >
                <option value={5}>⭐⭐⭐⭐⭐ (5 stars)</option>
                <option value={4}>⭐⭐⭐⭐ (4 stars)</option>
                <option value={3}>⭐⭐⭐ (3 stars)</option>
                <option value={2}>⭐⭐ (2 stars)</option>
                <option value={1}>⭐ (1 star)</option>
              </select>
            </div>

            {/* Review Field */}
            <div className="form-field" style={{ marginBottom: '15px', flex: 1 }}>
              <label style={{ 
                color: 'white', 
                marginBottom: '4px', 
                fontSize: '14px', 
                fontWeight: '500',
                display: 'block'
              }}>
                Testimonial Review *
              </label>
              <textarea
                name="review"
                value={formData.review}
                onChange={handleInputChange}
                placeholder="Share your experience and feedback..."
                rows="3"
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '80px',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid #555',
                  fontSize: '14px',
                  backgroundColor: 'white',
                  resize: 'none',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#4CAF50'}
                onBlur={(e) => e.target.style.borderColor = '#555'}
              />
            </div>

            {/* Action Buttons */}
            <div className="form_action_btn" style={{ 
              display: 'flex', 
              gap: '12px', 
              justifyContent: 'flex-end' 
            }}>
              <button
                type="button"
                onClick={handleCancel}
                className="action_cancel"
                style={{
                  cursor: 'pointer',
                  width: '90px',
                  height: '38px',
                  color: 'white',
                  fontSize: '15px',
                  fontWeight: '500',
                  border: '2px solid #f44336',
                  borderRadius: '6px',
                  backgroundColor: '#f44336',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 8px rgba(244, 67, 54, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#d32f2f';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#f44336';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="action_add"
                style={{
                  cursor: 'pointer',
                  width: '90px',
                  height: '38px',
                  color: 'white',
                  fontSize: '15px',
                  fontWeight: '500',
                  border: '2px solid #4CAF50',
                  borderRadius: '6px',
                  backgroundColor: '#4CAF50',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 8px rgba(76, 175, 80, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#45a049';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#4CAF50';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add fade in animation styles */}
      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

const testimonialsData = [
  {
    image: '/images/Graphic_Elements_11_.png',
    name: 'Innovation Delivered',
    review: `AIS brought a unique blend of innovation and professionalism to our project. They understood our vision and delivered beyond expectations. Their work is both modern and practical. Their team's responsiveness and dedication throughout the project was exceptional. We highly recommend their services for any organization seeking quality design work.`,
  },
  {
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    name: 'Exceptional Service',
    review: `Working with this team was an absolute pleasure. They transformed our space into something truly remarkable. The attention to detail and creative solutions they provided exceeded all our expectations. Professional, reliable, and innovative approach to every challenge.`,
  },
  {
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    name: 'Outstanding Results',
    review: `The quality of work delivered was outstanding. From concept to completion, every aspect was handled with precision and care. The team's expertise in modern design trends really showed in the final result. Highly recommended for premium projects.`,
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    name: 'Professional Excellence',
    review: `A truly professional experience from start to finish. The design solutions were innovative and practical, perfectly balancing aesthetics with functionality. Their commitment to quality is unmatched in the industry.`,
  },
  {
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    name: 'Creative Vision',
    review: `Their creative vision and technical expertise brought our ideas to life in ways we never imagined. The collaborative approach and attention to our specific needs made all the difference. Truly exceptional work.`,
  }
];

const Testimonials = () => {
  // Handle form submission from HoverTestimonialForm
  const handleTestimonialSubmit = (formData) => {
    console.log('Testimonial form submitted:', formData);
    // Add your form submission logic here
    // You could add the new testimonial to your state or send it to an API
  };

  return (
    <div className="testimonials">
      <div className="container">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ 
            delay: 4000,
            disableOnInteraction: false 
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true 
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          loop={true}
          speed={1000}
          effect="slide"
          spaceBetween={50}
          className="mySwiper"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <HoverTestimonialForm
                testimonial={testimonial}
                onFormSubmit={handleTestimonialSubmit}
              />
            </SwiperSlide>
          ))}
          
          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;