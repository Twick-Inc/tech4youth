import { useState } from "react";
import {
  Code,
  Monitor,
  Smartphone,
  BarChart3,
  Shield,
  Briefcase,
  BookOpen,
  Rocket,
  Award,
  ArrowRight,
  Lightbulb,
  Target,
} from "lucide-react";
import Navbar from "../components/CommonComponents/Navbar";
import ProgramCard from "../components/ProgramComponents/ProgramCard";
import ProgramHero from "../components/ProgramComponents/ProgramHero";
import Newsletter from "../components/ProgramComponents/Newsletter";
import Footer from "../components/CommonComponents/Footer";
import ApplicationModal from "../components/ProgramComponents/ApplicationModal";
import FeaturedPrograms from "../components/ProgramComponents/FeaturedPrograms";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const programs = [
    {
      icon: Code,
      title: "Coding Bootcamp",
      description:
        "Master the fundamentals of web development with our comprehensive bootcamp. Build real websites and applications using HTML, CSS, JavaScript, and React.",
      duration: "12 Weeks",
      level: "Beginner to Intermediate",
      students: "300+",
      color: "teal",
      topics: ["HTML", "CSS", "JavaScript", "React", "Git"],
    },
    {
      icon: Monitor,
      title: "Digital Literacy",
      description:
        "Learn essential computer skills including basic operations, internet navigation, email communication, and online safety. Perfect for beginners starting their digital journey.",
      duration: "6 Weeks",
      level: "Beginner",
      students: "450+",
      color: "amber",
      topics: [
        "Basic Computer",
        "Internet Skills",
        "MS Office",
        "Email",
        "Online Safety",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Create mobile applications for Android and iOS platforms. Learn modern frameworks and tools to build apps that can reach millions of users worldwide.",
      duration: "14 Weeks",
      level: "Intermediate",
      students: "200+",
      color: "teal",
      topics: ["React Native", "Flutter", "Mobile UI/UX", "App Store", "APIs"],
    },
    {
      icon: BarChart3,
      title: "Data Science and Analytics",
      description:
        "Unlock insights from data using modern analytics tools and techniques. Learn data visualization, statistical analysis, and how to make data-driven decisions.",
      duration: "10 Weeks",
      level: "Intermediate to Advanced",
      students: "180+",
      color: "amber",
      topics: [
        "Python",
        "Data Analysis",
        "Visualization",
        "Statistics",
        "Excel",
      ],
    },
    {
      icon: Shield,
      title: "Cybersecurity Basics",
      description:
        "Understand the fundamentals of cybersecurity and learn how to protect digital assets. Explore network security, threat detection, and security best practices.",
      duration: "8 Weeks",
      level: "Beginner to Intermediate",
      students: "220+",
      color: "teal",
      topics: [
        "Network Security",
        "Passwords",
        "Encryption",
        "Threat Detection",
        "Best Practices",
      ],
    },
    {
      icon: Briefcase,
      title: "Tech Entrepreneurship",
      description:
        "Transform your tech ideas into successful businesses. Learn startup fundamentals, business planning, funding strategies, and how to launch your tech venture.",
      duration: "8 Weeks",
      level: "All Levels",
      students: "150+",
      color: "amber",
      topics: [
        "Business Planning",
        "Funding",
        "Marketing",
        "Product Launch",
        "Growth",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ProgramHero onApplyClick={() => setIsModalOpen(true)} />

      {/* Programs Grid Section */}
      <section id="programs-section" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">
              Our Programs
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore Our{" "}
              <span className="text-teal-600">Technology Programs</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Choose from our comprehensive range of programs designed to equip
              you with essential ICT skills for the digital age
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <ProgramCard
                key={index}
                program={program}
                index={index}
                onApplyClick={() => setIsModalOpen(true)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Programs */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Makes Our Programs{" "}
              <span className="text-teal-600">Special</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-600 transition-colors duration-300">
                <BookOpen className="w-10 h-10 text-teal-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">
                Hands-On Learning
              </h3>
              <p className="text-gray-600">
                Practical projects and real-world applications in every program
              </p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500 transition-colors duration-300">
                <Target className="w-10 h-10 text-amber-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">
                Expert Mentors
              </h3>
              <p className="text-gray-600">
                Learn from experienced professionals in the tech industry
              </p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-600 transition-colors duration-300">
                <Award className="w-10 h-10 text-teal-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">
                Certification
              </h3>
              <p className="text-gray-600">
                Receive recognized certificates upon program completion
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500 transition-colors duration-300">
                <Rocket className="w-10 h-10 text-amber-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">
                Career Support
              </h3>
              <p className="text-gray-600">
                Job placement assistance and ongoing career guidance
              </p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-600 transition-colors duration-300">
                <Lightbulb className="w-10 h-10 text-teal-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">
                Real Projects
              </h3>
              <p className="text-gray-600">
                Work on actual projects that build your portfolio and experience
              </p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500 transition-colors duration-300">
                <BookOpen className="w-10 h-10 text-amber-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">
                Community
              </h3>
              <p className="text-gray-600">
                Join a supportive community of learners and tech enthusiasts
              </p>
            </div>
          </div>
        </div>
      </section>

      <FeaturedPrograms />

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-teal-600 to-teal-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-amber-500 rounded-full opacity-20 -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-amber-500 rounded-full opacity-20 translate-x-20 translate-y-20"></div>
        <div className="absolute top-10 right-20 w-3 h-3 bg-amber-400 rounded-full"></div>
        <div className="absolute top-20 right-40 w-3 h-3 bg-amber-400 rounded-full"></div>
        <div className="absolute top-16 right-60 w-3 h-3 bg-amber-400 rounded-full"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready To Start Your Tech Journey?
          </h2>
          <p className="text-white text-lg mb-8 opacity-95">
            Join thousands of students who are transforming their lives through
            technology education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-amber-500 hover:bg-amber-400 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Enroll Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white hover:bg-gray-100 text-teal-600 px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;
