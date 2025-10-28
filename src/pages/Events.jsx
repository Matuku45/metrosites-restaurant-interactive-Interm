import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Events() {
  const events = [
    { name: "Wine Tasting Night", date: "Nov 10, 2025", desc: "Experience a curated selection of fine wines." },
    { name: "Live Jazz Evening", date: "Nov 15, 2025", desc: "Smooth jazz paired with a gourmet menu." },
    { name: "Holiday Feast", date: "Dec 20, 2025", desc: "Celebrate the holidays with special seasonal dishes." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-950 text-white py-20 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-12 text-center text-yellow-300"
      >
        Upcoming <span className="text-white">Events</span>
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-10">
        {events.map((event, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-blue-800/50 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-yellow-300"
          >
            <Star className="w-10 h-10 text-yellow-300 mb-4 mx-auto animate-pulse" />
            <h2 className="text-2xl font-bold mb-2">{event.name}</h2>
            <p className="text-gray-300 mb-2">{event.desc}</p>
            <p className="text-yellow-300 font-semibold">{event.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
