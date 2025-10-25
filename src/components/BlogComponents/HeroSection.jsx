import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-youth-primary to-teal-600 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80')",
          opacity: 0.3
        }}
      ></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Tech Insights & Updates</h1>
        <div className="flex items-center justify-center gap-2 text-sm">
          <span className="text-youth-orange hover:underline cursor-pointer">Home</span>
          <ArrowRight className="w-4 h-4" />
          <span>Blog</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;



