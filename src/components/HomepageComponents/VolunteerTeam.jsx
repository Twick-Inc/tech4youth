import React from "react";

const VolunteerTeam = () => {
  const volunteers = [
    { name: "Joseph Alexander", role: "ICT Trainer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop" },
    { name: "Jessica Lauren", role: "Cybersecurity Expert", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop" },
    { name: "Daniel Thomas", role: "AI Specialist", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop" },
    { name: "Michel Connor", role: "Programming Mentor", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop" }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-16 bg-amber-500"></div>
            <span className="mx-4 text-amber-600 font-bold text-sm uppercase tracking-wider italic">
              Our Tech Team
            </span>
            <div className="h-px w-16 bg-amber-500"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Meet Our Technology Experts
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {volunteers.map((volunteer, index) => (
            <div key={index} className="relative group">
              <div 
                className="relative overflow-hidden rounded-t-full bg-gradient-to-b from-gray-200 to-gray-300 pt-8 pb-12 px-8"
                style={{ borderRadius: "50% 50% 20px 20px" }}
              >
                <img 
                  src={volunteer.image} 
                  alt={volunteer.name}
                  className="w-full h-80 object-cover rounded-t-full grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Plus Button */}
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-teal-700 hover:bg-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-light transition-all duration-300 shadow-lg">
                  +
                </button>
              </div>

              {/* Name and Role */}
              <div className="text-center mt-6">
                <h3 className="text-xl font-bold text-gray-900">{volunteer.name}</h3>
                <p className="text-gray-500 mt-1">{volunteer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-teal-800 to-transparent"></div>
    </section>
  );
};

export default VolunteerTeam;
