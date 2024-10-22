// Enhanced Blog.js
import React, { useState } from "react";

const BlogPost = ({ title, excerpt, image, category }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <span className="inline-block bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm mb-2">
        {category}
      </span>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <a href="#" className="text-purple-600 font-semibold hover:underline">
        Read More
      </a>
    </div>
  </div>
);

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      title: "5 Essential Exercises for Core Strength",
      excerpt:
        "Discover the key movements that will help you build a strong and stable core, improving your overall fitness and posture.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "Fitness",
    },
    {
      title: "Nutrition Tips for Muscle Gain",
      excerpt:
        "Learn about the best foods and eating habits to support muscle growth and recovery, maximizing your strength training efforts.",
      image:
        "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "Nutrition",
    },
    {
      title: "The Benefits of High-Intensity Interval Training",
      excerpt:
        "Explore how HIIT can revolutionize your workout routine, helping you burn fat and improve cardiovascular health in less time.",
      image:
        "https://images.unsplash.com/photo-1571732154690-f6d1c3e5178a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "Fitness",
    },
    // Add more blog posts as needed
  ];

  const categories = ["All", "Fitness", "Nutrition", "Lifestyle"];

  const filteredPosts = blogPosts.filter((post) => {
    return (
      (selectedCategory === "All" || post.category === selectedCategory) &&
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-600">
          Fitness Tips & Insights
        </h2>
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/3 p-3 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-3 border-t border-b border-r border-gray-300 rounded-r focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <BlogPost
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                category={post.category}
              />
            ))
          ) : (
            <p className="text-center col-span-3">No posts found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
