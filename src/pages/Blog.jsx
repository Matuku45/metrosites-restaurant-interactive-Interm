import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Leaf, Star, X } from "lucide-react";

// Import blog images
import tea from "../assets/fivewaystomaketea.webp";
import ingredients from "../assets/ingridients.webp";
import wine from "../assets/WINEPAIRING.webp";

export default function Blog() {
  const [selected, setSelected] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "5 Ways to Enjoy Your Morning Coffee",
      img: tea,
      desc: "Discover the art of brewing the perfect cup, pairing it with pastries, and creating a cozy morning ritual to kickstart your day. Learn tips on flavor combinations, brewing techniques, and ways to savor every sip.",
      date: "Oct 20, 2025",
      icon: <Coffee className="w-6 h-6 text-yellow-300" />,
    },
    {
      id: 2,
      title: "Seasonal Ingredients: Why Fresh Matters",
      img: ingredients,
      desc: "A deep dive into why fresh, local, and seasonal ingredients make all the difference in taste, nutrition, and presentation. From farm to table, explore the benefits of quality produce in every dish.",
      date: "Oct 15, 2025",
      icon: <Leaf className="w-6 h-6 text-green-400" />,
    },
    {
      id: 3,
      title: "Wine Pairings for Every Dish",
      img: wine,
      desc: "Learn how to elevate your dining experience with wine pairing tips from our expert sommelier. Understand flavor profiles, balance, and how to match wine with appetizers, mains, and desserts for a full culinary journey.",
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

      {/* Blog Cards */}
      <div className="grid md:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelected(post)}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative cursor-pointer bg-blue-800/30 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-yellow-300"
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
              <p className="text-gray-200 mb-4 line-clamp-3">{post.desc}</p>
              <p className="text-gray-400 text-sm">{post.date}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-t from-blue-900 via-indigo-900 to-black rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden"
            >
              <div className="relative">
                <img
                  src={selected.img}
                  alt={selected.title}
                  className="w-full h-96 object-cover"
                />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4 text-yellow-300">
                  {selected.title}
                </h2>
                <p className="text-gray-200 mb-6">{selected.desc}</p>
                <p className="text-gray-400 italic">{selected.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Newsletter CTA */}
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
