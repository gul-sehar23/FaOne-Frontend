import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const ServeSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="relative w-full min-h-screen lg:h-[60vh] flex items-center justify-center text-white bg-no-repeat bg-cover bg-center px-6 sm:px-10 md:px-16"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/arrangement-black-friday-shopping-carts-with-copy-space_23-2148667047.jpg')",
        backgroundSize: "cover", 
        backgroundPosition: "center",
      }}
    >
    
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e293b] to-[#334155] opacity-60"></div>

      
      <div className="relative z-10 text-center max-w-3xl w-full">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          data-aos="fade-up"
        >
          WE SERVE YOU THE BEST
        </h1>
        
        <p
          className="text-sm sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Experience premium quality with our handpicked products. Whether it's freshness, durability, or style —  
          we bring you the <strong>best choices</strong> for your needs. Shop now and enjoy exclusive discounts!
        </p>

       
<Link
  to="/pricing"
  className="bg-[#ddb75e] hover:bg-white font-bold hover:text-[#ddb75e] text-white py-3 px-6 sm:px-8 rounded-full transition-all duration-300 shadow-lg text-sm sm:text-lg"
  data-aos="fade-up"
  data-aos-delay="400"
>
  Buy Now
</Link>
      </div>
    </section>
  );
};

export default ServeSection;
