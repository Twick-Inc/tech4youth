import React from "react";
import partnerLogo from "../../assets/Logo_ya_Wikimedia_Community_Kilimanjaro.png";

const PartnersSection = () => {
  const partners = [
    { name: "Wikimedia Community Kilimanjaro", logo: partnerLogo },
    { name: "Wikimedia Community Kilimanjaro", logo: partnerLogo },
    { name: "Wikimedia Community Kilimanjaro", logo: partnerLogo },
    { name: "Wikimedia Community Kilimanjaro", logo: partnerLogo },
    { name: "Wikimedia Community Kilimanjaro", logo: partnerLogo },
  ];

  return (
    <section className="bg-youth-primary py-16 relative">
      {/* Wavy top border */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-white">
        <svg
          className="absolute top-0 w-full h-8"
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48L60 44C120 40 240 32 360 28C480 24 600 24 720 28C840 32 960 40 1080 44C1200 48 1320 48 1380 48H1440V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V48Z"
            fill="#2f868f"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-center text-3xl md:text-4xl font-bold mb-4">
          Trusted by over <span className="text-youth-orange">90+</span> organizations and partners
        </h2>
        <p className="text-white/90 text-center mb-12 max-w-3xl mx-auto text-lg">
          Collaborating with schools, tech companies, and community organizations to empower Tanzanian youth with technology education
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center mt-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg flex items-center justify-center w-full h-24 hover:bg-white/20 transition-all duration-300 group"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain filter brightness-0 invert group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Wavy bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-white">
        <svg
          className="absolute bottom-0 w-full h-8"
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0L60 4C120 8 240 16 360 20C480 24 600 24 720 20C840 16 960 8 1080 4C1200 0 1320 0 1380 0H1440V48H1380C1320 48 1200 48 1080 48C960 48 840 48 720 48C600 48 480 48 360 48C240 48 120 48 60 48H0V0Z"
            fill="#2f868f"
          />
        </svg>
      </div>
    </section>
  );
};

export default PartnersSection;

