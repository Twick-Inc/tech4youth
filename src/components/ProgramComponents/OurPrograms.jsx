import { Clock, Users, Award, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function ProgramCard({ program, index, onApplyClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = program.icon;

  const colorClasses = program.color === 'teal'
    ? {
        bg: 'bg-teal-600',
        bgLight: 'bg-teal-50',
        text: 'text-teal-600',
        border: 'border-teal-600',
        hover: 'group-hover:bg-teal-600'
      }
    : {
        bg: 'bg-amber-500',
        bgLight: 'bg-amber-50',
        text: 'text-amber-500',
        border: 'border-amber-500',
        hover: 'group-hover:bg-amber-500'
      };

  return (
    <div
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
      }}
    >
      <div className={`${colorClasses.bg} p-6 relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className={`${colorClasses.bgLight} w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${colorClasses.hover} transition-all duration-300`}>
          <Icon className={`w-8 h-8 ${colorClasses.text} group-hover:text-white transition-colors duration-300`} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-6 leading-relaxed">
          {program.description}
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-sm">
            <Clock className={`w-5 h-5 ${colorClasses.text}`} />
            <span className="text-gray-700">
              <span className="font-semibold">Duration:</span> {program.duration}
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Award className={`w-5 h-5 ${colorClasses.text}`} />
            <span className="text-gray-700">
              <span className="font-semibold">Level:</span> {program.level}
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Users className={`w-5 h-5 ${colorClasses.text}`} />
            <span className="text-gray-700">
              <span className="font-semibold">Students:</span> {program.students}
            </span>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-700 mb-2">Key Topics:</p>
          <div className="flex flex-wrap gap-2">
            {program.topics.map((topic, i) => (
              <span
                key={i}
                className={`${colorClasses.bgLight} ${colorClasses.text} px-3 py-1 rounded-full text-xs font-medium`}
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={onApplyClick}
          className={`w-full ${colorClasses.bg} hover:opacity-90 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform group-hover:scale-105`}
        >
          Apply Now
          <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
        </button>
      </div>
    </div>
  );
}
