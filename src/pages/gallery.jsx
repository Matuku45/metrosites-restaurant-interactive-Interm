import React from "react";
import { motion } from "framer-motion";

import food from "../assets/food.jpg";
import rest2 from "../assets/rest2.webp";
import rest5 from "../assets/rest5.webp";

export default function Gallery() {
  const images = [food, rest2, rest5];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-indigo-900 to-blue-900 py-20 px-6 text-white">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-12 text-center text-yellow-300"
      >
        Our <span className="text-white">Gallery</span>
      </motion.h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden rounded-3xl shadow-2xl border border-yellow-300"
          >
            <img src={img} alt={`Gallery ${i}`} className="w-full h-64 object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
