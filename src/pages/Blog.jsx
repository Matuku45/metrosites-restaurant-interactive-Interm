import React from "react";
import { motion } from "framer-motion";

export default function Blog() {
  const blogPosts = [
    {
      title: "5 Ways to Enjoy Your Morning Coffee",
      desc: "Discover the art of brewing the perfect cup and pairing it with our pastries.",
      date: "Oct 20, 2025",
    },
    {
      title: "Seasonal Ingredients: Why Fresh Matters",
      desc: "A guide to why we always choose fresh, local ingredients for our dishes.",
      date: "Oct 15, 2025",
    },
    {
      title: "Wine Pairings for Every Dish",
      desc: "Learn how to enhance your meal experience with our sommelier's tips.",
      date: "Oct 10, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-900 text-white py-20 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-12 text-center text-yellow-300"
      >
        Our <span className="text-white">Blog</span>
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-10">
        {blogPosts.map((post, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-blue-800/40 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-yellow-300"
          >
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-200 mb-4">{post.desc}</p>
            <p className="text-gray-400 text-sm">{post.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
