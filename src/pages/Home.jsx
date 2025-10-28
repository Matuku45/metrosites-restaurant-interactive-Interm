import React from "react";
import { motion } from "framer-motion";
import { UtensilsCrossed, Star } from "lucide-react";
import { Link } from "react-router-dom";
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
      {/* Hero Carousel */}
      <Swiper loop autoplay={{ delay: 4000 }} className="w-full h-[70vh]">
        {heroImages.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="bg-black/50 p-6 rounded-xl text-center max-w-xl">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                  Welcome to <span className="text-yellow-300">MetroBistro</span>
                </h1>
                <p className="text-gray-200 mb-6">
                  Experience culinary artistry crafted with passion and flavor.
                </p>
                <Link
                  to="/reservations"
                  className="px-6 py-3 bg-yellow-300 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition"
                >
                  Reserve Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Featured Section */}
      <div className="container mx-auto text-center py-16">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          Today’s <span className="text-yellow-300">Specials</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {["Grilled Salmon", "Steak & Fries", "Pasta Alfredo"].map(
            (dish, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-blue-800/30 backdrop-blur-lg rounded-2xl p-6 shadow-lg"
              >
                <UtensilsCrossed className="w-8 h-8 text-yellow-300 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{dish}</h3>
                <p className="text-gray-300 text-sm">
                  Served fresh with love and passion.
                </p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </motion.div>
  );
}
