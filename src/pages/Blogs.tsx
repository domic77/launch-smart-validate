import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '@/lib/posts';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, BookOpen, ArrowRight } from 'lucide-react';

const Blogs: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen py-12 px-4 pt-32" style={{ backgroundColor: '#fafafa' }}>
      <main className="flex-grow container mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">
            Explore the <span className="text-gradient-blue-teal">iValidate</span> Blogs
          </h1>
          <p className="text-foreground text-xl max-md:text-lg max-sm:text-base leading-relaxed mb-6 max-w-3xl mx-auto font-medium">
            Actionable insights, real-world validation strategies, and tools to help you turn your ideas into launch-ready products faster.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {posts.map((post) => (
            <Card key={post.id} className="rounded-[16px] border-[1.5px] border-blue-500/30 hover:bg-gray-50 transition-colors shadow-sm overflow-hidden group cursor-pointer" style={{ backgroundColor: '#ffffff' }}>
              <div className="relative">
                {/* Blog Image/Header */}
                <div className="w-full h-48 bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20"></div>
                  <div className="relative z-10 text-center">
                    <BookOpen className="w-12 h-12 text-white mb-2 mx-auto" />
                    <span className="text-white text-2xl font-bold">iValidate</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Meta Information */}
                  <div className="flex items-center gap-4 text-foreground text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{post.date}</span>
                    </div>
                    {post.readTime && (
                      <>
                        <span className="text-gray-300">•</span>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{post.readTime}</span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="text-foreground text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-foreground leading-relaxed mb-6 line-clamp-3">
                    {post.description}
                  </p>

                  {/* Read More Link */}
                  <div className="inline-flex">
                    <Link 
                      to={post.href} 
                      className="px-4 py-2 rounded-[12px] border-[1.5px] border-blue-500/30 bg-white text-primary hover:bg-primary hover:text-white transition-colors font-medium flex items-center gap-2 group"
                    >
                      Read More 
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Button className="rounded-[16px] border-[1.5px] border-blue-500/30 bg-white text-primary hover:bg-primary hover:text-white transition-colors px-8 py-3 font-medium">
            <Link to="/" className="flex items-center gap-2">
              ← Back to Home
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Blogs;