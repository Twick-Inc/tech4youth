import React from 'react';

const popularTags = [
  "ICT Training", 
  "Cybersecurity", 
  "AI Workshop", 
  "Programming", 
  "Youth Empowerment", 
  "Digital Skills",
  "Innovation",
  "Tech Education"
];

const PopularTagsWidget = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md mb-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-youth-primary">
        Popular Tags
      </h3>
      <div className="flex flex-wrap gap-2">
        {popularTags.map((tag, index) => (
          <a 
            key={index}
            href="#"
            className="px-4 py-2 bg-gray-100 hover:bg-youth-primary hover:text-white text-gray-700 rounded-lg text-sm font-medium transition-all duration-300"
          >
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
};

export default PopularTagsWidget;

