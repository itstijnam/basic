// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import '../style/Testimonials.scss';
// import { useSelector } from 'react-redux'
// import GetAllTestimonials from '../../../hooks/GetAllTestimonials';

// // HoverTestimonialForm Component
// const HoverTestimonialForm = ({ testimonial }) => {

//   return (
//     <div
//       className="hover-testimonial-container"
//       style={{
//         position: 'relative',
//         display: 'block',
//         width: '100%'
//       }}
//     >
//       {/* Original Testimonial Card */}
//       <div className="testimonial-card">
//         <div className="image-wrapper">
//           <div className="image-container">
//             <img src={testimonial?.image} alt={testimonial?.testimonial_name} />
//           </div>
//         </div>
//         <div className="text-content">
//           <h3>{testimonial?.testimonial_name}</h3>
//           <p>{testimonial?.quote}</p>
//         </div>
//       </div>

//       {/* Add fade in animation styles */}
//       <style jsx>{`
//         @keyframes fadeInScale {
//           from {
//             opacity: 0;
//             transform: translate(-50%, -50%) scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: translate(-50%, -50%) scale(1);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// const Testimonials = () => {

//   const { testimonials } = useSelector(store => store.service)
//   GetAllTestimonials()

//   return (
//     <div className="testimonials">
//       <div className="container">
//         <Swiper
//           modules={[Autoplay, Pagination, Navigation]}
//           autoplay={{
//             delay: 4000,
//             disableOnInteraction: false
//           }}
//           pagination={{
//             clickable: true,
//             dynamicBullets: true
//           }}
//           navigation={{
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//           }}
//           loop={true}
//           speed={1000}
//           effect="slide"
//           spaceBetween={50}
//           className="mySwiper"
//         >
//           {testimonials?.map((testimonial, index) => (
//             <SwiperSlide key={index}>
//               <HoverTestimonialForm
//                 testimonial={testimonial}
//               />
//             </SwiperSlide>
//           ))}

//           {/* Custom Navigation Buttons */}
//           <div className="swiper-button-prev"></div>
//           <div className="swiper-button-next"></div>
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;