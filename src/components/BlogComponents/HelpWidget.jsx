import React from 'react';
import { ArrowRight } from 'lucide-react';
import youthTechLogo from '../../assets/youth-tech-logo.png';

const HelpWidget = () => {
  return (
    <div className="bg-gradient-to-br from-youth-primary to-teal-600 rounded-2xl p-8 shadow-lg text-white text-center">
      <h3 className="text-2xl font-bold mb-2">Need Help? We're Here For You</h3>
      <div className="my-6">
        <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
          <img src={youthTechLogo} alt="Youth Tech" className="w-12 h-12 object-contain" />
        </div>
        <p className="text-sm mb-2">Get Support Online</p>
        <a href="tel:+255764454097" className="text-2xl font-bold hover:underline">
          +255 764 454 097
        </a>
      </div>
      <button className="bg-youth-orange hover:bg-youth-orange-dark text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto transition-all duration-300">
        Contact Us
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default HelpWidget;

