import React from "react";

const StatsSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
          Trusted by <span className="text-[#ddb75e]">2300+</span> Companies Worldwide
        </h2>
      </div>

      {/* Company Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {[
          "https://img.atom.com/story_images/visual_images/1723034503-MilkMustache1.png?class=listing",
          "https://img.atom.com/story_images/visual_images/1711467726-MilkNMore.png?class=listing",
          "https://img.atom.com/story_images/visual_images/1714982627-DairyIn.png?class=listing",
          "https://img.atom.com/story_images/visual_images/1707953758-CollectiveDairy.jpg?class=listing",
        ].map((logo, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center p-8 bg-gray-800 bg-opacity-40 backdrop-blur-lg rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl border border-transparent hover:border-[#ddb75e]"
          >
            <img
              src={logo}
              alt="Company Logo"
              className="w-44 md:w-52 h-auto object-contain filter grayscale hover:filter-none transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
