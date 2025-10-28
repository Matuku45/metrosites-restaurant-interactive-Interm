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
    {
      src: food,
      caption: "Delicious Cuisine",
      desc: "Savor our signature dishes crafted with fresh, high-quality ingredients and a touch of culinary artistry.",
    },
    {
      src: winetesting,
      caption: "Wine Testing Experience",
      desc: "Join us for an exclusive wine tasting session, pairing exceptional wines with exquisite bites.",
    },
    {
      src: jazevent,
      caption: "Live Jazz Evening",
      desc: "Immerse yourself in smooth jazz while enjoying gourmet food and a cozy atmosphere.",
    },
    {
      src: chef,
      caption: "Chef at Work",
      desc: "Watch our expert chefs in action as they prepare your favorite dishes with passion and precision.",
    },
    {
      src: chef2,
      caption: "Gourmet Preparation",
      desc: "Every dish is meticulously plated to delight both the eyes and the taste buds.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-indigo-900 to-blue-900 py-20 px-6 text-white">
      
      {/* Section Intro */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 animate-gradient-x">
          Our <span className="text-white/80">Gallery</span>
        </h1>
        <p className="text-gray-300 text-lg">
          Explore a curated selection of our finest culinary moments, from mouthwatering dishes to elegant events and live experiences. Every image tells a story of taste, passion, and celebration.
        </p>
      </motion.div>

      {/* Gallery Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl shadow-2xl border border-yellow-300 cursor-pointer group bg-gradient-to-t from-blue-900/60 via-indigo-900/50 to-transparent"
          >
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Caption & Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-4 left-4 right-4 text-white p-4 bg-black/50 rounded-xl backdrop-blur-md shadow-lg"
            >
              <h3 className="font-bold text-xl mb-2">{img.caption}</h3>
              <p className="text-gray-200 text-sm">{img.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
