import React, { useState } from "react";
import { motion } from "framer-motion";
import { UtensilsCrossed, Star, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Menu", href: "#" },
    { name: "About", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-sky-700 via-blue-600 to-indigo-700 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4 text-white">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <UtensilsCrossed className="w-8 h-8 text-yellow-300" />
          <h1 className="text-2xl font-extrabold tracking-wide">
            Metro<span className="text-yellow-300">Bistro</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-lg font-medium">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? (
            <X className="w-7 h-7 text-yellow-300" />
          ) : (
            <Menu className="w-7 h-7 text-yellow-300" />
          )}
        </button>

        {/* Star icon for accent */}
        <Star className="hidden md:block w-6 h-6 text-yellow-300" />
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gradient-to-b from-blue-700 to-indigo-800 text-white text-center shadow-md"
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block py-3 border-b border-blue-600 hover:bg-blue-800 transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
