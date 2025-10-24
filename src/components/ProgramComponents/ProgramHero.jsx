import { useState, useEffect } from 'react';

export default function ProgramHero({ onApplyClick }) {
  const [currentImage, setCurrentImage] = useState(0);

  const carouselImages = [
    'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToPrograms = () => {
    const programsSection = document.getElementById('programs-section');
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: currentImage === index ? 1 : 0,
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/85 to-gray-900/85"></div>
        </div>
      ))}

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-block bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
          Empowering Through Education
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Our Technology <span className="text-amber-400">Programs</span>
        </h1>
        <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover comprehensive ICT training programs designed to equip Tanzanian youth with cutting-edge technology skills for the digital future
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToPrograms}
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Browse All Programs
          </button>
          <button
            onClick={onApplyClick}
            className="bg-amber-500 hover:bg-amber-400 text-white px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Apply Now
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentImage === index ? 'bg-amber-500 w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
