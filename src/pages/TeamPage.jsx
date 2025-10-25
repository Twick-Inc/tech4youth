import React from 'react';
import Navbar from '../components/CommonComponents/Navbar';
import Footer from '../components/CommonComponents/Footer';
import TeamHeroSection from '../components/TeamComponents/TeamHeroSection';
import TeamMemberCard from '../components/TeamComponents/TeamMemberCard';
import { leadershipTeam, volunteerTeam, wikipediaVolunteers } from '../data/teamData';

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <TeamHeroSection />

      {/* Leadership Team Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-16 bg-youth-orange"></div>
            <span className="mx-4 text-youth-orange font-bold text-sm uppercase tracking-wider italic">
              Leadership Team
            </span>
            <div className="h-px w-16 bg-youth-orange"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-800">Meet Our Leadership Team</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {leadershipTeam.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* Volunteer Team Section */}
        <div className="text-center mb-12 mt-20">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-16 bg-youth-orange"></div>
            <span className="mx-4 text-youth-orange font-bold text-sm uppercase tracking-wider italic">
              Volunteer Team
            </span>
            <div className="h-px w-16 bg-youth-orange"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-800">Our Dedicated Volunteers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {volunteerTeam.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* Wikipedia Project Volunteers Section */}
        <div className="text-center mb-12 mt-20">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-16 bg-youth-orange"></div>
            <span className="mx-4 text-youth-orange font-bold text-sm uppercase tracking-wider italic">
              Wikipedia Project Volunteers
            </span>
            <div className="h-px w-16 bg-youth-orange"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Wikimedia Community Kilimanjaro</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our dedicated volunteers contributing to the Wikimedia Community Kilimanjaro project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wikipediaVolunteers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TeamPage;


