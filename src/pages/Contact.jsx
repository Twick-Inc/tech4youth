import React from 'react';
import Navbar from '../components/CommonComponents/Navbar';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">
              Get in touch with YouthTech
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
