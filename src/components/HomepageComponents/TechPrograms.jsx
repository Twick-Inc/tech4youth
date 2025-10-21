import React from "react";
import { GraduationCap, Shield, Brain, Lightbulb, ArrowRight } from "lucide-react";
import aiImage from "../../assets/ai.png";
import innovationImage from "../../assets/innovation.png";
import hackerImage from "../../assets/hacker.png";
import telecommunicationImage from "../../assets/telecommunication.png";

const ProgramsSection = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "ICT Education Support",
      description: "Stay updated with the latest news, events, and impact stories from our organization. Subscribe to our newsletter.",
      link: "View Details",
      backgroundImage: telecommunicationImage
    },
    {
      icon: Shield,
      title: "Cybersecurity Advocacy",
      description: "Stay updated with the latest news, events, and impact stories from our organization. Subscribe to our newsletter.",
      link: "View Details",
      backgroundImage: hackerImage
    },
    {
      icon: Brain,
      title: "AI Community Empowerment",
      description: "Stay updated with the latest news, events, and impact stories from our organization. Subscribe to our newsletter.",
      link: "View Details",
      backgroundImage: aiImage
    },
    {
      icon: Lightbulb,
      title: "Digital Innovation Growth",
      description: "Stay updated with the latest news, events, and impact stories from our organization. Subscribe to our newsletter.",
      link: "View Details",
      backgroundImage: innovationImage
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative wave */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent"></div>
      
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-16 bg-youth-orange"></div>
              <span className="mx-4 text-youth-orange font-bold text-sm uppercase tracking-wider italic">
                Our Impact Areas
              </span>
              <div className="h-px w-16 bg-youth-orange"></div>
            </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Empowering Communities Through Technology          </h2>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-teal-300 transition-all duration-300 hover:shadow-xl group"
              >
                {/* Icon Circle */}
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    {/* Dotted circle border */}
                    <div className="w-24 h-24 rounded-full flex items-center justify-center relative">
                      {/* Rotating dots */}
                      <div 
                        className="absolute inset-0 group-hover:animate-spin"
                        style={{ animationDuration: '3s' }}
                      >
                        {[...Array(24)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-0.5 h-0.5 bg-teal-400 group-hover:bg-youth-orange rounded-full transition-colors duration-300"
                            style={{
                              top: '50%',
                              left: '50%',
                              transformOrigin: '0 0',
                              transform: `rotate(${i * 15}deg) translateX(36px) translateY(-1px)`
                            }}
                          />
                        ))}
                      </div>
                      {/* Inner content that doesn't rotate */}
                      <div className="w-16 h-16 rounded-full bg-teal-50 group-hover:bg-youth-orange flex items-center justify-center transition-colors duration-300 relative z-10">
                        <IconComponent className="w-8 h-8 text-teal-600 group-hover:text-white group-hover:scale-x-[-1] transition-all duration-500" strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-4 relative">
                  {/* Background object */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <img 
                        src={program.backgroundImage} 
                        alt={program.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 relative z-10">
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                    {program.description}
                  </p>

                  {/* View Details Link */}
                  <button className="inline-flex items-center space-x-2 text-gray-900 font-semibold text-sm hover:text-teal-600 transition-colors duration-300 group/link pt-2">
                    <span className="border-b-2 border-gray-900 group-hover/link:border-teal-600 transition-colors duration-300">
                      {program.link}
                    </span>
                    <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default ProgramsSection;