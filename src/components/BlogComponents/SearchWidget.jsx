import React from 'react';
import { Search } from 'lucide-react';

const SearchWidget = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md mb-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-youth-primary">
        Search
      </h3>
      <div className="relative">
        <input 
          type="text" 
          placeholder="Search articles..."
          className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-youth-primary"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-youth-primary hover:bg-youth-primary-dark text-white p-2 rounded-lg transition-colors">
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchWidget;



