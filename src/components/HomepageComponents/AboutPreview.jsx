import React from "react";
import { Check, Heart, DollarSign } from "lucide-react";
import mainDropImage from "../../assets/IMGL1149.JPG";
import smallDropImage from "../../assets/IMGL1144.JPG";

const AboutPreview = () => {
  const features = [
    "ICT Education Support",
    "Cybersecurity Advocacy",
    "AI Community Empowerment",
    "Digital Innovation Growth",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-teal-100 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-amber-100 rounded-full opacity-20 blur-2xl"></div>

      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Water Drop Images */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Main Image with normal shape */}
            <div className="relative z-10">
              <div className="w-[40rem] h-[42rem] relative overflow-hidden shadow-2xl rounded-2xl">
                <img
                  src={mainDropImage}
                  alt="Youth Tech Mission"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Small Bouncing Image */}
              <div
                className="absolute -bottom-4 -right-4"
                style={{
                  animation: "gentleBounce 4s ease-in-out infinite",
                }}
              >
                <div className="w-full h-36 relative overflow-hidden shadow-xl rounded-xl">
                  <img
                    src={smallDropImage}
                    alt="Youth Tech Impact"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>

              <style jsx>{`
                @keyframes gentleBounce {
                  0%,
                  100% {
                    transform: translateY(0px);
                  }
                  50% {
                    transform: translateY(-8px);
                  }
                }
              `}</style>

              {/* Decorative accent circle */}
              <div className="absolute top-10 -right-8 w-20 h-20 bg-teal-500 rounded-full opacity-30 blur-md"></div>
              <div className="absolute bottom-20 -left-6 w-16 h-16 bg-amber-400 rounded-full opacity-30 blur-md"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            {/* Subtitle */}
            <div className="flex items-center space-x-3">
              <span className="text-[#ffac00] text-sm font-bold uppercase tracking-wider">
                About Us Youth Tech
              </span>
              <div className="w-12 h-0.5 bg-[#ffac00]"></div>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Transforming Lives,{" "}
              <span className="text-teal-600">Through Technology</span>
            </h2>

            {/* Paragraph - Exactly 5 lines with 5th line half */}
            <p className="text-base text-gray-600 leading-relaxed">
              Youth Tech is dedicated to fostering technology understanding and
              innovation within Tanzania. We equip youth, children, and women
              with essential ICT skills including cybersecurity, software
              development, AI, and programming. Technology serves as a powerful
              catalyst for social and economic development, particularly in
              addressing urgent challenges like climate change. Our mission is
              to bridge the digital divide and create
            </p>

            {/* Call to Action Cards */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div className="flex items-center space-x-3 p-4 bg-teal-50 rounded-xl border-2 border-teal-100 hover:border-teal-300 transition-all duration-300 hover:shadow-lg cursor-pointer group">
                <div className="w-14 h-14 bg-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">Join Us,</p>
                  <p className="font-bold text-gray-800 text-sm">
                    Empower Change
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-amber-50 rounded-xl border-2 border-amber-100 hover:border-amber-300 transition-all duration-300 hover:shadow-lg cursor-pointer group">
                <div className="w-14 h-14 bg-[#ffac00] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">
                    Support Youth
                  </p>
                  <p className="font-bold text-gray-800 text-sm">
                    Through Technology
                  </p>
                </div>
              </div>
            </div>

            {/* Features List with Check Icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {/* Left Column */}
              <div className="space-y-3">
                {features.slice(0, 2).map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-7 h-7 bg-[#ffac00] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    </div>
                    <span className="text-gray-700 font-medium text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-3">
                {features.slice(2, 4).map((feature, index) => (
                  <div
                    key={index + 2}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-7 h-7 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    </div>
                    <span className="text-gray-700 font-medium text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* About More Button */}
            <button className="inline-flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl mt-4">
              <span>About More</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom decorative heart shape */}
      <div className="absolute bottom-10 right-20 opacity-10">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
          <path
            d="M50 85C50 85 15 60 15 35C15 20 25 10 35 10C42 10 47 15 50 20C53 15 58 10 65 10C75 10 85 20 85 35C85 60 50 85 50 85Z"
            fill="#0D9488"
          />
        </svg>
      </div>
    </section>
  );
};

export default AboutPreview;
