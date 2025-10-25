import React from 'react';
import { Calendar, User } from 'lucide-react';

const BlogPostContent = ({ post }) => {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-md">
      {/* Featured Image */}
      <div className="relative h-96">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Post Content */}
      <div className="p-8">
        {/* Post Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
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
        
        {/* Post Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            {post.excerpt}
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Our Commitment to Technology Education
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Youth Tech is a non-governmental organization dedicated to fostering a comprehensive understanding of technology and innovation within the Tanzanian community. Given the significant number of Tanzanians with limited education in information communication and technology, Youth Tech is committed to ensuring that the country's youth, particularly children and women, are well-informed and educated in areas such as development, cybersecurity, website design, artificial intelligence, and programming.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Why Technology Education Matters
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We believe that technology is a powerful catalyst for social and economic development, especially in addressing urgent challenges like climate change, healthcare access, and education quality. By equipping our youth with essential ICT skills, we're not just preparing them for jobs—we're empowering them to create innovative solutions for Tanzania's future challenges.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Our Approach to Learning
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Youth Tech provides hands-on, project-based learning experiences that go beyond traditional classroom teaching. Our mentorship programs connect learners with experienced professionals, while our workshops and bootcamps offer intensive skill-building opportunities. We ensure that every participant gains practical experience through real-world projects and collaborative learning.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Get Involved Today
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Whether you're interested in learning, volunteering, or supporting our mission, there are many ways to get involved with Youth Tech. Visit our programs page to learn more about upcoming workshops, training sessions, and volunteer opportunities. Together, we can bridge the digital divide and empower the next generation of Tanzanian tech leaders.
          </p>
        </div>
      </div>
    </article>
  );
};

export default BlogPostContent;

