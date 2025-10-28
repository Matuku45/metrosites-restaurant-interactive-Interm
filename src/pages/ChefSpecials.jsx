import React from "react";
import { motion } from "framer-motion";
import { ChefHat } from "lucide-react";

export default function ChefSpecials() {
  const specials = [
    { name: "Grilled Salmon", desc: "Served with roasted vegetables and lemon butter.", price: "$25" },
    { name: "Truffle Pasta", desc: "Fresh pasta tossed in creamy truffle sauce.", price: "$22" },
    { name: "Beef Wellington", desc: "Tender beef with mushroom duxelles wrapped in puff pastry.", price: "$30" },
  ];

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

      <div className="grid md:grid-cols-3 gap-10">
        {specials.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-blue-800/50 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-yellow-300"
          >
            <ChefHat className="w-10 h-10 text-yellow-300 mb-4 mx-auto" />
            <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
            <p className="text-gray-300 mb-4">{item.desc}</p>
            <p className="text-yellow-300 font-bold">{item.price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
