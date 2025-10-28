import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-24 pb-16 bg-gradient-to-b from-sky-900 via-blue-900 to-indigo-900 text-white min-h-screen"
    >
      <Toaster position="top-center" />
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center mb-8">
          Contact <span className="text-yellow-300">Us</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-blue-800/40 backdrop-blur-md p-8 rounded-2xl shadow-xl"
          >
            <label className="block mb-4">
              <span className="text-sm font-semibold">Name</span>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-3 mt-1 rounded-md bg-blue-900/50 border border-blue-700 focus:ring-2 focus:ring-yellow-300 outline-none"
              />
            </label>

            <label className="block mb-4">
              <span className="text-sm font-semibold">Email</span>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-3 mt-1 rounded-md bg-blue-900/50 border border-blue-700 focus:ring-2 focus:ring-yellow-300 outline-none"
              />
            </label>

            <label className="block mb-6">
              <span className="text-sm font-semibold">Message</span>
              <textarea
                required
                rows="4"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full p-3 mt-1 rounded-md bg-blue-900/50 border border-blue-700 focus:ring-2 focus:ring-yellow-300 outline-none"
              ></textarea>
            </label>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-yellow-300 text-blue-900 font-bold py-3 rounded-lg hover:bg-yellow-400 transition"
            >
              <Send className="w-5 h-5" /> Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-3">
              <MapPin className="text-yellow-300 w-6 h-6" />
              <p>123 Bistro Avenue, Johannesburg, SA</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-yellow-300 w-6 h-6" />
              <p>+27 81 555 6789</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-yellow-300 w-6 h-6" />
              <p>info@metrosites.co.za</p>
            </div>

            <iframe
              className="w-full h-64 rounded-xl border-0"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.1999!2d28.0436!3d-26.2023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c8df!2sJohannesburg!5e0!3m2!1sen!2sza!4v1680000000000"
              title="MetroSites Map"
            ></iframe>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
