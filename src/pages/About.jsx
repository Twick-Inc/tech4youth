import React from 'react';
import Navbar from '../components/CommonComponents/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              About YouthTech
            </h1>
            <p className="text-xl text-gray-600">
              Learn more about our mission and vision
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
