import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroImage from '../../assets/Picha.JPG';

const TeamHeroSection = () => {
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-youth-primary to-teal-600">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          opacity: 0.3
        }}
      ></div>
      <div className="relative h-full flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold mb-4">Our Team</h1>
        <div className="flex items-center gap-2 text-sm">
          <span className="hover:text-youth-orange cursor-pointer transition-colors">Home</span>
          <ArrowRight className="w-4 h-4" />
          <span>Team</span>
        </div>
      </div>
    </div>
  );
};

export default TeamHeroSection;

