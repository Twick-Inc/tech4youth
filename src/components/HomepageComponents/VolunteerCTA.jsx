import React from "react";
import { ArrowRight } from "lucide-react";

const VolunteerCTA = () => {
  const cards = [
    {
      title: "Become a volunteer",
      description: "Provide resources such as reports, infographics, and educational materials related to the charity's cause. Use a clear and intuitive navigation menu to help users find information quickly.",
      buttonText: "Learn More",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop"
    },
    {
      title: "Join Us volunteer",
      description: "Provide resources such as reports, infographics, and educational materials related to the charity's cause. Use a clear and intuitive navigation menu to help users find information quickly.",
      buttonText: "Learn More",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden shadow-2xl group h-80"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-center items-center text-center px-8 py-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  {card.title}
                </h3>
                
                <p className="text-white/90 text-base leading-relaxed mb-8 max-w-lg">
                  {card.description}
                </p>

                {/* CTA Button */}
                <button className="inline-flex items-center space-x-2 bg-youth-orange hover:bg-youth-orange-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  <span>{card.buttonText}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteerCTA;