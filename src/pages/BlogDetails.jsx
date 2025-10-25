import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/CommonComponents/Navbar';
import Footer from '../components/CommonComponents/Footer';
import Sidebar from '../components/BlogComponents/Sidebar';
import BlogCard from '../components/BlogComponents/BlogCard';
import BlogPostContent from '../components/BlogComponents/BlogPostContent';
import QuoteBlock from '../components/BlogComponents/QuoteBlock';
import PostNavigation from '../components/BlogComponents/PostNavigation';
import AuthorBox from '../components/BlogComponents/AuthorBox';
import CommentForm from '../components/BlogComponents/CommentForm';
import TagsAndShare from '../components/BlogComponents/TagsAndShare';
import blogPosts from '../data/blogData';

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id)) || blogPosts[0];
  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);
  
  const currentIndex = blogPosts.findIndex(p => p.id === post.id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const postTags = ["ICT Training", "Youth Empowerment", "Technology", "Education"];
  const quote = {
    text: "Technology education is not just about learning to code—it's about unlocking potential, creating opportunities, and building a brighter future for all Tanzanians.",
    author: "Abubakari Sixbeth"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Breadcrumb Hero */}
      <div className="bg-gradient-to-r from-youth-primary to-teal-600 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
          <div className="flex items-center gap-2 text-white/90 text-sm flex-wrap">
            <span className="hover:underline cursor-pointer">Home</span>
            <ArrowRight className="w-4 h-4" />
            <span className="hover:underline cursor-pointer">Blog</span>
            <ArrowRight className="w-4 h-4" />
            <span>{post.category}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Post Content */}
          <div className="lg:w-2/3">
            <BlogPostContent post={post} />
            
            <div className="bg-white rounded-2xl p-8 shadow-md mt-8">
              <QuoteBlock quote={quote.text} author={quote.author} />
              <TagsAndShare tags={postTags} />
            </div>
            
            <PostNavigation prevPost={prevPost} nextPost={nextPost} />
            
            <AuthorBox author={post.author} />
            
            <CommentForm />

            {/* Related Posts */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
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

export default BlogDetails;

