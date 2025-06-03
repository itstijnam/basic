import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const TestimonialList = () => {

  const {testimonials} = useSelector(store => store.service)
  console.log(testimonials)

  return (
    <div>
      {testimonials.map((t, idx) => (
        <div key={idx} style={{ marginBottom: 20, border: '1px solid #ccc', padding: 10, color: 'white' }}>
          {t.image && <img src={t.image} width="200" alt="Uploaded" />}
          <h3>{t.testimonial_name}</h3>
          <p>"{t.quote}"</p>
        </div>
      ))}
    </div>
  );
};

export default TestimonialList;
