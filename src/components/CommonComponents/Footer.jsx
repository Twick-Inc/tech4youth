import React from "react";
import { Heart, Phone, Mail, Facebook, Twitter, Youtube, Linkedin, Send, ArrowRight } from "lucide-react";
import youthTechLogo from "../../assets/youth-tech-logo.png";

const Footer = () => {
  const quickLinks = [
    "About Us",
    "Our Programs",
    "ICT Education",
    "Privacy Policy",
    "Contact Us"
  ];

  const services = [
    "ICT Training",
    "Cybersecurity",
    "AI Programs",
    "Programming",
    "Digital Innovation"
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-teal-950 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20">
        <svg width="250" height="250" viewBox="0 0 250 250" fill="none">
          <path d="M0 100 Q 50 50, 100 100 T 200 100 L 200 250 L 0 250 Z" fill="#F59E0B"/>
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-48 h-48 opacity-20">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="50" r="30" fill="#F59E0B"/>
          <circle cx="150" cy="100" r="20" fill="#F59E0B"/>
          <circle cx="180" cy="150" r="25" fill="#F59E0B"/>
        </svg>
      </div>

      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-2">
                Stay Updated With Youth Tech
              </h3>
              <p className="text-gray-400">
                Get the latest news about our ICT programs and technology initiatives
              </p>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="flex-1 md:w-96 px-6 py-4 rounded-full bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="w-14 h-14 bg-amber-500 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
                <Send className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - About Youth Tech */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={youthTechLogo}
                alt="Youth Tech Logo"
                className="w-12 h-12 object-contain"
              />
              <div className="text-2xl font-bold">
                <span className="text-amber-500">Youth</span> Tech
              </div>
            </div>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              Empowering Tanzanian youth through ICT education, cybersecurity training, and AI programs. Join us in bridging the digital divide.
            </p>

            <button className="inline-flex items-center space-x-2 bg-teal-700 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              <Heart className="w-5 h-5" />
              <span>Support Our Mission</span>
            </button>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-500"></div>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 text-amber-500 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Our Programs */}
          <div>
            <h4 className="text-xl font-bold mb-6 relative">
              Our Programs
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-500"></div>
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 text-amber-500 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Us */}
          <div>
            <h4 className="text-xl font-bold mb-6 relative">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-500"></div>
            </h4>
            
            <div className="space-y-6">
              <div>
                <p className="text-gray-400 text-sm mb-2">Call us any time:</p>
                <a 
                  href="tel:+255764454097" 
                  className="text-white text-xl font-semibold hover:text-amber-500 transition-colors duration-300 flex items-center"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  +255 764 454 097
                </a>
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-2">Email us any time:</p>
                <a 
                  href="mailto:info@youthtech.or.tz" 
                  className="text-white text-xl font-semibold hover:text-amber-500 transition-colors duration-300 flex items-center"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  info@youthtech.or.tz
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-3 pt-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white/10 hover:bg-amber-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white/10 hover:bg-amber-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white/10 hover:bg-amber-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white/10 hover:bg-amber-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-400">
            © Copyright 2025 <span className="text-amber-500 font-semibold">Youth Tech</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
