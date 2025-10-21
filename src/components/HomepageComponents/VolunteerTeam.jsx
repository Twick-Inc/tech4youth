import React from "react";
import abubakariImage from "../../assets/team/Abubakari.jpg";
import justineImage from "../../assets/team/Justine.jpg";
import yvonneImage from "../../assets/team/Yvonne.jpg";

const VolunteerTeam = () => {
  const volunteers = [
    { name: "Abubakari Sixbeth", role: "Founder & Executive Director", image: abubakariImage },
    { name: "Justine Mahenge", role: "Co-Founder & Technical Lead", image: justineImage },
    { name: "Yvonne Mlowe", role: "Program Coordinator", image: yvonneImage }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-16 bg-youth-orange"></div>
            <span className="mx-4 text-youth-orange font-bold text-sm uppercase tracking-wider italic">
              Leadership Team
            </span>
            <div className="h-px w-16 bg-youth-orange"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Meet Our Leadership Team
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-youth-primary hover:bg-youth-primary-dark rounded-full flex items-center justify-center text-white text-2xl font-light transition-all duration-300 shadow-lg">
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
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-youth-primary-dark to-transparent"></div>
    </section>
  );
};

export default VolunteerTeam;
