import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const recentPosts = [
  {
    id: 1,
    title: "Empowering Youth Through ICT Education",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&q=80",
    date: "January 15, 2025",
  },
  {
    id: 2,
    title: "Cybersecurity Training: Protecting Tanzania's Digital Future",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&q=80",
    date: "January 10, 2025",
  },
  {
    id: 3,
    title: "AI Workshop Success: Youth Building the Future",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&q=80",
    date: "January 5, 2025",
  },
];

const RecentPostsWidget = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md mb-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-youth-primary">
        Recent Posts
      </h3>
      <div className="space-y-4">
        {recentPosts.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id}>
            <div className="flex gap-4 group cursor-pointer">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-20 h-20 rounded-lg object-cover group-hover:opacity-80 transition-opacity"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-youth-primary transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Calendar className="w-4 h-4 text-youth-orange" />
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentPostsWidget;

