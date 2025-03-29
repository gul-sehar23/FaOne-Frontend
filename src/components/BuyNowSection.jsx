import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { Link } from "react-router-dom";

const BuyNowSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="relative w-full min-h-screen lg:h-[60vh] flex items-center text-left text-white bg-no-repeat bg-cover bg-center px-6 sm:px-10 md:px-16"
      style={{
        backgroundImage: "url('organic.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
  
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e293b] to-[#334155] opacity-60"></div>

    
      <div className="relative z-10 max-w-3xl" data-aos="fade-right">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          Get the Best Organic Products Today!
        </h2>
        <p
          className="text-sm sm:text-lg md:text-xl mb-6 max-w-2xl leading-relaxed"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Fresh, healthy, and 100% organic dairy products delivered to your
          doorstep. Don't wait, shop now and experience the taste of purity.
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

export default BuyNowSection;
