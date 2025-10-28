import React from "react";
import { motion } from "framer-motion";
import { UtensilsCrossed, Star } from "lucide-react";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-r from-lightBlue via-midBlue to-deepBlue text-white shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <UtensilsCrossed className="w-8 h-8 text-white" />
          <h1 className="text-2xl font-bold">MetroSites Restaurant</h1>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6">
          <a href="#" className="hover:text-yellow-200 transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-yellow-200 transition-colors">
            Menu
          </a>
          <a href="#" className="hover:text-yellow-200 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-yellow-200 transition-colors">
            Contact
          </a>
        </nav>

        {/* Star icon */}
        <Star className="w-6 h-6 text-yellow-300" />
      </div>
    </motion.header>
  );
}
