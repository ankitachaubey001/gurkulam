import React from 'react';

export const WhyChooseUs = () => {
  const features = [
    { title: "Expert Faculty", description: "Learn from industry-leading AI professionals." },
    { title: "Hands-On Learning", description: "Work on real-world projects and case studies." },
    { title: "Global Recognition", description: "Receive certifications recognized by leading tech companies." },
    { title: "Flexible Learning", description: "Self-paced, online learning to fit your schedule." }
  ];

  return (
    <section className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
