
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '@/lib/posts';
import { Card, CardContent } from "@/components/ui/card";

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.href === `/blog/${slug}`);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-background py-12 px-4 pt-28">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto rounded-2xl border bg-background prose prose-lg">
          <CardContent className="pt-10">
            <Link to="/blog" className="text-blue-600 hover:underline mb-4 block">← Back to Blog</Link>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-muted-foreground mb-8">{post.date}</p>
            <div className="prose max-w-none">
              <p>{post.description}</p>
              <p>The rise of RESTful APIs has been a paradigm shift in web development. These APIs, often using JSON for data exchange, are the backbone of countless applications. But as applications grow in complexity, so do the challenges of managing data fetching. This is where GraphQL, a query language for APIs, comes into play. This post will explore the reasons why you should consider using GraphQL in your next project and how it compares to traditional REST APIs.</p>
              <figure>
                <div className="w-full h-96 bg-gradient-to-br from-[#005EDA] to-[#009FC3] rounded-xl flex items-center justify-center">
                  <span className="text-white text-5xl font-thin">iValidate</span>
                </div>
                <figcaption className="mt-3 text-sm text-center text-muted-foreground">A conceptual illustration of GraphQL's data fetching capabilities.</figcaption>
              </figure>
              <h3 className="text-xl font-semibold mt-6 mb-4">The Limitations of REST</h3>
              <p>While REST is a powerful and widely adopted standard, it has its limitations, especially in the context of complex applications. One of the main issues is over-fetching or under-fetching of data. With REST, the server defines the structure of the data returned by an endpoint. This means that the client often receives more data than it needs (over-fetching) or has to make multiple requests to get all the required data (under-fetching).</p>
              <h3 className="text-xl font-semibold mt-6 mb-4">Enter GraphQL: A Query Language for APIs</h3>
              <p>GraphQL addresses these issues by giving the client the power to ask for exactly what it needs. Instead of multiple endpoints that return fixed data structures, a GraphQL API typically exposes a single endpoint that accepts queries. These queries specify the exact data requirements of the client, and the server responds with a JSON object that mirrors the structure of the query.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogPost;
