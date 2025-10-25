// Youth Tech Team Members Data
import abubakariImage from '../assets/team/Abubakari.jpg';
import alvinImage from '../assets/team/Alvin.jpg';
import cosmasImage from '../assets/team/Cosmas.jpg';
import edwardImage from '../assets/team/Edward.jpg';
import emiliaImage from '../assets/team/emilia.jpg';
import esterImage from '../assets/team/Ester.jpg';
import justineImage from '../assets/team/Justine.jpg';
import ramadhaniImage from '../assets/team/Ramadhani.jpg';
import yvonneImage from '../assets/team/Yvonne.jpg';

// Leadership Team
export const leadershipTeam = [
  {
    id: 1,
    name: 'Justine Meschu',
    role: 'Executive Director',
    image: justineImage,
    bio: "Justine leads Youth Tech's strategic vision and oversees all organizational operations...",
    fullBio: "Justine leads Youth Tech's strategic vision and oversees all organizational operations. With a background in education and technology, she is passionate about creating opportunities for young Tanzanians in the digital economy.",
    email: 'justine@youthtech.or.tz',
    phone: '+255 764 454 097',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    id: 2,
    name: 'Yvonne Shirima',
    role: 'Program Officer',
    image: yvonneImage,
    bio: "Yvonne manages Youth Tech's educational programs and ensures quality delivery...",
    fullBio: "Yvonne manages Youth Tech's educational programs and ensures quality delivery of our training initiatives. She coordinates with instructors and tracks student progress across all programs.",
    email: 'yvonne@youthtech.or.tz',
    phone: '+255 764 454 097',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    id: 3,
    name: 'Abubakari Sixbert',
    role: 'Executive Secretary',
    image: abubakariImage,
    bio: 'Abubakari handles administrative operations and ensures smooth day-to-day functioning...',
    fullBio: 'Abubakari handles administrative operations and ensures smooth day-to-day functioning of Youth Tech. He also supports program coordination and community outreach initiatives.',
    email: 'info@youthtech.or.tz',
    phone: '+255 764 454 097',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  }
];

// Volunteer Team
export const volunteerTeam = [
  {
    id: 4,
    name: 'Cosmas Msoka',
    role: 'Digital Content Creator (Volunteer)',
    image: cosmasImage,
    bio: "Cosmas creates engaging digital content for Youth Tech's online presence...",
    fullBio: "Cosmas creates engaging digital content for Youth Tech's online presence and educational materials. He helps document our programs and success stories.",
    email: 'info@youthtech.or.tz',
    phone: '+255 764 454 097',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    id: 5,
    name: 'Edward Jacob',
    role: 'Communications Officer (Volunteer)',
    image: edwardImage,
    bio: "Edward manages Youth Tech's communications strategy and public relations...",
    fullBio: "Edward manages Youth Tech's communications strategy and public relations. He ensures our message reaches the community effectively through various channels.",
    email: 'info@youthtech.or.tz',
    phone: '+255 764 454 097',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    id: 6,
    name: 'Emilia Nzilano',
    role: 'Grant Writer & Accountant (Volunteer)',
    image: emiliaImage,
    bio: 'Emily secures funding for Youth Tech through grant writing and manages financial operations...',
    fullBio: 'Emily secures funding for Youth Tech through grant writing and manages financial operations. Her work ensures sustainable funding for our programs.',
    email: 'info@youthtech.or.tz',
    phone: '+255 764 454 097',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  }
];

// Wikipedia Project Volunteers
export const wikipediaVolunteers = [
  {
    id: 7,
    name: 'Kelvin Dulle',
    role: 'Wikipedia Project Volunteer',
    image: alvinImage,
    bio: 'Kelvin Dulle is a committed volunteer and active Wikimedia contributor...',
    fullBio: 'Kelvin Dulle is a committed volunteer and active Wikimedia contributor, passionate about using technology to promote education and open knowledge. He has contributed to editing Wikipedia articles and supporting Wikimedia projects that focus on digital literacy and youth empowerment. Through his volunteer work, Kelvin helps young people access reliable information, improve their digital skills, and engage in knowledge-sharing initiatives. His dedication lies in creating opportunities where technology and open access inspire innovation and community growth.',
    email: 'info@youthtech.or.tz',
    phone: '+255 764 454 097',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    id: 8,
    name: 'Ester Kimario',
    role: 'Wikipedia Project Volunteer',
    image: esterImage,
    bio: 'Ester contributes to Wikipedia by writing articles about East African women...',
    fullBio: 'Ester contributes to Wikipedia by writing articles about East African women in technology and educational initiatives in Tanzania.',
    email: 'info@youthtech.or.tz',
    phone: '+255 764 454 097',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    id: 9,
    name: 'Ramadhan Mushi',
    role: 'Wikipedia Project Volunteer',
    image: ramadhaniImage,
    bio: 'Ramadhan specializes in creating Wikipedia content about Tanzanian geography...',
    fullBio: 'Ramadhan specializes in creating Wikipedia content about Tanzanian geography, tourism, and local communities, particularly around Kilimanjaro.',
    email: 'info@youthtech.or.tz',
    phone: '+255 764 454 097',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  }
];

// All team members combined
export const teamMembers = [...leadershipTeam, ...volunteerTeam, ...wikipediaVolunteers];

export default teamMembers;
