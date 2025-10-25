import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
import youthTechLogo from "../../assets/youth-tech-logo.png";

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
    <>
      {/* ================= White Navigation Bar ================= */}
      <div className="bg-white transition-all duration-500 relative z-30">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            {/* Logo Section */}
            <div className="flex items-center -ml-52">
              <img
                src={youthTechLogo}
                alt="Youth Tech Logo"
                className="w-20 h-20 object-contain"
              />
              <hr
                className="w-0.5 h-16 mx-4"
                style={{ backgroundColor: "#f3f4f6" }}
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-800">
                  Youth Tech
                </span>
                <span className="text-sm text-gray-600">
                  let's talk technology
                </span>
              </div>
            </div>

            {/* Contact Info (Hidden on Scroll) */}
            <div
              className={`hidden lg:flex items-center gap-12 text-base transition-all duration-500 ${scrolled
                  ? "opacity-0 h-0 overflow-hidden"
                  : "opacity-100 h-auto"
                }`}
            >
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm mb-1">Visit Us:</span>
                <span className="font-semibold text-gray-800 text-lg">
                  Kilimanjaro Region, Tanzania
                </span>
              </div>
              <hr
                className="w-0.5 h-16"
                style={{ backgroundColor: "#f3f4f6" }}
              />
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm mb-1 font-medium">
                  Talk to Us:
                </span>
                <span className="font-semibold text-gray-800 text-lg">
                  +255 764 454 097
                </span>
              </div>
              <hr
                className="w-0.5 h-16"
                style={{ backgroundColor: "#f3f4f6" }}
              />
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm mb-1 font-medium">
                  Write to Us:
                </span>
                <span className="font-semibold text-gray-800 text-lg">
                  info@youthtech.or.tz
                </span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3 -mr-52">
              {[Facebook, Twitter, Youtube, Linkedin, Instagram].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md bg-white/10 border border-white/20 hover:bg-yellow-400/80 hover:border-yellow-400 shadow-lg hover:shadow-xl text-gray-800"
                    onMouseEnter={(e) => (e.target.style.color = "#fff")}
                    onMouseLeave={(e) => (e.target.style.color = "#374151")}
                  >
                    <Icon className="w-4 h-4 font-semibold" />
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ================= Green Navigation Bar ================= */}
      <nav className="relative z-40 mt-6">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="rounded-full shadow-lg px-8 py-4 absolute left-1/2 transform -translate-x-1/2 w-[90%]"
            style={{
              backgroundColor: "#2f868f",
              top: "100%",
              marginTop: "-2.5rem", // half overlaps white bar
            }}
          >
            <div className="flex items-center justify-between">
              {/* Desktop Links */}
              <div className="hidden lg:flex items-center space-x-8">
                <Link
                  to="/"
                  className="text-white hover:text-yellow-400 transition-colors font-semibold"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-white hover:text-yellow-400 transition-colors font-semibold"
                >
                  About
                </Link>
                <Link
                  to="/programs"
                  className="text-white hover:text-yellow-400 transition-colors font-semibold"
                >
                  Programs
                </Link>
                <Link
                  to="/team"
                  className="text-white hover:text-yellow-400 transition-colors font-semibold"
                >
                  Team
                </Link>
                {/* Blog Dropdown */}
                <div className="relative group">
                  <Link
                    to="/blog"
                    className="text-white hover:text-yellow-400 transition-colors font-semibold flex items-center gap-1"
                  >
                    Blog
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <Link
                      to="/blog"
                      className="block px-4 py-3 text-gray-700 hover:bg-youth-orange hover:text-white transition-colors rounded-t-lg"
                    >
                      Blog
                    </Link>
                    <Link
                      to="/blog/1"
                      className="block px-4 py-3 text-gray-700 hover:bg-youth-orange hover:text-white transition-colors rounded-b-lg"
                    >
                      Blog Details
                    </Link>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="text-white hover:text-yellow-400 transition-colors font-semibold"
                >
                  Contact
                </Link>
              </div>

              {/* Mobile Logo (shows on scroll) */}
              <div
                className={`lg:hidden flex items-center transition-all duration-300 ${scrolled ? "opacity-100" : "opacity-0"
                  }`}
              >
                <img
                  src={youthTechLogo}
                  alt="Youth Tech Logo"
                  className="w-10 h-10 object-contain"
                />
                <span className="ml-2 text-xl font-extrabold text-white">
                  Youth Tech
                </span>
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

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 rounded-full transition-colors"
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#256a70")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "transparent")
                  }
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
              <div
                className="lg:hidden mt-4 pt-4 border-t"
                style={{ borderColor: "#2f868f" }}
              >
                <div className="space-y-3">
                  {["Home", "About", "Programs", "Team", "Blog", "Contact"].map(
                    (item) => (
                      <Link
                        key={item}
                        to={`/${item.toLowerCase()}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-white hover:text-yellow-400 py-2 font-medium"
                      >
                        {item}
                      </Link>
                    ),
                  )}
                  <button className="w-full md:hidden flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2.5 rounded-full transition-colors font-semibold mt-4">
                    Donate Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
