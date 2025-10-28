import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChefHat, Star, Coffee, Leaf, X, Zap } from "lucide-react"; // ✅ Replaced Fire with Zap

// Import dish images
import salmon from "../assets/grilledsalmon.webp";
import beef from "../assets/beefwillington.webp";
import pasta from "../assets/pasta.webp";
import milkshake from "../assets/milkshakespecial.jpg";
import eventFiesta from "../assets/eventholidayfiest.webp";
import happyHour1 from "../assets/happyhourspecial.webp";
import wineTest from "../assets/winetesting.webp";

export default function ChefSpecials() {
  const [selected, setSelected] = useState(null);

  const specials = [
    {
      id: 1,
      name: "Grilled Salmon",
      img: salmon,
      desc: "Freshly grilled salmon with lemon butter sauce, served with roasted vegetables and fragrant rice. A light and flavorful dish for a perfect dinner.",
      price: 220,
      icon: <Star className="w-6 h-6 text-yellow-300" />,
      badge: "Chef’s Pick",
    },
    {
      id: 2,
      name: "Truffle Pasta",
      img: pasta,
      desc: "Fresh pasta tossed in creamy truffle sauce with parmesan, garlic, and fresh herbs. The perfect indulgence for pasta lovers.",
      price: 150,
      icon: <Leaf className="w-6 h-6 text-green-400" />,
      badge: "Limited Edition",
    },
    {
      id: 3,
      name: "Beef Wellington",
      img: beef,
      desc: "Tender beef with mushroom duxelles wrapped in puff pastry, served with red wine sauce. A luxurious classic for special occasions.",
      price: 350,
      icon: <ChefHat className="w-6 h-6 text-red-400" />,
      badge: "Customer Favorite",
    },
    {
      id: 4,
      name: "Chocolate Milkshake Special",
      img: milkshake,
      desc: "Decadent chocolate milkshake topped with whipped cream and chocolate drizzle. Perfect for dessert lovers and chocolate enthusiasts.",
      price: 65,
      icon: <Coffee className="w-6 h-6 text-yellow-300" />,
      badge: "Sweet Treat",
    },
    {
      id: 5,
      name: "Holiday Fiesta Platter",
      img: eventFiesta,
      desc: "A festive platter with a mix of seasonal delicacies. Ideal for parties and celebrations, bursting with flavors.",
      price: 450,
      icon: <Zap className="w-6 h-6 text-red-500" />, // ✅ Replaced Fire with Zap
      badge: "Seasonal",
    },
    {
      id: 6,
      name: "Happy Hour Special",
      img: happyHour1,
      desc: "Enjoy our chef’s special bites during happy hour. Perfect for unwinding with friends and family.",
      price: 180,
      icon: <Coffee className="w-6 h-6 text-yellow-300" />,
      badge: "Limited Time",
    },
    {
      id: 7,
      name: "Wine Tasting Selection",
      img: wineTest,
      desc: "A curated selection of wines paired with small bites. Discover new flavors and enhance your dining experience.",
      price: 300,
      icon: <Star className="w-6 h-6 text-purple-300" />,
      badge: "Exclusive",
    },
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-blue-900 to-blue-950 text-white py-20 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-12 text-center text-yellow-300"
      >
        Chef’s <span className="text-white">Specials</span>
      </motion.h1>

      {/* Specials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {specials.map((dish) => (
          <motion.div
            key={dish.id}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelected(dish)}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative cursor-pointer bg-blue-800/50 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-yellow-300 group"
          >
            <div className="relative">
              <img
                src={dish.img}
                alt={dish.name}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute top-4 right-4">{dish.icon}</div>
              {dish.badge && (
                <span className="absolute top-4 left-4 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  {dish.badge}
                </span>
              )}
            </div>
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold mb-2">{dish.name}</h2>
              <p className="text-gray-200 mb-4 line-clamp-3">{dish.desc}</p>
              <p className="text-yellow-300 font-bold">{formatCurrency(dish.price)}</p>
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
                <p className="text-yellow-300 font-bold text-xl mb-4">
                  {formatCurrency(selected.price)}
                </p>
                {selected.badge && (
                  <span className="inline-block bg-yellow-400 text-blue-900 px-4 py-1 rounded-full font-bold shadow-lg">
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
