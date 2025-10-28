import React from "react";
import { motion } from "framer-motion";
import { Users, Heart, Award } from "lucide-react";

export default function About() {
  const stats = [
    { icon: <Heart />, label: "Happy Customers", value: "10K+" },
    { icon: <Users />, label: "Team Members", value: "25+" },
    { icon: <Award />, label: "Awards Won", value: "8+" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-24 pb-16 bg-gradient-to-b from-indigo-900 via-blue-900 to-sky-900 text-white min-h-screen"
    >
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-6">
          Our <span className="text-yellow-300">Story</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300 mb-12">
          Founded in 2010, MetroBistro began as a small family restaurant and
          has grown into one of Johannesburg’s most beloved dining spots. We
          believe in blending tradition with modern cuisine to create an
          unforgettable experience.
        </p>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-blue-800/40 rounded-2xl p-6 shadow-lg backdrop-blur-sm"
            >
              <div className="text-yellow-300 flex justify-center mb-3 text-3xl">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold">{s.value}</h3>
              <p className="text-gray-300">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <h2 className="text-3xl font-semibold mb-8">
          Meet Our <span className="text-yellow-300">Chefs</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Chef Thabo", "Chef Lerato", "Chef Mark"].map((name, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-blue-800/30 rounded-2xl shadow-lg"
            >
              <img
                src={`/images/chef${i + 1}.webp`}
                alt={name}
                className="w-full h-60 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-gray-400 text-sm">
                Master of flavors and culinary creativity.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
