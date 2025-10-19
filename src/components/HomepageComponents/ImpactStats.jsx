import React, { useState } from "react";
import { X } from "lucide-react";
import impactImage from "../../assets/IMGL1149.JPG";
import playButtonIcon from "../../assets/play-button.png";

const ImpactStats = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  // Replace this with your actual YouTube video ID
  const youtubeVideoId = "dQw4w9WgXcQ"; // Sample video ID
  
  const stats = [
    { value: "500+", label: "Youth Trained", color: "text-youth-orange" },
    { value: "50+", label: "ICT Workshops", color: "text-white" },
    { value: "25+", label: "AI Projects", color: "text-white" },
    { value: "100+", label: "Cybersecurity Sessions", color: "text-youth-orange" }
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2 relative">
        {/* Left Side - Youth Primary Background with Stats */}
        <div className="bg-gradient-to-br from-youth-primary to-youth-primary-dark py-20 px-8 lg:px-16 relative flex items-center justify-center">
          {/* Decorative brush stroke */}
          <div className="absolute top-0 left-0 w-48 h-full">
            <svg width="200" height="100%" viewBox="0 0 200 800" fill="none" preserveAspectRatio="none">
              <path d="M0 0 Q 100 200, 50 400 T 0 800 L 0 0 Z" fill="#134E4A" opacity="0.5"/>
            </svg>
          </div>

          <div className="relative z-10 max-w-xl text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white text-left leading-tight mb-8">
              We Always Help The<br />
              Youth Learn Technology
            </h2>

            <p className="text-white/90 text-lg leading-relaxed text-left mb-12">
              Discover the inspiring stories of young people transformed by our technology programs. Our success stories highlight the real-life impact of ICT education in Tanzania.
            </p>

            {/* Stats Grid */}
            <div className="relative grid grid-cols-2 gap-8 justify-items-center text-left">
              {/* Vertical line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 transform -translate-x-1/2"></div>
              
              {/* Horizontal line */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white/20 transform -translate-y-1/2"></div>
              
              {stats.map((stat, index) => (
                <div key={index} className="text-center relative z-10">
                  <div className={`text-5xl font-bold mb-2 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-white/80 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative h-96 lg:h-auto">
          <img 
            src={impactImage} 
            alt="Youth Tech Impact" 
            className="w-full h-full object-cover grayscale"
          />

          {/* White brush stroke decoration */}
          <div className="absolute bottom-0 right-0 w-48 h-full pointer-events-none">
            <svg width="200" height="100%" viewBox="0 0 200 800" fill="none" preserveAspectRatio="none">
              <path d="M200 0 Q 100 200, 150 400 T 200 800 L 200 0 Z" fill="white" opacity="0.9"/>
            </svg>
          </div>
        </div>

        {/* Play Button - Centered between Left and Right */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
          <div className="relative w-20 h-20 group">
            {/* Animated Wave Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="absolute w-20 h-20 rounded-full border-2 border-white group-hover:border-youth-orange opacity-75 transition-colors duration-300"
                style={{ animation: "wave 2s ease-out infinite" }}
              ></div>
              <div 
                className="absolute w-20 h-20 rounded-full border-2 border-white group-hover:border-youth-orange opacity-75 transition-colors duration-300"
                style={{ animation: "wave 2s ease-out infinite 1s" }}
              ></div>
            </div>
            
            {/* Play Button */}
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="relative w-20 h-20 bg-white hover:bg-youth-orange rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-2xl"
            >
              <img 
                src={playButtonIcon} 
                alt="Play" 
                className="w-8 h-8 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
              />
            </button>
          </div>

          <style jsx>{`
            @keyframes wave {
              0% {
                transform: scale(1);
                opacity: 0.75;
              }
              100% {
                transform: scale(2);
                opacity: 0;
              }
            }
          `}</style>
        </div>

        {/* Video Modal */}
        {isVideoOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-0 z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <div className="relative w-full max-w-5xl">
              {/* Close Button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-youth-orange transition-colors duration-300"
              >
                <X className="w-10 h-10" />
              </button>

              {/* Video Container */}
              <div 
                className="relative w-full pb-[56.25%] bg-black rounded-lg overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                  title="Youth Tech Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImpactStats;
