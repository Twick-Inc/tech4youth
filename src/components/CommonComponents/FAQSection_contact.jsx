import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I apply for programs?",
      answer: "Fill out our contact form above and select the program you're interested in. We'll get back to you with application details and requirements."
    },
    {
      question: "Are the programs free?",
      answer: "Yes! All our programs are completely free thanks to our sponsors and donors. We believe technology education should be accessible to everyone."
    },
    {
      question: "What are the requirements?",
      answer: "Requirements vary by program. Generally, you need to be motivated to learn and commit to attending sessions. No prior experience required for beginner programs."
    },
    {
      question: "How can I volunteer?",
      answer: "We welcome volunteers! Contact us using the form above and select 'Volunteer Opportunities' to learn about current needs and how you can contribute."
    },
    {
      question: "Can I join the Wikipedia project?",
      answer: "Absolutely! Visit our Wikimedia Community Kilimanjaro page or contact us to get started.",
      link: {
        text: "Wikimedia Community Kilimanjaro",
        url: "https://meta.wikimedia.org/wiki/Wikimedia_Community_Kilimanjaro"
      }
    },
    {
      question: "Do you offer job placement?",
      answer: "Yes, we provide career support and job placement assistance for our program graduates, including resume help and interview preparation."
    }
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
              {faq.link && (
                <a 
                  href={faq.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-teal-600 hover:text-teal-700 font-medium hover:underline"
                >
                  {faq.link.text}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;