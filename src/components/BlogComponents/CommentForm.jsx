import React, { useState } from 'react';
import { User, Mail, Globe, MessageCircle } from 'lucide-react';

const CommentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, website, comment });
    // Reset form
    setName('');
    setEmail('');
    setWebsite('');
    setComment('');
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-md mt-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Leave a Comment</h3>
      <p className="text-sm text-gray-600 mb-6">
        Your email address will not be published. Required fields are marked <span className="text-red-500">*</span>
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Your Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-youth-primary"
            />
            <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Your Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-youth-primary"
            />
            <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
        
        <div className="relative">
          <input 
            type="url" 
            placeholder="Website (Optional)"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-youth-primary"
          />
          <Globe className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
        
        <div className="relative">
          <textarea 
            placeholder="Write your comment here... *"
            rows="5"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-youth-primary resize-none"
          ></textarea>
          <MessageCircle className="absolute right-3 top-4 w-5 h-5 text-gray-400" />
        </div>
        
        <button 
          type="submit"
          className="bg-youth-primary hover:bg-youth-primary-dark text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;

