import React, { useEffect } from "react";
import { FaTruck, FaHeartbeat } from "react-icons/fa"; 
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

const OfferSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="w-full overflow-hidden flex flex-col lg:flex-row h-auto">
      
      <div className="bg-[#c2141b] text-white flex flex-col justify-center px-6 py-12 md:px-10 lg:w-1/2">
        <h3 className="text-2xl font-bold text-center md:text-left" data-aos="fade-up">
          WHY CHOOSE US
        </h3>

        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-center md:text-left" data-aos="fade-up">
          WE PRODUCE <span className="text-yellow-400">MILK & MEALS</span> WITH THE BEST QUALITY
        </h2>

        <p className="text-lg text-gray-300 mt-4 text-center md:text-left" data-aos="fade-up">
          Our fresh, organic <strong>milk</strong> and nutrient-rich <strong>meals</strong> are designed to provide the 
          <strong> best nutrition for you and your family</strong>.  
          Sourced directly from <strong>trusted farms</strong>, our products are <strong>free from preservatives</strong> 
          and <strong>delivered fresh daily</strong>.
        </p>

    
        <div className="mt-6 flex flex-col md:flex-row items-center gap-6">
          
          <div className="flex flex-col items-center text-center" data-aos="fade-right">
            <FaTruck className="text-white text-4xl" />
            <h4 className="text-xl font-semibold mt-2">Doorstep Delivery</h4>
            <p className="text-gray-300 text-sm">
              Enjoy <strong>fast & hassle-free delivery</strong> straight to your home, ensuring <strong>freshness every time</strong>.
            </p>
          </div>

          
          <div className="flex flex-col items-center text-center" data-aos="fade-left">
            <FaHeartbeat className="text-white text-4xl" />
            <h4 className="text-xl font-semibold mt-2">Pure & Healthy</h4>
            <p className="text-gray-300 text-sm">
              Our <strong>meals</strong> and <strong>dairy products</strong> are <strong>100% organic</strong>, 
              <strong> rich in nutrients</strong>, and completely <strong>chemical-free</strong>.
            </p>
          </div>
        </div>

    
        <div className="mt-6 text-center md:text-left" data-aos="zoom-in">
          <Link to="/contact" className="inline-block bg-[#ddb75e] text-white py-2 px-5 rounded-lg font-semibold text-lg hover:bg-[#73a63e] hover:text-white transition-all">
              Get One Free
          </Link>
        </div>
      </div>

      
      <div className="relative w-full lg:w-1/2" data-aos="fade-left">
        <img 
          src="https://templatekit.jegtheme.com/milcow/wp-content/uploads/sites/155/2021/09/happy-teenage-boy-with-glass-of-fresh-milk-looking-442LVH8.jpg" 
          alt="Healthy Food Delivery" 
          className="w-full h-auto object-cover"
        />
      </div>

    </section>
  );
};

export default OfferSection;
