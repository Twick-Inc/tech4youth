import { Users, FileText, Edit, ArrowRight } from "lucide-react";
import pichaImage from "../../assets/Picha.JPG";

export default function FeaturedPrograms() {
  console.log('Picha image path:', pichaImage);
  
  const stats = [
    {
      icon: FileText,
      value: "1,250+",
      label: "Articles Created",
      color: "teal",
    },
    {
      icon: Edit,
      value: "5,400+",
      label: "Edits Made",
      color: "amber",
    },
    {
      icon: Users,
      value: "45+",
      label: "Active Volunteers",
      color: "teal",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">
            Featured Programs
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Special <span className="text-teal-600">Initiatives</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Wikipedia Kilimanjaro Project
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Join our vibrant Wikipedia Kilimanjaro community and contribute to
              the world's largest free knowledge repository. Help document local
              history, culture, and knowledge while learning valuable digital
              literacy skills.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              As part of this initiative, you'll collaborate with passionate
              volunteers, attend edit-a-thons, and make a lasting impact by
              sharing Tanzanian stories and perspectives with the global
              community.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const colorClasses =
                  stat.color === "teal"
                    ? "bg-teal-100 text-teal-600"
                    : "bg-amber-100 text-amber-500";

                return (
                  <div key={index} className="text-center">
                    <div
                      className={`${colorClasses} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            <a
              href="https://meta.wikimedia.org/wiki/Wikimedia_Community_Kilimanjaro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Join Wikipedia Project
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-600 to-amber-500 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <img
              src={pichaImage}
              alt="Wikipedia Project"
              className="relative rounded-2xl shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-6 rounded-2xl shadow-xl">
              <p className="text-3xl font-bold mb-1">6,650+</p>
              <p className="text-sm">Total Contributions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
