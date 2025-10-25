import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      <div className="relative overflow-hidden h-64">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4 text-youth-orange" />
            <span>By {post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-youth-orange" />
            <span>{post.date}</span>
          </div>
          <span className={`${post.categoryColor} text-white px-3 py-1 rounded-full text-xs`}>
            {post.category}
          </span>
        </div>
        
        <Link to={`/blog/${post.id}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-youth-primary transition-colors cursor-pointer">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <Link to={`/blog/${post.id}`}>
          <button className="bg-youth-primary hover:bg-youth-primary-dark text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 group-hover:gap-4">
            READ MORE
            <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;



