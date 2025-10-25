import React from 'react';

const categories = [
  { name: "ICT Education", count: 12 },
  { name: "Cybersecurity", count: 8 },
  { name: "AI & Innovation", count: 6 },
  { name: "Programming", count: 10 },
  { name: "Digital Literacy", count: 5 },
  { name: "Success Stories", count: 15 },
];

const CategoriesWidget = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md mb-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-youth-primary">
        Categories
      </h3>
      <ul className="space-y-3">
        {categories.map((category, index) => (
          <li key={index}>
            <a 
              href="#" 
              className="flex items-center justify-between text-gray-700 hover:text-youth-primary hover:translate-x-2 transition-all duration-300"
            >
              <span>{category.name}</span>
              <span className="text-gray-400">({category.count})</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesWidget;

