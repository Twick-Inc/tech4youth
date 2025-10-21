import React from "react";
import { ArrowRight } from "lucide-react";
import handshakeImage from "../../assets/handshake.png";

const SupportBanner = () => {
  return (
    <section className="relative bg-gradient-to-br from-youth-primary to-youth-primary/85 py-32 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64">
        <div className="absolute top-0 left-0 w-48 h-48 bg-orange-500 rounded-full opacity-80"></div>
      </div>
      
      {/* Hand-drawn yellow decorative lines */}
      <div className="absolute left-48 top-1/2 transform -translate-y-1/2">
        <svg width="200" height="100" viewBox="0 0 200 100" fill="none">
          <path d="M10 50 Q 50 20, 100 50 T 190 50" stroke="#F59E0B" strokeWidth="3" fill="none" strokeLinecap="round"/>
        </svg>
      </div>
      
      <div className="absolute right-48 top-1/2 transform -translate-y-1/2">
        <svg width="200" height="100" viewBox="0 0 200 100" fill="none">
          <path d="M10 50 Q 50 80, 100 50 T 190 50" stroke="#F59E0B" strokeWidth="3" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Yellow dots cluster top right */}
      <div className="absolute top-20 right-32 flex flex-wrap gap-2 w-32">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-3 h-3 bg-amber-400 rounded-full"></div>
        ))}
      </div>

      {/* Yellow heart top right */}
      <div className="absolute top-48 right-20">
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
          <path d="M50 85C50 85 15 60 15 35C15 20 25 10 35 10C42 10 47 15 50 20C53 15 58 10 65 10C75 10 85 20 85 35C85 60 50 85 50 85Z" fill="#F59E0B" />
        </svg>
      </div>

      {/* Teal wave decoration top right */}
      <div className="absolute top-32 right-0">
        <svg width="200" height="150" viewBox="0 0 200 150" fill="none">
          <path d="M200 0 Q 150 75, 200 150 L 200 0 Z" fill="#0D9488" opacity="0.3"/>
        </svg>
      </div>

      {/* Handshake images */}
      <div className="absolute bottom-0 left-0 w-80 h-64">
        <img 
          src={handshakeImage} 
          alt="Technology Collaboration" 
          className="w-full h-full object-contain object-bottom"
        />
      </div>

      <div className="absolute bottom-0 right-0 w-80 h-64">
        <img 
          src={handshakeImage} 
          alt="Youth Tech Partnership" 
          className="w-full h-full object-contain object-bottom"
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-12 max-w-4xl mx-auto">
          Our Doors Are Always Open To<br />
          More People Who Want To<br />
          Learn Technology Together!
        </h2>

        <button className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
          <span>Join Our Tech Community</span>
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default SupportBanner;
