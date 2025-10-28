import React from "react";
import { motion } from "framer-motion";

// Import your images
import food from "../assets/food.jpg";
import winetesting from "../assets/winetesting.webp";
import jazevent from "../assets/jazevent.webp";
import chef from "../assets/chef.jpg";
import chef2 from "../assets/chef2.jpg";

export default function Gallery() {
  const images = [
    { src: food, caption: "Delicious Cuisine" },
    { src: winetesting, caption: "Wine Testing Experience" },
    { src: jazevent, caption: "Live Jazz Evening" },
    { src: chef, caption: "Chef at Work" },
    { src: chef2, caption: "Gourmet Preparation" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-indigo-900 to-blue-900 py-20 px-6 text-white">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 animate-gradient-x"
      >
        Our <span className="text-white/80">Gallery</span>
      </motion.h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-3xl shadow-2xl border border-yellow-300 cursor-pointer group"
          >
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-4 left-4 text-white font-semibold text-lg bg-black/50 px-3 py-1 rounded-lg"
            >
              {img.caption}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
