import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Offers() {
  const offers = [
    { title: "Happy Hour", desc: "50% off all drinks from 5 PM - 7 PM.", valid: "Valid Mon-Fri" },
    { title: "Weekend Special", desc: "Buy 1 get 1 free on desserts.", valid: "Valid Sat-Sun" },
    { title: "Birthday Treat", desc: "Free dessert on your birthday!", valid: "All year round" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-950 text-white py-20 px-6">
      <motion.h1 className="text-5xl font-bold mb-12 text-center text-yellow-300">
        Special <span className="text-white">Offers</span>
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-10">
        {offers.map((offer, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-blue-800/50 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-yellow-300"
          >
            <Star className="w-10 h-10 text-yellow-300 mb-4 mx-auto animate-pulse" />
            <h2 className="text-2xl font-bold mb-2">{offer.title}</h2>
            <p className="text-gray-300 mb-2">{offer.desc}</p>
            <p className="text-yellow-300 font-semibold">{offer.valid}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
