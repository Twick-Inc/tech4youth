import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import faqImage from "../../assets/IMGL1144.JPG";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What programs does Youth Tech offer?",
      answer:
        "Youth Tech offers comprehensive ICT education programs including cybersecurity training, software development courses, AI and machine learning workshops, and programming bootcamps. We focus on empowering Tanzanian youth, children, and women with essential technology skills to thrive in the digital age.",
    },
    {
      question: "How can I get involved with Youth Tech?",
      answer:
        "You can get involved by volunteering as a mentor, participating in our training programs, supporting us through donations, or partnering with us to expand our reach. We welcome individuals and organizations passionate about technology education and digital empowerment.",
    },
    {
      question: "Are Youth Tech programs free?",
      answer:
        "Yes, most of our programs are offered free of charge to ensure accessibility for all youth in Tanzania. We believe technology education should be available to everyone, regardless of their financial background. Our mission is to bridge the digital divide.",
    },
    {
      question: "What age groups does Youth Tech serve?",
      answer:
        "We serve a wide range of age groups from children (10+) to young adults and women. Our programs are tailored to different skill levels and age groups, ensuring everyone receives appropriate training and support in ICT, cybersecurity, programming, and AI.",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0">
        <div className="w-32 h-32 bg-gradient-to-br from-youth-orange to-youth-orange-dark rounded-tr-full opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative">
              {/* Orange decorative border */}
              <div className="absolute -top-8 -left-8 w-full h-full border-8 border-youth-orange rounded-full -z-10"></div>
              
              {/* Main circular image */}
              <div className="relative rounded-full overflow-hidden w-full aspect-square">
                <img
                  src={faqImage}
                  alt="Youth Tech Students"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* White decorative corner */}
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-white rounded-br-full"></div>
            </div>
          </div>

          {/* Right Side - FAQ */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-16 h-0.5 bg-youth-orange"></div>
                <span className="text-youth-orange font-bold text-lg italic">
                  Frequently Asked Questions
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Have Any Questions For Us?
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:border-youth-primary transition-colors duration-300"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-600 transition-transform duration-300 flex-shrink-0 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

