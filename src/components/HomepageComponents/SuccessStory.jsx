import React from "react";
import { ArrowRight } from "lucide-react";
import quoteIcon from "../../assets/quote.png";
import mainImage from "../../assets/IMGL1144.JPG";

const SuccessStory = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center space-x-3">
              <span className="text-amber-600 font-bold text-lg italic">
                Success Story
              </span>
              <div className="w-16 h-0.5 bg-amber-600"></div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              We Help Tanzanian <br /> Youth Access The Technology Tools,
              Training.{" "}
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              YouthTech is dedicated to empowering the Tanzanian community
              through ICT education. We provide essential resources, organize
              training workshops, and establish mentorship programs to bridge
              the digital divide.
            </p>

            <button className="inline-flex items-center space-x-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
              <span>Our Success Story</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Middle Column - Years of Experience */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center space-y-4">
            <div 
              className="text-xs font-medium tracking-wider whitespace-nowrap"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                letterSpacing: "0.1em"
              }}
            >
              <div className="text-youth-orange text-lg">Years of</div>
              <div className="text-[#797e88] text-2xl">Experience</div>
            </div>
            <div className="text-9xl font-bold text-[#797e88] leading-none">5</div>
          </div>

          {/* Right Side - Image and Quote */}
          <div className="lg:col-span-6 relative">

            {/* Main Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={mainImage}
                alt="Youth Tech Success"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Quote Card */}
            <div
              className="absolute -bottom-8 left-8 w-80 h-64 bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-center"
              style={{
                animation: "slideRightLeft 8s ease-in-out infinite",
              }}
            >
              <div className="flex items-start space-x-2 mb-4">
                <img 
                  src={quoteIcon} 
                  alt="Quote" 
                  className="w-4 h-4 object-contain flex-shrink-0 mt-0.5"
                />
                <p className="text-gray-600 text-sm leading-relaxed">
                  YouthTech empowers our community through technology education,
                  helping young people gain skills in coding, cybersecurity, and
                  AI.{" "}
                </p>
              </div>
              <p className="font-bold text-gray-900 text-sm">
                Abubakar Sixbeth, Leader
              </p>
            </div>

            <style jsx>{`
              @keyframes slideRightLeft {
                0%,
                100% {
                  transform: translateX(0px);
                }
                50% {
                  transform: translateX(60px);
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
