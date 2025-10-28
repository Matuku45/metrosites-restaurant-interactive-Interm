import React, { useState } from "react";
import { motion } from "framer-motion";
import { UtensilsCrossed, Star, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const mainLinks = [
    { name: "Home", to: "/" },
    { name: "Menu", to: "/menu" },
    { name: "Chef Specials", to: "/chef-specials" },
    { name: "Offers", to: "/offers" },
    { name: "Events", to: "/events" },
  ];

  const extraLinks = [
  
    { name: "Gallery", to: "/gallery" },
   
    { name: "Blog", to: "/blog" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-900 via-blue-800 to-sky-700 shadow-2xl border-b border-blue-600"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-3 text-white">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-3 md:mb-0">
          <UtensilsCrossed className="w-8 h-8 text-yellow-300 drop-shadow-md" />
          <h1 className="text-2xl font-extrabold tracking-wide">
            Metro<span className="text-yellow-300">Sites</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-col text-[1rem] font-medium text-white space-y-1 items-center">
          <div className="flex gap-6">
            {mainLinks.map((link, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, color: "#FACC15" }}
                className="relative group"
              >
                <Link to={link.to}>
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="h-[1px] w-[90%] bg-blue-500/50 my-1 rounded-full"></div>

          <div className="flex gap-6">
            {extraLinks.map((link, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, color: "#FACC15" }}
                className="relative group"
              >
                <Link to={link.to}>
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X className="w-7 h-7 text-yellow-300" /> : <Menu className="w-7 h-7 text-yellow-300" />}
        </button>

        {/* Star Icon */}
        <Star className="hidden md:block w-6 h-6 text-yellow-300 drop-shadow-md" />
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gradient-to-b from-blue-800 via-blue-700 to-indigo-900 text-white text-center shadow-lg"
        >
          {[...mainLinks, ...extraLinks].map((link, i) => (
            <Link
              key={i}
              to={link.to}
              className="block py-3 border-b border-blue-600 hover:bg-blue-900 hover:text-yellow-300 transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
