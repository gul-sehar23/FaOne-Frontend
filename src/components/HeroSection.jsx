/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const texts = useRef(["I Like", "I Want", "I Drink"]).current; 
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      let currentWord = texts[textIndex];

      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setCurrentText((prev) => prev + currentWord[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const typingSpeed = isDeleting ? 100 : 200;
    const typingInterval = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, isDeleting, textIndex]); // Necessary dependencies

  return (
    <section className="relative bg-[#c2141b] py-24 min-h-screen text-white flex items-center overflow-hidden">
      <div className="absolute bottom-0 w-full overflow-hidden">
        <svg
          className="relative block h-[50px] w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            className="fill-white"
            d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3 
            c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
            c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
          ></path>
        </svg>
      </div>
      <div className="container mx-auto px-6 md:flex md:items-center">
        
        <div className="md:w-1/2 space-y-6">
          <motion.h2
            className="text-4xl text-white-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            FRESH MILK
          </motion.h2>
          <h1 className="text-8xl font-bold text-white-900">That's What</h1>
          <h1 className="text-8xl font-bold text-white">
            {currentText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="text-white"
            >
              |
            </motion.span>
          </h1>
          <p className="text-white text-lg leading-relaxed text-justify">
            Enjoy the <strong>pure taste of organic, farm-fresh milk</strong>,
            packed with <strong>essential nutrients</strong> and{" "}
            <strong>free from harmful additives</strong>. Our dairy is carefully
            processed to <strong>preserve its rich, creamy texture</strong>,
            ensuring every sip is both <strong>healthy and delicious</strong>.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-6 py-2 bg-[#ddb75e] text-white font-bold rounded-[50px] hover:bg-[#73a63e] transition-all"
          >
            Get Started
          </motion.button>
        </div>

        <div className="md:w-1/2 relative flex flex-col items-center md:items-start h-[500px]">
          <motion.img
            src="https://templatekit.jegtheme.com/milcow/wp-content/uploads/sites/155/2021/09/milk-carton-packs-P67QE86-504x1024.png"
            alt="Milk Carton"
            className="w-32 md:w-40 absolute top-10 left-5 md:left-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
          />

          <motion.img
            src="https://templatekit.jegtheme.com/milcow/wp-content/uploads/sites/155/2021/09/milk2-carton-packs-P67QE86-504x1024.png"
            alt="Milk Carton 2"
            className="w-32 md:w-40 absolute top-32 right-5 md:right-20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
          />

          <motion.img
            src="https://templatekit.jegtheme.com/milcow/wp-content/uploads/sites/155/2021/09/milk2-carton-packs-P67QE86.png"
            alt="Milk Splash"
            className="w-40 md:w-60 absolute top-20 left-12 md:left-40"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
          />

          <motion.div
            className="absolute bottom-10 left-5 md:left-10 bg-white/20 backdrop-blur-md p-4 rounded-lg shadow-lg border border-white/30"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <i className="fas fa-basket-shopping text-blue-600 text-2xl"></i>
            <h3 className="text-white font-semibold">Natural & Organic</h3>
            <p className="text-white text-sm">Pure Dairy Products</p>
          </motion.div>

          <motion.div
            className="absolute bottom-20 right-5 md:right-10 bg-white/20 backdrop-blur-md p-4 rounded-lg shadow-lg border border-white/30"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <i className="fas fa-leaf text-green-600 text-2xl"></i>
            <h3 className="text-white font-semibold">Modern Dairy</h3>
            <p className="text-white text-sm">Freshly Processed</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
