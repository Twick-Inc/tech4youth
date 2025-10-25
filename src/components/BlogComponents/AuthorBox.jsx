import React from 'react';
import youthTechLogo from '../../assets/youth-tech-logo.png';

const AuthorBox = ({ author }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md flex flex-col items-center text-center my-8">
      <div className="w-24 h-24 bg-youth-primary rounded-full flex items-center justify-center mb-4 overflow-hidden">
        <img 
          src={youthTechLogo} 
          alt="Youth Tech" 
          className="w-20 h-20 object-contain"
        />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{author || 'Youth Tech Team'}</h3>
      <p className="text-gray-600 max-w-md">
        The Youth Tech editorial team is dedicated to sharing insights, success stories, and updates about technology education in Tanzania. Our mission is to inspire and inform our community about the transformative power of ICT.
      </p>
    </div>
  );
};

export default AuthorBox;

