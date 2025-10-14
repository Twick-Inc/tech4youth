import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section bg-youth-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="hero-title text-4xl md:text-6xl font-bold mb-6">
          Empowering Tanzania Through Technology
        </h1>
        <p className="hero-subtitle text-xl md:text-2xl mb-8 opacity-90">
          Join us in fostering comprehensive understanding of technology and innovation 
          within the Tanzanian community
        </p>
        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-youth-orange hover:bg-youth-orange-dark text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Get Started
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-youth-primary px-8 py-3 rounded-full font-semibold transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
