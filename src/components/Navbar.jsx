import React, { useState, useEffect } from "react";
import {
  Search,
  Menu,
  X,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Instagram,
} from "lucide-react";
import youthTechLogo from "../assets/youth-tech-logo.png";

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top White Header - Contact info hidden on scroll */}
      <div className="bg-white transition-all duration-500">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            {/* Logo - Always visible */}
            <div className="flex items-center -ml-52">
              <img 
                src={youthTechLogo} 
                alt="Youth Tech Logo" 
                className="w-20 h-20 object-contain"
              />
              <hr className="w-0.5 h-16 mx-4" style={{backgroundColor: '#f3f4f6'}} />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-800">Youth Tech</span>
                <span className="text-sm text-gray-600">let's talk technology</span>
              </div>
            </div>

            {/* Contact Info - Hidden on scroll */}
            <div className={`hidden lg:flex items-center gap-12 text-base transition-all duration-500 ${
              scrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100 h-auto"
            }`}>
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm mb-1">Visit Us:</span>
                <span className="font-semibold text-gray-800 text-lg">
                  Kilimanjaro Region, Tanzania
                </span>
              </div>
              <hr className="w-0.5 h-16" style={{backgroundColor: '#f3f4f6'}} />
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm mb-1 font-medium">Talk to Us:</span>
                <span className="font-semibold text-gray-800 text-lg">
                  +255 764 454 097
                </span>
              </div>
              <hr className="w-0.5 h-16" style={{backgroundColor: '#f3f4f6'}} />
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm mb-1 font-medium">Write to Us:</span>
                <span className="font-semibold text-gray-800 text-lg">
                  info@youthtech.or.tz
                </span>
              </div>
            </div>

            {/* Social Media Icons - Always visible */}
            <div className="flex gap-3 -mr-52">
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md bg-white/10 border border-white/20 hover:bg-blue-500/80 hover:border-blue-400/50 shadow-lg hover:shadow-xl text-gray-800"
                style={{color: 'inherit'}}
                onMouseEnter={(e) => e.target.style.color = '#ffac00'}
                onMouseLeave={(e) => e.target.style.color = '#374151'}
              >
                <Facebook className="w-4 h-4 font-semibold" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md bg-white/10 border border-white/20 hover:bg-sky-500/80 hover:border-sky-400/50 shadow-lg hover:shadow-xl text-gray-800"
                style={{color: 'inherit'}}
                onMouseEnter={(e) => e.target.style.color = '#ffac00'}
                onMouseLeave={(e) => e.target.style.color = '#374151'}
              >
                <Twitter className="w-4 h-4 font-semibold" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md bg-white/10 border border-white/20 hover:bg-red-500/80 hover:border-red-400/50 shadow-lg hover:shadow-xl text-gray-800"
                style={{color: 'inherit'}}
                onMouseEnter={(e) => e.target.style.color = '#ffac00'}
                onMouseLeave={(e) => e.target.style.color = '#374151'}
              >
                <Youtube className="w-4 h-4 font-semibold" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md bg-white/10 border border-white/20 hover:bg-blue-600/80 hover:border-blue-500/50 shadow-lg hover:shadow-xl text-gray-800"
                style={{color: 'inherit'}}
                onMouseEnter={(e) => e.target.style.color = '#ffac00'}
                onMouseLeave={(e) => e.target.style.color = '#374151'}
              >
                <Linkedin className="w-4 h-4 font-semibold" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md bg-white/10 border border-white/20 hover:bg-pink-500/80 hover:border-pink-400/50 shadow-lg hover:shadow-xl text-gray-800"
                style={{color: 'inherit'}}
                onMouseEnter={(e) => e.target.style.color = '#ffac00'}
                onMouseLeave={(e) => e.target.style.color = '#374151'}
              >
                <Instagram className="w-4 h-4 font-semibold" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Green Navigation Bar - Moves up to replace contact info on scroll */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-2"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-full shadow-lg px-8 py-4 -mt-8 relative z-10" style={{backgroundColor: '#2f868f'}}>
            <div className="flex items-center justify-between">
              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center space-x-8">
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition-colors font-semibold"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition-colors font-semibold"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition-colors font-semibold"
                >
                  Programs
                </a>
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition-colors font-semibold"
                >
                  Team
                </a>
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition-colors font-semibold"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition-colors font-semibold"
                >
                  Contact
                </a>
              </div>

              {/* Mobile Logo (visible when scrolled) */}
              <div
                className={`lg:hidden flex items-center transition-all duration-300 ${scrolled ? "opacity-100" : "opacity-0"}`}
              >
                <img 
                  src={youthTechLogo} 
                  alt="Youth Tech Logo" 
                  className="w-10 h-10 object-contain"
                />
                <span className="ml-2 text-xl font-extrabold text-white">Youth Tech</span>
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-4">
                <span className="text-white text-sm font-medium">Search:</span>
                <button className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/30 shadow-lg hover:shadow-xl">
                  <Search className="w-4 h-4 text-white font-semibold" />
                  <span className="text-white text-sm">search...</span>
                </button>

                <button className="hidden md:flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2.5 rounded-full transition-colors font-medium">
                  Donate Now
                </button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 rounded-full transition-colors"
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#256a70'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6 text-white font-semibold" />
                  ) : (
                    <Menu className="w-6 h-6 text-white font-semibold" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden mt-4 pt-4 border-t" style={{borderColor: '#2f868f'}}>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="block text-white hover:text-yellow-400 py-2 font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="block text-white hover:text-yellow-400 py-2 font-medium"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="block text-white hover:text-yellow-400 py-2 font-medium"
                  >
                    Programs
                  </a>
                  <a
                    href="#"
                    className="block text-white hover:text-yellow-400 py-2 font-medium"
                  >
                    Team
                  </a>
                  <a
                    href="#"
                    className="block text-white hover:text-yellow-400 py-2 font-medium"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="block text-white hover:text-yellow-400 py-2 font-medium"
                  >
                    Contact
                  </a>
                  <button className="w-full md:hidden flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2.5 rounded-full transition-colors font-semibold mt-4">
                    Donate Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>


    </div>
  );
};

export default NavigationBar;
