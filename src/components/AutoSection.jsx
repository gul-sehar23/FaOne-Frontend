/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AutoSection = () => {
  const [yearsExperience, setYearsExperience] = useState(0);
  const [products, setProducts] = useState(0);

  useEffect(() => {
    const experienceInterval = setInterval(() => {
      setYearsExperience((prev) => (prev < 15 ? prev + 1 : prev));
    }, 100);

    const productsInterval = setInterval(() => {
      setProducts((prev) => (prev < 250 ? prev + 5 : prev));
    }, 50);

    return () => {
      clearInterval(experienceInterval);
      clearInterval(productsInterval);
    };
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
      
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-[#ddb75e]">Welcome to FAOne Foods</h2>
          <h2 className="text-5xl font-bold text-gray-600 mt-2">Who We Are</h2>
          <p className="text-1xl text-black mt-4 leading-relaxed text-justify">
            At FAOne Foods, we believe in delivering <strong>fresh, natural, and healthy meals</strong> to your doorstep. Our dedication to
            <strong> quality, taste, and nutrition</strong> has helped us grow over the past <strong>15 years</strong>, serving
            <strong> thousands of happy customers</strong>. From farm-fresh dairy to wholesome meals, we ensure that each bite is
            <strong> pure, delicious, and made with care</strong>.
          </p>
          
          <h3 className="text-3xl font-bold text-black mt-8">Why Choose Us?</h3>
          <div className="mt-6 space-y-4">
            {[
              "100% Organic & Fresh Ingredients", 
              "Strict Quality Control Standards", 
              "Trusted by Thousands of Families", 
              "Sustainably Sourced & Eco-Friendly"
            ].map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 text-lg font-medium text-gray-800 bg-white p-3 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="bg-[#c2141b] text-white px-3 py-1 rounded-full text-lg">
                    {index + 1}
                  </span>
                  {point}
                </motion.div>
            ))}
          </div>
        </motion.div>

      
        <motion.div
          className="relative flex flex-col space-y-12 overflow-visible"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {[
            {
              img: "https://templatekit.jegtheme.com/milcow/wp-content/uploads/sites/155/2021/09/boy-holding-glass-of-milk-and-biscuits-e1631159179587.jpg",
              count: yearsExperience,
              label: "Years of Excellence",
              position: "ml-auto"
            },
            {
              img: "https://img.freepik.com/premium-photo/dairy-products-collection-green-light-background_488220-55599.jpg",
              count: products,
              label: "Products Served",
              position: "mr-auto"
            }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className={`relative w-80 rounded-lg shadow-lg overflow-visible group ${item.position}`}
              whileHover={{ scale: 1.05 }}
            >
           
              <motion.img
                src={item.img}
                alt={item.label}
                className="w-full h-auto object-contain rounded-lg group-hover:opacity-80 transition-opacity duration-300"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                style={{ maxWidth: "100%", height: "auto" }} // Ensuring full visibility
              />

              
              <motion.div 
                className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white bg-opacity-60 backdrop-blur-lg p-4 rounded-lg shadow-lg text-center w-56 border border-gray-300"
              >
                <h3 className="text-4xl font-bold text-[#c2141b]">{item.count}+</h3>
                <p className="text-gray-800 font-semibold">{item.label}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AutoSection;
