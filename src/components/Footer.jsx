import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  UtensilsCrossed,
} from "lucide-react";

export default function Footer() {
  const footerLinks = [
    {
      title: "Explore",
      links: ["Home", "Menu", "Chef Specials", "Offers", "Events", "Gallery"],
    },
    {
      title: "About",
      links: ["Our Story", "Testimonials", "Blog", "About Us", "Contact"],
    },
    {
      title: "Reservations",
      links: ["Book a Table", "Private Dining", "Gift Cards", "Catering"],
    },
  ];

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "#" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "#" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-gray-100 pt-12 pb-6 mt-16"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <UtensilsCrossed className="w-8 h-8 text-yellow-300" />
            <h1 className="text-2xl font-extrabold text-white">
              Metro<span className="text-yellow-300">Sites</span>
            </h1>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            A modern bistro offering fine dining with a cozy atmosphere.
            Experience culinary art crafted with love and passion.
          </p>

          {/* Contact Info */}
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-yellow-300" />
              <span>123 Bistro Avenue, Johannesburg, SA</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-yellow-300" />
              <span>+27 81 555 6789</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-yellow-300" />
              <span>info@metrosites.co.za</span>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        {footerLinks.map((section, idx) => (
          <div key={idx}>
            <h2 className="text-lg font-semibold text-yellow-300 mb-3">
              {section.title}
            </h2>
            <ul className="space-y-2 text-sm">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-yellow-300 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Social + Copyright */}
      <div className="border-t border-blue-700 mt-10 pt-6 text-center">
        <div className="flex justify-center gap-5 mb-4">
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="bg-blue-700/30 p-2 rounded-full hover:bg-yellow-300 hover:text-blue-900 transition-all duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} MetroSites Restaurant. All rights
          reserved.
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Designed with ❤️ by <span className="text-yellow-300">Thabiso</span>
        </p>
      </div>
    </motion.footer>
  );
}
