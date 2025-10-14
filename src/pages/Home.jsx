import React from 'react';
import Navbar from '../components/CommonComponents/Navbar';

const Home = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onNavigate={onNavigate} />
      <main>
        {/* Homepage content will be added here */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome to YouthTech
            </h1>
            <p className="text-xl text-gray-600">
              Empowering Tanzania Through Technology
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
