import { useEffect } from "react";
import mealData from "./mealData";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const MealSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // AOS initialization with smooth effect
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2
          className="text-5xl font-bold text-center text-gray-900 mb-12 uppercase tracking-wide"
          data-aos="fade-up"
        >
          Our Exclusive Meals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {mealData.map((meal) => (
            <div
              key={meal.id}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-2xl"
              data-aos="fade-up"
            >
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src={meal.image}
                  alt={meal.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <h3 className="text-lg font-bold text-white">{meal.name}</h3>
                  <p className="text-white mt-1 text-xs">{meal.description}</p>
                  <p className="text-lg font-semibold text-yellow-400 mt-2">
                    {meal.price}
                  </p>
                  <Link
                    to="/pricing"
                    className="mt-3 inline-block bg-gradient-to-r from-yellow-500 to-yellow-700 text-white font-bold px-4 py-2 text-sm rounded-lg hover:scale-105 transition-transform"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MealSection;
