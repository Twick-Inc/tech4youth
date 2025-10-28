import React from 'react';
import { Code, Monitor, Globe } from 'lucide-react';

const QuickProgramApplications = () => {
  const programs = [
    {
      icon: <Code size={32} />,
      title: "Coding Bootcamp",
      description: "12-week intensive web development training",
      buttonText: "Learn More",
      link: "#coding-bootcamp"
    },
    {
      icon: <Monitor size={32} />,
      title: "Digital Literacy",
      description: "Basic computer and internet skills",
      buttonText: "Learn More",
      link: "#digital-literacy"
    },
    {
      icon: <Globe size={32} />,
      title: "Wikipedia Project",
      description: "Contribute to global knowledge",
      buttonText: "Join Project",
      link: "#wikipedia-project"
    }
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Quick Program Applications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-8 text-center hover:shadow-xl transition duration-300"
            >
              <div className="bg-teal-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                {program.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {program.description}
              </p>
              <a 
                href={program.link}
                className="inline-block border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-semibold py-2 px-8 rounded-md transition duration-300"
              >
                {program.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickProgramApplications;