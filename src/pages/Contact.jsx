import React from 'react';
import Navbar from '../components/CommonComponents/Navbar';
import ContactPage from '../components/CommonComponents/ContactPage';
import FAQSection from '../components/CommonComponents/FAQSection_contact';
import QuickProgramApplications from '../components/CommonComponents/QuickProgramApplications';
import Footer from '../components/CommonComponents/Footer';
//import Navbar from '../components/CommonComponents/Navbar';

const Contact = () => {
  return (
    <div className="min-h-screen #308b95ff">
      <Navbar />
      <main>
        <section className="bg-teal-600 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-white">
            Ready to start your tech journey? Get in touch with us today
          </p>
        </div>
      </section>
        <ContactPage />
        <FAQSection />
        <QuickProgramApplications />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
