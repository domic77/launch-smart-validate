import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "The Future of Validation: AI-Powered Insights",
    excerpt: "Discover how artificial intelligence is revolutionizing data validation, offering unparalleled accuracy and efficiency for businesses of all sizes.",
    author: "Alice Johnson",
    date: "July 15, 2025",
  },
  {
    title: "Streamlining Your Workflow with Automated Validation",
    excerpt: "Learn how automating your validation processes can save time, reduce errors, and free up your team to focus on more strategic tasks.",
    author: "Bob Williams",
    date: "July 10, 2025",
  },
  {
    title: "Ensuring Data Integrity in a Complex World",
    excerpt: "In an era of big data, maintaining data integrity is crucial. Explore best practices and tools to keep your information reliable and trustworthy.",
    author: "Charlie Brown",
    date: "July 5, 2025",
  },
  {
    title: "The Impact of Real-time Validation on Business Decisions",
    excerpt: "Understand how real-time data validation provides immediate feedback, enabling faster and more informed business decisions.",
    author: "Diana Miller",
    date: "June 28, 2025",
  },
];

const Blog: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mt-auto">
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
