import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MealheroSection() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div
      className="relative w-full min-h-screen flex items-center bg-cover bg-center text-white overflow-hidden px-12"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/04/05/83/49/360_F_405834980_q7kToQNejjuNc9MVaLvP0yaiD08Z2Kli.jpg')",
      }}
    >
    
      <div className="absolute inset-0 bg-black/50"></div>

     

      
      <div className="relative z-10 max-w-2xl text-left" data-aos="zoom-in">
        <h1 className="text-6xl font-extrabold drop-shadow-lg mb-4 tracking-wide">
          Delight in Every Bite
        </h1>
        <p className="text-lg mb-6 drop-shadow-md">
          FAOne FOODs brings you the finest and healthiest meal options, crafted
          with love and fresh ingredients to nourish your body and soul.
        </p>

        <button className="px-8 py-4 bg-white text-red-600 font-bold text-lg rounded-full shadow-lg hover:scale-105 hover:bg-red-100 transition-transform duration-300">
          View Our Meals
        </button>
      </div>

      
    </div>
  );
}
