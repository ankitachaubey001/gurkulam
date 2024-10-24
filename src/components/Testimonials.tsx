import React from 'react';

export const Testimonials = () => {
  const testimonials = [
    { name: "Jane Doe", feedback: "Great learning experience!" },
    { name: "John Smith", feedback: "Amazing instructors!" },
    { name: "Sam Green", feedback: "Highly recommend this institute." },
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <h2>What Our Students Say</h2>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p>"{testimonial.feedback}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};
