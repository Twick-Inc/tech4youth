import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Navbar from '../components/CommonComponents/Navbar';
import Footer from '../components/CommonComponents/Footer';
import SocialIcon from '../components/TeamComponents/SocialIcon';
import teamMembers from '../data/teamData';

const TeamMemberDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const member = teamMembers.find(m => m.id === parseInt(id)) || teamMembers[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-youth-primary to-teal-700">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">{member.name}</h1>
          <div className="flex items-center gap-2 text-sm">
            <button onClick={() => navigate('/')} className="hover:text-youth-orange transition-colors">Home</button>
            <ArrowRight className="w-4 h-4" />
            <button onClick={() => navigate('/team')} className="hover:text-youth-orange transition-colors">Team</button>
            <ArrowRight className="w-4 h-4" />
            <span>{member.name}</span>
          </div>
        </div>
      </div>

      {/* Detail Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image Section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl p-8 relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-youth-orange/30 rounded-full -translate-y-12 translate-x-12"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-youth-primary/30 rounded-full translate-y-12 -translate-x-8"></div>
              <div className="relative">
                <div className="w-full aspect-square bg-youth-orange/20 rounded-full flex items-end justify-center overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="space-y-8">
            <div>
              <p className="text-youth-primary text-sm font-medium mb-2 uppercase tracking-wider">{member.role}</p>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">{member.name}</h2>
              <p className="text-gray-600 leading-relaxed mb-8">{member.fullBio}</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <SocialIcon icon={Facebook} href={member.social.facebook} />
              <SocialIcon icon={Twitter} href={member.social.twitter} />
              <SocialIcon icon={Linkedin} href={member.social.linkedin} />
              <SocialIcon icon={Instagram} href={member.social.instagram} />
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 bg-youth-primary/10 rounded-lg flex items-center justify-center text-youth-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email address</p>
                  <p className="text-gray-800 font-semibold">{member.email}</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 bg-youth-primary/10 rounded-lg flex items-center justify-center text-youth-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Need help? Call Us:</p>
                  <p className="text-gray-800 font-semibold">{member.phone}</p>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="pt-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">About {member.name.split(' ')[0]}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{member.fullBio}</p>
              <div className="bg-youth-primary/10 p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <span className="font-semibold">Youth Tech is committed to empowering over 500+ youth</span> with essential technology skills, bridging the digital divide in Tanzania.
                </p>
                <button className="bg-youth-orange hover:bg-youth-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                  Join Our Programs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TeamMemberDetails;

