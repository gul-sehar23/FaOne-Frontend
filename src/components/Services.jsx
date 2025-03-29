import React from "react";
import { FaGlassWhiskey, FaAppleAlt, FaCheese, FaFish, FaEgg, FaLeaf } from "react-icons/fa";

const services = [
  { 
    icon: <FaGlassWhiskey />, 
    title: "Fresh Milk", 
    description: "High-quality farm fresh milk for your daily needs.Sourced from grass-fed cows, rich in calcium & nutrients. Delivered fresh daily with no preservatives."
  },
  { 
    icon: <FaAppleAlt />, 
    title: "Organic Fruits", 
    description: "Delicious and fresh organic fruits for a healthy diet. No pesticides, 100% natural and farm fresh. Packed with vitamins to boost immunity."
  },
  { 
    icon: <FaCheese />, 
    title: "Dairy Products", 
    description: "Pure and natural dairy products for everyone. Includes butter, yogurt, and cheese made from fresh milk. Premium quality dairy, sourced locally."
  },
  { 
    icon: <FaFish />, 
    title: "Protein Shakes", 
    description: "Nutritious shakes packed with essential proteins. Made from high-quality protein sources, perfect for workouts. Perfect for fitness enthusiasts and athletes."
  },
  { 
    icon: <FaEgg />, 
    title: "Egg Products", 
    description: "Fresh and healthy egg-based food items. Farm-fresh eggs with high protein content. Rich in essential amino acids for a healthy diet."
  },
  { 
    icon: <FaLeaf />, 
    title: "Vegan Choices", 
    description: "Plant-based dairy alternatives for a healthy lifestyle. Dairy-free, soy-based, and almond milk options available. Cruelty-free, sustainable, and nutritious."
  },
];

export default function Services() {
  return (
    <section
      className="relative bg-cover bg-center py-20 px-5"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/thumbnails/048/437/208/small_2x/fresh-dairy-products-on-a-wooden-table-background-pasture-and-farm-concept-design-photo.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e293b] to-[#334155] opacity-50"></div>

      <div className="relative max-w-5xl mx-auto text-center text-white">
        <h3 className="text-2xl font-bold mb-4 ">OUR SERVICES</h3>
        <h1 className="text-5xl font-bold mb-5 mt-5">
          Best Quality Dairy & Meal Products
        </h1>
        <p className="text-lg mb-15">
          Providing fresh, nutritious, and organic food for a healthier lifestyle.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative p-6 rounded-lg text-white transition-all duration-500
            backdrop-blur-xl bg-opacity-0 border border-transparent overflow-hidden
            hover:bg-opacity-10 hover:border-white hover:border-opacity-50 hover:scale-105 group"
          >
            <div className="text-4xl text-white mb-4">{service.icon}</div>

            <h4 className="text-xl font-bold mb-2">{service.title}</h4>
            <p className="text-sm mb-2">{service.description}</p>
            <p className="text-xs text-gray-300">{service.extra}</p>
            <p className="text-xs text-gray-400">{service.detail}</p> 

            <div className="absolute bottom-[-50px] right-4 text-white text-3xl opacity-0
            transition-all duration-500 group-hover:bottom-4 group-hover:opacity-50">
              {service.icon}
            </div>

            <div className="absolute inset-0 bg-white opacity-0 transition-all duration-500 
            transform translate-y-full group-hover:translate-y-0 group-hover:opacity-10"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
