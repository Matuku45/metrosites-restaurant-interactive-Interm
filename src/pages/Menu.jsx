import React from "react";
import { motion } from "framer-motion";
import { ChefHat, Coffee, Wine, Star, Leaf } from "lucide-react";

// Import dish images
import salmon from "../assets/grilledsalmon.webp";
import beef from "../assets/beefwillington.webp";
import pasta from "../assets/pasta.webp";
import milkshake from "../assets/milkshakespecial.jpg";
import eventFiesta from "../assets/eventholidayfiest.webp";
import happyHour1 from "../assets/happyhourspecial.webp";
import happyHour2 from "../assets/happyhourspecial2.webp";
import wineTest from "../assets/winetesting.webp";
import rest1 from "../assets/rest1.webp";
import rest2 from "../assets/rest2.webp";
import rest3 from "../assets/rest3.webp";
import rest4 from "../assets/rest4.webp";
import rest5 from "../assets/rest5.webp";
import rest6 from "../assets/rest6.webp";
import rest7 from "../assets/rest7.webp";

export default function Menu() {
  const menuItems = [
    {
      name: "Grilled Salmon",
      desc: "Freshly grilled salmon with roasted vegetables and lemon butter sauce.",
      price: 425,
      img: salmon,
      icon: <ChefHat />,
    },
    {
      name: "Truffle Pasta",
      desc: "Creamy truffle pasta with parmesan, garlic, and fresh herbs.",
      price: 370,
      img: pasta,
      icon: <Leaf />,
    },
    {
      name: "Beef Wellington",
      desc: "Tender beef wrapped in puff pastry, served with red wine sauce.",
      price: 595,
      img: beef,
      icon: <Wine />,
    },
    {
      name: "Chocolate Milkshake Special",
      desc: "Decadent chocolate milkshake topped with whipped cream and chocolate drizzle.",
      price: 145,
      img: milkshake,
      icon: <Coffee />,
    },
    {
      name: "Holiday Fiesta Platter",
      desc: "A festive platter with a mix of seasonal delicacies, ideal for celebrations.",
      price: 760,
      img: eventFiesta,
      icon: <Star />,
    },
    {
      name: "Happy Hour Special 1",
      desc: "Perfect chef’s bites during happy hour to unwind with friends.",
      price: 310,
      img: happyHour1,
      icon: <Coffee />,
    },
    {
      name: "Happy Hour Special 2",
      desc: "Additional seasonal bites for your happy hour experience.",
      price: 335,
      img: happyHour2,
      icon: <Coffee />,
    },
    {
      name: "Wine Tasting Selection",
      desc: "A curated selection of wines paired with gourmet bites.",
      price: 450,
      img: wineTest,
      icon: <Wine />,
    },
    // Adding rest1-rest7 as gallery-style menu items
    {
      name: "Restaurant View 1",
      desc: "Enjoy the cozy atmosphere of our restaurant.",
      price: 0,
      img: rest1,
      icon: <Star />,
    },
    {
      name: "Restaurant View 2",
      desc: "Experience the elegance of our interior design.",
      price: 0,
      img: rest2,
      icon: <Star />,
    },
    {
      name: "Restaurant View 3",
      desc: "Comfortable seating and ambient lighting.",
      price: 0,
      img: rest3,
      icon: <Star />,
    },
    {
      name: "Restaurant View 4",
      desc: "Perfect setting for family and friends.",
      price: 0,
      img: rest4,
      icon: <Star />,
    },
    {
      name: "Restaurant View 5",
      desc: "A peek into our festive decorations.",
      price: 0,
      img: rest5,
      icon: <Star />,
    },
    {
      name: "Restaurant View 6",
      desc: "Relax and enjoy our beautiful interior.",
      price: 0,
      img: rest6,
      icon: <Star />,
    },
    {
      name: "Restaurant View 7",
      desc: "An inviting space for every guest.",
      price: 0,
      img: rest7,
      icon: <Star />,
    },
  ];

  const formatCurrency = (amount) => {
    return amount > 0
      ? new Intl.NumberFormat("en-ZA", { style: "currency", currency: "ZAR" }).format(amount)
      : "—";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-blue-900 to-blue-950 text-white py-20 px-6">
      {/* Section Intro */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 animate-gradient-x">
          Our <span className="text-white/80">Menu</span>
        </h1>
        <p className="text-gray-300 text-lg">
          Discover our exquisite menu and restaurant experiences crafted with passion. From gourmet dishes to our elegant interiors, every detail is designed for your enjoyment.
        </p>
      </motion.div>

      {/* Menu Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {menuItems.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative overflow-hidden rounded-3xl shadow-2xl border border-yellow-300 cursor-pointer group bg-gradient-to-t from-blue-900/60 via-indigo-900/50 to-transparent"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Icon */}
            <div className="absolute top-4 left-4 text-yellow-300">
              {React.cloneElement(item.icon, { className: "w-8 h-8" })}
            </div>

            {/* Caption & Description */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              className="absolute bottom-4 left-4 right-4 text-white p-4 bg-black/50 rounded-xl backdrop-blur-md shadow-lg"
            >
              <h3 className="font-bold text-xl mb-1">{item.name}</h3>
              <p className="text-gray-200 text-sm mb-2">{item.desc}</p>
              <p className="text-yellow-300 font-bold">{formatCurrency(item.price)}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
