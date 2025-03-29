import React from "react";
import {
  FaShippingFast,
  FaAppleAlt,
  FaShieldAlt,
  FaHeadset,
  FaUtensils,
  FaLeaf,
  FaGlassWhiskey,
  FaBoxOpen,
} from "react-icons/fa";

const features = [
  { id: 1, icon: <FaShippingFast />, title: "Fast Delivery", description: "Get your order delivered within 30-45 minutes." },
  { id: 2, icon: <FaAppleAlt />, title: "Healthy & Fresh", description: "Farm-fresh, organic ingredients for maximum nutrition." },
  { id: 3, icon: <FaShieldAlt />, title: "Guaranteed Quality", description: "Hygienically packed and quality-checked products." },
  { id: 4, icon: <FaHeadset />, title: "24/7 Support", description: "Our team is available round the clock to assist you." },
  { id: 5, icon: <FaUtensils />, title: "Delicious Meals", description: "Premium ingredients cooked by top chefs." },
  { id: 6, icon: <FaLeaf />, title: "Organic Ingredients", description: "Sourced from trusted organic farms." },
  { id: 7, icon: <FaGlassWhiskey />, title: "Fresh Dairy", description: "High-quality milk, yogurt, cheese, and butter." },
  { id: 8, icon: <FaBoxOpen />, title: "Secure Packaging", description: "Eco-friendly, leak-proof packaging for freshness." },
];

const Feature = ({ title, description, icon, id }) => {
  return (
    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg shadow-md text-center border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div
        className={`flex justify-center items-center w-16 h-16 text-white rounded-2xl mx-auto text-3xl shadow-md transition-all duration-300 hover:rotate-[10deg] hover:shadow-lg ${
          id % 2 === 0 ? "bg-gradient-to-br from-yellow-400 to-yellow-600" : "bg-gradient-to-br from-red-500 to-red-700"
        }`}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold mt-4 text-gray-900">{title}</h3>
      <p className="text-gray-700 mt-2 text-sm">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#f0f4ff] to-[#ffffff]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feature) => (
          <Feature key={feature.id} {...feature} id={feature.id} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
