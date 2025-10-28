import React from "react";
import { motion } from "framer-motion";
import { UtensilsCrossed, Star, ChefHat, Coffee, Wine } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  const heroImages = [
    "/images/hero1.webp",
    "/images/hero2.webp",
    "/images/hero3.webp",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-20 bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-900 text-white min-h-screen"
    >
      {/* 🌟 Hero Carousel */}
      <Swiper loop autoplay={{ delay: 4000 }} className="w-full h-[75vh]">
        {heroImages.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-[75vh] bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="bg-black/60 p-8 rounded-2xl text-center max-w-2xl backdrop-blur-sm shadow-xl">
                <h1 className="text-5xl font-extrabold mb-4 tracking-wide">
                  Welcome to{" "}
                  <span className="text-yellow-300">MetroSites Bistro</span>
                </h1>
                <p className="text-gray-200 mb-6 text-lg">
                  Where taste meets artistry — crafted with love, passion, and a
                  modern twist.
                </p>
                <button className="px-8 py-3 bg-yellow-300 text-blue-900 font-semibold rounded-xl hover:bg-yellow-400 transition-all shadow-md">
                  Book a Table
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🍽 Featured Section */}
      <div className="container mx-auto text-center py-20 px-6">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12"
        >
          Today’s <span className="text-yellow-300">Highlights</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              icon: <ChefHat className="w-10 h-10 text-yellow-300 mb-4 mx-auto" />,
              name: "Chef’s Specials",
              desc: "Handcrafted dishes inspired by global cuisine.",
            },
            {
              icon: <Coffee className="w-10 h-10 text-yellow-300 mb-4 mx-auto" />,
              name: "Morning Delights",
              desc: "Start your day with the perfect brew and pastry.",
            },
            {
              icon: <Wine className="w-10 h-10 text-yellow-300 mb-4 mx-auto" />,
              name: "Evening Vibes",
              desc: "Unwind with fine wine and soothing ambiance.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-blue-800/30 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-blue-700 hover:border-yellow-300"
            >
              {item.icon}
              <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ⭐ Call to Action */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center py-16 bg-gradient-to-r from-blue-800 via-blue-700 to-indigo-800"
      >
        <Star className="w-10 h-10 text-yellow-300 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">
          Experience <span className="text-yellow-300">Fine Dining</span> Like Never Before
        </h2>
        <button className="px-10 py-3 bg-yellow-300 text-blue-900 font-bold rounded-xl hover:bg-yellow-400 transition-all shadow-md">
          Explore Menu
        </button>
      </motion.div>
    </motion.div>
  );
}
