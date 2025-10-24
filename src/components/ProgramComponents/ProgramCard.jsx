import { ArrowRight, Clock, Users, Award } from "lucide-react";

export default function ProgramCard({ program, index, onApplyClick }) {
  const colorClasses = {
    teal: {
      bg: "bg-teal-50",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
      button: "bg-teal-600 hover:bg-teal-700",
      accent: "text-teal-600",
    },
    amber: {
      bg: "bg-amber-50",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-500",
      button: "bg-amber-500 hover:bg-amber-400",
      accent: "text-amber-500",
    },
  };

  const colors = colorClasses[program.color] || colorClasses.teal;
  const Icon = program.icon;

  return (
    <div
      className={`${colors.bg} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100`}
    >
      <div className="flex items-start justify-between mb-6">
        <div
          className={`${colors.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className={`w-8 h-8 ${colors.iconColor}`} />
        </div>
        <div className="text-right">
          <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
            <Clock className="w-4 h-4" />
            <span>{program.duration}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Users className="w-4 h-4" />
            <span>{program.students}</span>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
        {program.title}
      </h3>

      <p className="text-gray-600 mb-6 leading-relaxed">
        {program.description}
      </p>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Award className="w-4 h-4 text-gray-500" />
          <span className="text-sm font-semibold text-gray-700">
            {program.level}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {program.topics.map((topic, topicIndex) => (
            <span
              key={topicIndex}
              className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-600 border border-gray-200"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={onApplyClick}
        className={`w-full ${colors.button} text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl`}
      >
        Apply Now
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </div>
  );
}
