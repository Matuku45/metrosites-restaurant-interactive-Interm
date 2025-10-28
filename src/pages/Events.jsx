import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Coffee, Music, Calendar, X } from "lucide-react";

// Import event images
import eventFiesta from "../assets/eventholidayfiest.webp";
import jazzEvent from "../assets/jazevent.webp";
import happyHour2 from "../assets/happyhourspecial2.webp";

export default function Events() {
  const [selected, setSelected] = useState(null);

  const events = [
    {
      id: 1,
      name: "Wine Tasting Night",
      date: "Nov 10, 2025",
      desc: "Christmas Dish.",
      price: 250,
      img: eventFiesta,
      icon: <Coffee className="w-6 h-6 text-yellow-300" />,
      badge: "Featured",
    },
    {
      id: 2,
      name: "Live Jazz Evening",
      date: "Nov 15, 2025",
      desc: "Smooth jazz paired with a gourmet menu. Enjoy live performances from top artists.",
      price: 300,
      img: jazzEvent,
      icon: <Music className="w-6 h-6 text-purple-300" />,
      badge: "Limited Seats",
    },
    {
      id: 3,
      name: "Holiday Feast",
      date: "Dec 20, 2025",
      desc: "Celebrate the holidays with special seasonal dishes, desserts, and festive drinks.",
      price: 450,
      img: happyHour2,
      icon: <Star className="w-6 h-6 text-yellow-300" />,
      badge: "Seasonal",
    },
  ];

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-ZA", { style: "currency", currency: "ZAR" }).format(amount);

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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {events.map((event) => (
          <motion.div
            key={event.id}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelected(event)}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative cursor-pointer bg-blue-800/50 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-yellow-300 group"
          >
            <div className="relative">
              <img
                src={event.img}
                alt={event.name}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute top-4 right-4">{event.icon}</div>
              {event.badge && (
                <span className="absolute top-4 left-4 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  {event.badge}
                </span>
              )}
            </div>
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold mb-2">{event.name}</h2>
              <p className="text-gray-200 mb-2 line-clamp-3">{event.desc}</p>
              <p className="text-yellow-300 font-bold">{formatCurrency(event.price)}</p>
              <p className="text-gray-400 mt-1">{event.date}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for event details */}
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
                  alt={selected.name}
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
                <h2 className="text-3xl font-bold mb-4 text-yellow-300">{selected.name}</h2>
                <p className="text-gray-200 mb-4">{selected.desc}</p>
                <p className="text-yellow-300 font-bold text-xl mb-2">
                  {formatCurrency(selected.price)}
                </p>
                <p className="text-gray-400 italic">{selected.date}</p>
                {selected.badge && (
                  <span className="inline-block bg-yellow-400 text-blue-900 px-4 py-1 rounded-full font-bold shadow-lg mt-2">
                    {selected.badge}
                  </span>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
