import React from "react";
import { motion } from "framer-motion";
import { Users, Heart, Award, Coffee, ChefHat, Star, Leaf, Smile } from "lucide-react";

// Import chef images
import chef1 from "../assets/chef.jpg";
import chef2 from "../assets/chef1.jpg";
import chef3 from "../assets/chef2.jpg";

// Import extra assets if needed
import food from "../assets/food.jpg";

export default function About() {
  const stats = [
    { icon: <Heart />, label: "Happy Customers", value: "10K+" },
    { icon: <Users />, label: "Team Members", value: "25+" },
    { icon: <Award />, label: "Awards Won", value: "8+" },
  ];

  const chefs = [
    { name: "Chef Thabo", img: chef1 },
    { name: "Chef Lienberg", img: chef2 },
    { name: "Chef Mark", img: chef3 },
  ];

  const features = [
    {
      icon: <Star className="w-10 h-10 text-yellow-300 mb-3 mx-auto animate-pulse" />,
      title: "Exceptional Quality",
      desc: "Every dish is prepared with utmost care and premium ingredients.",
    },
    {
      icon: <Leaf className="w-10 h-10 text-green-400 mb-3 mx-auto animate-bounce" />,
      title: "Sustainable Practices",
      desc: "Eco-friendly sourcing and waste reduction in our kitchen.",
    },
    {
      icon: <Smile className="w-10 h-10 text-pink-400 mb-3 mx-auto animate-bounce delay-200" />,
      title: "Customer Happiness",
      desc: "We prioritize delighting every guest with a memorable dining experience.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-24 pb-16 bg-gradient-to-b from-indigo-900 via-blue-900 to-sky-900 text-white min-h-screen"
    >
      <div className="container mx-auto px-6 text-center">

        {/* Story Section */}
        <h1 className="text-4xl font-extrabold mb-6">
          Our <span className="text-yellow-300">Story</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300 mb-12">
          Founded in 2010, MetroBistro began as a small family restaurant and
          has grown into one of Johannesburg’s most beloved dining spots. We
          blend tradition with modern cuisine to create an unforgettable experience.
        </p>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-tr from-yellow-400/30 to-yellow-300/10 rounded-2xl p-6 shadow-lg backdrop-blur-sm border border-yellow-300"
            >
              <div className="text-yellow-300 flex justify-center mb-3 text-3xl">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold">{s.value}</h3>
              <p className="text-gray-300">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Chefs Section */}
        <h2 className="text-3xl font-semibold mb-8">
          Meet Our <span className="text-yellow-300">Chefs</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {chefs.map((chef, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 bg-gradient-to-tr from-blue-800/50 to-indigo-900/30 rounded-2xl shadow-lg border border-yellow-300"
            >
              <img
                src={chef.img}
                alt={chef.name}
                className="w-full h-60 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold">{chef.name}</h3>
              <p className="text-gray-400 text-sm">
                Master of flavors and culinary creativity.
              </p>
              <div className="flex justify-center mt-3 space-x-4 text-yellow-300">
                <Coffee className="w-5 h-5 animate-bounce" />
                <ChefHat className="w-5 h-5 animate-bounce delay-200" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <h2 className="text-3xl font-semibold mb-8">
          Why Choose <span className="text-yellow-300">Us?</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-tr from-indigo-800/50 to-blue-900/40 rounded-2xl p-6 shadow-lg border border-yellow-300"
            >
              {f.icon}
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-300 text-sm md:text-base">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Fun Facts Section */}
        <div className="relative mb-16">
          <img
            src={food}
            alt="Delicious food"
            className="w-full max-h-96 object-cover rounded-3xl shadow-xl mb-6"
          />
          <motion.div
            className="absolute top-10 left-10 bg-yellow-400/20 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-yellow-300"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-blue-900">Fun Fact!</h3>
            <p className="text-blue-900 mt-2">
              Our signature dish has been enjoyed by over <strong>10,000 happy customers</strong> worldwide!
            </p>
          </motion.div>
        </div>

        {/* Call-to-Action */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-purple-900 via-blue-800 to-indigo-900 p-10 rounded-3xl shadow-2xl border border-yellow-300"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to <span className="text-yellow-300">Dine With Us</span>?
          </h2>
          <p className="text-gray-300 mb-6">Book a table or join us for an unforgettable experience.</p>
          <button className="px-8 py-3 bg-yellow-300 text-blue-900 font-semibold rounded-2xl hover:bg-yellow-400 transition-all shadow-lg">
            Book Now
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
