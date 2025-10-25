import React from 'react';
import Navbar from '../components/CommonComponents/Navbar';
import Footer from '../components/CommonComponents/Footer';
import HeroSection from '../components/BlogComponents/HeroSection';
import BlogCard from '../components/BlogComponents/BlogCard';
import Sidebar from '../components/BlogComponents/Sidebar';
import blogPosts from '../data/blogData';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Posts - Main Content */}
          <div className="lg:w-2/3">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-12">
              <button className="w-10 h-10 rounded-lg border border-gray-300 hover:bg-youth-primary hover:text-white hover:border-youth-primary transition-all duration-300 flex items-center justify-center">
                ←
              </button>
              <button className="w-10 h-10 rounded-lg bg-youth-primary text-white font-semibold">
                1
              </button>
              <button className="w-10 h-10 rounded-lg border border-gray-300 hover:bg-youth-primary hover:text-white hover:border-youth-primary transition-all duration-300">
                2
              </button>
              <button className="w-10 h-10 rounded-lg border border-gray-300 hover:bg-youth-primary hover:text-white hover:border-youth-primary transition-all duration-300 flex items-center justify-center">
                →
              </button>
            </div>
          </div>
          
          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPage;

