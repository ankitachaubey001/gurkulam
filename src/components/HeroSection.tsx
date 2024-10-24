import React from 'react';

export const HeroSection = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Empowering the Future of <span className="highlight">AI</span>
        </h1>
        <p className="hero-subtitle">
          Learn from the best in the industry
        </p>
        <button className="cta-hero">Get Started</button>
      </div>
    </section>
  );
};
