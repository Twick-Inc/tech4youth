import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import SocialIcon from './SocialIcon';
import oceanGif from '../../assets/ocean.gif';

const TeamMemberCard = ({ member }) => {
  const [showSocial, setShowSocial] = useState(false);

  return (
    <Link to={`/team/${member.id}`}>
      <div className="group cursor-pointer">
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
          {/* Image Container */}
          <div 
            className="relative bg-[#93BFC7] overflow-hidden"
            onMouseEnter={() => setShowSocial(true)}
            onMouseLeave={() => setShowSocial(false)}
          >
            <div className="aspect-square p-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            
            {/* Social Icons Overlay */}
            <div
              className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 transition-all duration-300 ${
                showSocial ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <SocialIcon icon={Facebook} href={member.social.facebook} />
              <SocialIcon icon={Twitter} href={member.social.twitter} />
              <SocialIcon icon={Linkedin} href={member.social.linkedin} />
              <SocialIcon icon={Instagram} href={member.social.instagram} />
            </div>
          </div>

          {/* Info Container */}
          <div className="bg-teal-50 p-6 text-center relative overflow-hidden">
            {/* Ocean GIF Background */}
            <div className="absolute inset-0 opacity-20">
              <img
                src={oceanGif}
                alt="Ocean animation"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
              <p className="text-sm text-youth-primary mb-3 font-semibold">{member.role}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TeamMemberCard;

