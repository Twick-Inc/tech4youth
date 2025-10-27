import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Send Us a Message Section */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
            <p className="text-gray-600 mb-6">
              Have questions about our programs or want to get involved? We'd love to hear from you!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  I'm Interested In
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none bg-white"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="coding-bootcamp">Coding Bootcamp</option>
                  <option value="digital-literacy">Digital Literacy</option>
                  <option value="wikipedia-project">Wikipedia Project</option>
                  <option value="volunteering">Volunteering</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us more about your interest or questions..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Get In Touch Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Get In Touch</h2>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="bg-teal-600 rounded-full p-3 flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">Location</h3>
                    <p className="text-gray-600">Kilimanjaro Region</p>
                    <p className="text-gray-600">Tanzania</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-teal-600 rounded-full p-3 flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">Email</h3>
                    <a href="mailto:info@youthtech.or.tz" className="text-teal-600 hover:underline block">
                      info@youthtech.or.tz
                    </a>
                    <a href="mailto:programs@youthtech.or.tz" className="text-teal-600 hover:underline block">
                      programs@youthtech.or.tz
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-teal-600 rounded-full p-3 flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">Phone</h3>
                    <a href="tel:+255164454097" className="text-gray-800 hover:text-teal-600 block">
                      +255 164454097
                    </a>
                    <p className="text-gray-600 text-sm">Available Mon-Fri, 9AM-5PM</p>
                  </div>
                </div>

                {/* Wikipedia Project */}
                <div className="flex items-start gap-4">
                  <div className="bg-teal-600 rounded-full p-3 flex-shrink-0">
                    <span className="text-white font-bold text-lg">W</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">Wikipedia Project</h3>
                    <a 
                      href="https://meta.wikimedia.org/wiki/Wikimedia_Community_Kilimanjaro" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:underline"
                    >
                      Wikimedia Community Kilimanjaro
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Us Section */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Follow Us</h3>
              <div className="grid grid-cols-4 gap-4">
                <a href="#" className="bg-teal-600 hover:bg-teal-700 text-white rounded-full w-12 h-12 flex items-center justify-center transition duration-300">
                  <span className="font-bold">W</span>
                </a>
                <a href="#" className="bg-teal-600 hover:bg-teal-700 text-white rounded-full w-12 h-12 flex items-center justify-center transition duration-300">
                  <span className="font-bold">f</span>
                </a>
                <a href="#" className="bg-teal-600 hover:bg-teal-700 text-white rounded-full w-12 h-12 flex items-center justify-center transition duration-300">
                  <span className="font-bold">t</span>
                </a>
                <a href="#" className="bg-teal-600 hover:bg-teal-700 text-white rounded-full w-12 h-12 flex items-center justify-center transition duration-300">
                  <span className="font-bold">in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;