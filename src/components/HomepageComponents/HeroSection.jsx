import React, { useState, useEffect } from "react";
import bg01 from "../../assets/bg-01.jpg";
import bg02 from "../../assets/bg-02.jpg";
import bg03 from "../../assets/bg-03.jpg";
import bg04 from "../../assets/bg-04.jpg";
import bg05 from "../../assets/bg-05.jpg";
import bg06 from "../../assets/bg-06.jpg";
import bg07 from "../../assets/bg-07.jpg";
import bg08 from "../../assets/bg-08.jpg";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Local background images from assets
  const images = [
    {
      src: bg07,
      alt: "Innovation Hub",
      title: "Innovation Hub",
      subtitle: "Where ideas come to life and technology meets creativity",
    },
    {
      src: bg01,
      alt: "Technology Innovation",
      title: "Empowering Tanzania Through Technology",
      subtitle:
        "Join us in fostering comprehensive understanding of technology and innovation within the Tanzanian community",
    },
    {
      src: bg02,
      alt: "Youth Learning",
      title: "Building Tomorrow's Leaders",
      subtitle:
        "Empowering young minds with cutting-edge technology skills and innovative thinking",
    },
    {
      src: bg03,
      alt: "Digital Transformation",
      title: "Digital Transformation for All",
      subtitle:
        "Bridging the digital divide and creating opportunities for everyone in Tanzania",
    },
    {
      src: bg04,
      alt: "Community Impact",
      title: "Making a Difference Together",
      subtitle:
        "Building stronger communities through technology education and innovation",
    },
    {
      src: bg05,
      alt: "Future Technology",
      title: "Shaping the Future",
      subtitle: "Preparing the next generation for the digital world ahead",
    },
    {
      src: bg06,
      alt: "Learning and Growth",
      title: "Continuous Learning",
      subtitle:
        "Creating opportunities for lifelong learning and professional development",
    },
    {
      src: bg08,
      alt: "Youth Empowerment",
      title: "Empowering Youth",
      subtitle:
        "Giving young people the tools and knowledge to succeed in the digital age",
    },
  ];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images with Zoom Effect */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentImageIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
              }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat transform transition-transform duration-1000 ease-in-out hover:scale-105"
              style={{ backgroundImage: `url(${image.src})` }}
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4">
        {/* Text Content Above */}
        <div className="text-center text-white mb-8 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            {images[currentImageIndex].title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 leading-relaxed">
            {images[currentImageIndex].subtitle}
          </p>
        </div>

        {/* Action Buttons Below */}
        <div className="flex items-center gap-6">
          {/* Our Programs Button */}
          <button
            onClick={() => (window.location.href = "/programs")}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full transition-all duration-300 font-semibold text-lg hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Our Programs
          </button>

          {/* Wikipedia Project Button */}
          <button
            onClick={() => (window.location.href = "/wikipedia-project")}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm border border-white border-opacity-30 hover:scale-105 font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            Wikipedia Project
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                  ? "bg-white"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
