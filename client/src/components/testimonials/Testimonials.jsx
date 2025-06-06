import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Testimonials.css";
import img1 from "./images.jpeg";
import img2 from "./images.jpeg";
import img3 from "./images.jpeg";

const testimonials = [
  {
    title: "Innovation Delivered",
    content: `AIS brought a unique blend of innovation and professionalism to our project...`,
    image: img1,
  },
  {
    title: "Excellent Support",
    content: `The team was always available and incredibly helpful. Their responsiveness made the process seamless.`,
    image: img2,
  },
  {
    title: "Reliable Partner",
    content: `Working with them was a great decision. Their dedication and quality were top-notch.`,
    image: img3,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonial-wrapper">
      <h1 className="section-heading">Testimonials</h1>
      <div className="swiper-wrapper-custom">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={30}
          slidesPerView={2.5}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 1.2,
            },
            1024: {
              slidesPerView: 2.5,
              centeredSlides: true,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="testimonial-avatar">
                  <img src={item.image} alt="client" />
                </div>
                <div className="testimonial-content">
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev custom-nav">←</div>
        <div className="swiper-button-next custom-nav">→</div>
      </div>
    </div>
  );
};

export default Testimonials;
