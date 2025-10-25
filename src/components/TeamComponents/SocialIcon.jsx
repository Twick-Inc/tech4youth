import React from 'react';

const SocialIcon = ({ icon: Icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white hover:bg-youth-primary flex items-center justify-center text-gray-700 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
    >
      <Icon size={18} />
    </a>
  );
};

export default SocialIcon;

