import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PostNavigation = ({ prevPost, nextPost }) => {
  return (
    <div className="flex items-center justify-between py-8 border-t border-b border-gray-200 my-8">
      {prevPost ? (
        <Link 
          to={`/blog/${prevPost.id}`}
          className="flex items-center gap-2 text-gray-600 hover:text-youth-primary transition-colors group"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="group-hover:underline">{prevPost.title}</span>
        </Link>
      ) : (
        <div></div>
      )}
      
      {nextPost ? (
        <Link 
          to={`/blog/${nextPost.id}`}
          className="flex items-center gap-2 text-gray-600 hover:text-youth-primary transition-colors group"
        >
          <span className="group-hover:underline">{nextPost.title}</span>
          <ChevronRight className="w-5 h-5" />
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default PostNavigation;

