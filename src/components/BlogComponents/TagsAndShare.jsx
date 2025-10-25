import React from 'react';
import { Facebook, Twitter, Linkedin, Share2 } from 'lucide-react';

const TagsAndShare = ({ tags }) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 pt-6 mt-6 border-t border-gray-200">
      <div className="flex items-center gap-3 flex-wrap">
        <span className="font-semibold text-gray-900">Tags:</span>
        {tags.map((tag, index) => (
          <a 
            key={index}
            href="#"
            className="px-4 py-2 bg-gray-100 hover:bg-youth-primary hover:text-white text-gray-700 rounded-lg text-sm font-medium transition-all duration-300"
          >
            {tag}
          </a>
        ))}
      </div>
      
      <div className="flex items-center gap-3">
        <span className="font-semibold text-gray-900">Share:</span>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all duration-300">
            <Facebook className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-sky-500 hover:text-white flex items-center justify-center transition-all duration-300">
            <Twitter className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-700 hover:text-white flex items-center justify-center transition-all duration-300">
            <Linkedin className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-600 hover:text-white flex items-center justify-center transition-all duration-300">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TagsAndShare;

