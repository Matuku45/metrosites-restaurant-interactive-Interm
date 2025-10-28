import React from "react";
import { motion } from "framer-motion";
import { Coffee, Leaf, Star } from "lucide-react";

// Import blog images
import tea from "../assets/fivewaystomaketea.webp";
import ingredients from "../assets/ingridients.webp";
import wine from "../assets/WINEPAIRING.webp";

export default function Blog() {
  const blogPosts = [
    {
      title: "5 Ways to Enjoy Your Morning Coffee",
      img: tea,
      desc: "Discover the art of brewing the perfect cup, pairing it with pastries, and creating a cozy morning ritual to kickstart your day.",
      date: "Oct 20, 2025",
      icon: <Coffee className="w-6 h-6 text-yellow-300" />,
    },
    {
      title: "Seasonal Ingredients: Why Fresh Matters",
      img: ingredients,
      desc: "A deep dive into why fresh, local, and seasonal ingredients make all the difference in taste, nutrition, and presentation.",
      date: "Oct 15, 2025",
      icon: <Leaf className="w-6 h-6 text-green-400" />,
    },
    {
      title: "Wine Pairings for Every Dish",
      img: wine,
      desc: "Learn how to elevate your dining experience with wine pairing tips from our expert sommelier, matching flavors and aromas perfectly.",
      date: "Oct 10, 2025",
      icon: <Star className="w-6 h-6 text-yellow-300" />,
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
            className="relative bg-blue-800/30 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-yellow-300"
          >
            <div className="relative">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute top-4 right-4">{post.icon}</div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
              <p className="text-gray-200 mb-4">{post.desc}</p>
              <p className="text-gray-400 text-sm">{post.date}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Extra Section: Newsletter CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-20 bg-gradient-to-r from-purple-900 via-blue-800 to-indigo-900 p-12 rounded-3xl text-center shadow-2xl border border-yellow-300"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Subscribe to Our <span className="text-yellow-300">Newsletter</span>
        </h2>
        <p className="text-gray-300 mb-6">
          Get the latest updates, recipes, and special offers delivered straight to your inbox.
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="px-6 py-3 rounded-l-2xl border border-yellow-300 text-black outline-none"
        />
        <button className="px-6 py-3 bg-yellow-300 rounded-r-2xl font-bold text-blue-900 hover:bg-yellow-400 transition-all">
          Subscribe
        </button>
      </motion.div>
    </div>
  );
}
