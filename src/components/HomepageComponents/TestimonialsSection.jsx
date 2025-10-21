import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Amina Hassan",
      role: "Software Developer Graduate",
      quote:
        "Youth Tech changed my life completely. I came from a background where technology seemed out of reach, but their free programs gave me the skills I needed. Now I'm working as a software developer at a tech company in Dar es Salaam. The mentors were patient, the curriculum was practical, and the support was unwavering. I'm forever grateful for this opportunity.",
    },
    {
      name: "Joseph Mwanga",
      role: "Cybersecurity Student",
      quote:
        "The cybersecurity training at Youth Tech opened my eyes to a whole new career path. The instructors are knowledgeable and passionate about what they do. I learned not just theory but practical skills that I use every day. Youth Tech doesn't just teach technology—they empower you to become a leader in the tech community. I highly recommend their programs to anyone interested in tech.",
    },
    {
      name: "Grace Kimaro",
      role: "AI Workshop Participant",
      quote:
        "As a young woman in Tanzania, I never thought I'd have access to AI and machine learning education. Youth Tech made it possible. Their workshops are well-structured, engaging, and completely free. The community they've built is supportive and inspiring. I've gained confidence in my abilities and now I'm pursuing a career in data science. Thank you, Youth Tech, for believing in us!",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative hand icon */}
      <div className="absolute top-32 left-12">
        <div className="relative">
          <div className="w-24 h-24 text-youth-orange">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M30 50 Q 20 30, 35 20 L 40 35 L 45 25 Q 48 18, 52 25 L 55 35 L 58 28 Q 60 20, 63 28 L 65 38 L 68 32 Q 70 25, 73 35 L 75 50 Q 78 65, 65 75 L 35 75 Q 22 65, 30 50 Z" />
            </svg>
          </div>
          <div className="absolute -top-2 -right-2 flex gap-1">
            <div className="w-2 h-2 bg-youth-primary rounded-full"></div>
            <div className="w-2 h-2 bg-youth-primary rounded-full"></div>
            <div className="w-2 h-2 bg-youth-primary rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Heart className="w-6 h-6 text-youth-primary fill-youth-primary" />
            <span className="text-youth-orange font-bold text-lg italic">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            What People Say About
            <br />
            Youth Tech
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-youth-orange/10 rounded-3xl p-12 relative">
            {/* Quote marks background */}
            <div className="absolute top-8 right-8 text-9xl text-gray-200 font-serif leading-none">
              "
            </div>

            <div className="relative z-10">
              <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-4xl">
                {testimonials[currentSlide].quote}
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-gray-600">{testimonials[currentSlide].role}</p>
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-youth-primary hover:border-youth-primary hover:text-white transition-all duration-300"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-youth-primary hover:border-youth-primary hover:text-white transition-all duration-300"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <span className="text-3xl font-bold text-youth-primary">
              {String(currentSlide + 1).padStart(2, "0")}
            </span>
            <div className="flex-1 max-w-xs">
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-youth-orange transition-all duration-300"
                  style={{
                    width: `${((currentSlide + 1) / testimonials.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
            <span className="text-lg text-gray-400">
              {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

