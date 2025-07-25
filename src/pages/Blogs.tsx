import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '@/lib/posts';

const Blogs: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background py-12 px-4 pt-28">
      <main className="flex-grow container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Explore the <span className="text-gradient-blue-teal">iValidate</span> Blogs</h1>
        <p className="text-center text-gray-500 mb-12">Actionable insights, real-world validation strategies, and tools to help you turn your ideas into launch-ready products faster.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-card border-border border-[1.5px] rounded-[24px] p-6 backdrop-blur-[50px] hover:bg-accent transition-colors cursor-pointer">
              <div className="mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-[#005EDA] to-[#009FC3] rounded-lg mb-4 flex items-center justify-center"><span className="text-white text-5xl font-thin">iValidate</span></div>
                <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3"><span>{post.date}</span><span>•</span><span>{post.readTime}</span></div>
                <h2 className="text-foreground text-xl font-medium mb-3">{post.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{post.description}</p>
                <Link to={post.href} className="text-[#4F46E5] hover:text-foreground transition-colors font-medium">Read More →</Link>
              </div>
            </article>
          ))}
        </div>
      </main>
      <div className="text-center mt-8 mb-8">
        <Link to="/" className="text-blue-600 hover:underline">← Back to Home</Link>
      </div>
    </div>
  );
};

export default Blogs;
