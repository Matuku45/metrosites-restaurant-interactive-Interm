import React from "react";
import { motion } from "framer-motion";
import { ChefHat, Coffee, Wine, Star, Leaf } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import food from "../assets/food.jpg";
import rest2 from "../assets/rest2.webp";
import rest5 from "../assets/rest5.webp";

export default function Home() {
  const heroImages = [food, rest2, rest5];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative text-white overflow-hidden"
    >
      {/* 🌈 Animated Gradient Background */}
      <div className="absolute inset-0 -z-20">
        <motion.div
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="w-full h-full bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 bg-[length:200%_200%]"
        />
      </div>

      {/* 🌟 Background Carousel */}
      <div className="absolute inset-0 -z-10">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="w-full h-full"
        >
          {heroImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover brightness-50"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✨ Floating Icons */}
      <motion.div
        className="absolute top-10 left-10 space-y-8"
        animate={{ y: [0, -20, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear", type: "tween" }}
      >
        <Coffee className="w-8 h-8 text-yellow-400 opacity-70" />
        <Leaf className="w-6 h-6 text-green-400 opacity-60" />
      </motion.div>

      {/* ✨ Welcome Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32 md:py-40">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-black/40 backdrop-blur-xl p-10 rounded-3xl shadow-2xl max-w-3xl border border-yellow-400"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Welcome to <span className="text-yellow-300">MetroSites Bistro</span>
          </h1>
          <p className="text-gray-200 mb-8 text-lg md:text-xl">
            Where taste meets artistry — crafted with love, passion, and a modern twist.
          </p>
          <motion.button
            whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
            transition={{ type: "tween", duration: 0.4 }}
            className="px-8 py-3 bg-yellow-300 text-blue-900 font-semibold rounded-2xl hover:bg-yellow-400 transition-all shadow-lg"
          >
            Book a Table
          </motion.button>
        </motion.div>
      </div>

      {/* 🍽 Featured Highlights Section */}
      <div className="relative z-10 container mx-auto text-center py-24 px-6">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          Today’s <span className="text-yellow-300">Highlights</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              icon: <ChefHat className="w-12 h-12 text-yellow-300 mb-4 mx-auto animate-bounce" />,
              name: "Chef’s Specials",
              desc: "Handcrafted dishes inspired by global cuisine.",
            },
            {
              icon: <Coffee className="w-12 h-12 text-yellow-300 mb-4 mx-auto animate-bounce delay-200" />,
              name: "Morning Delights",
              desc: "Start your day with the perfect brew and pastry.",
            },
            {
              icon: <Wine className="w-12 h-12 text-yellow-300 mb-4 mx-auto animate-bounce delay-400" />,
              name: "Evening Vibes",
              desc: "Unwind with fine wine and soothing ambiance.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, y: -5, rotate: [0, 2, -2, 0] }}
              transition={{ type: "tween", duration: 0.4 }}
              className="bg-gradient-to-t from-blue-900/60 to-indigo-900/40 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-yellow-400 hover:border-yellow-300"
            >
              {item.icon}
              <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-300 text-sm md:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ⭐ Call to Action */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center py-20 bg-gradient-to-r from-purple-900 via-blue-800 to-indigo-900"
      >
        <Star className="w-12 h-12 text-yellow-300 mx-auto mb-6 animate-pulse" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Experience <span className="text-yellow-300">Fine Dining</span> Like Never Before
        </h2>
        <motion.button
          whileHover={{ scale: 1.1, rotate: [0, 1, -1, 0] }}
          transition={{ type: "tween", duration: 0.3 }}
          className="px-12 py-4 bg-yellow-300 text-blue-900 font-bold rounded-2xl hover:bg-yellow-400 transition-all shadow-2xl"
        >
          Explore Menu
        </motion.button>
      </motion.div>

      {/* 🍴 Extra Section: Why Choose Us */}
      <div className="relative z-10 container mx-auto text-center py-24 px-6 mb-32">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-yellow-300"
        >
          Why Choose <span className="text-white">Us?</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: <Coffee className="w-10 h-10 text-yellow-400 mb-3 mx-auto animate-bounce" />,
              title: "Premium Ingredients",
              desc: "We source the finest ingredients for every dish.",
            },
            {
              icon: <Leaf className="w-10 h-10 text-green-400 mb-3 mx-auto animate-bounce delay-200" />,
              title: "Eco-Friendly",
              desc: "Sustainable practices in every part of our kitchen.",
            },
            {
              icon: <ChefHat className="w-10 h-10 text-yellow-400 mb-3 mx-auto animate-bounce delay-400" />,
              title: "Expert Chefs",
              desc: "Trained professionals delivering perfect taste every time.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-gradient-to-t from-indigo-900/50 to-blue-900/50 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-yellow-400 hover:border-yellow-300"
            >
              {item.icon}
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm md:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
