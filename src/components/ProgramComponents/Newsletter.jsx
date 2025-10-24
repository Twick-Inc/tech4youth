import { Send } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-teal-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Stay Updated With Youth Tech
            </h2>
            <p className="text-gray-300">
              Get the latest news about our ICT programs and technology
              initiatives
            </p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="flex-1 md:w-80 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button className="bg-amber-500 hover:bg-amber-400 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg">
              <Send className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
