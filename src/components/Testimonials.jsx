import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const reviews = [
    { name: "Ayesha", feedback: "The freshest milk and dairy products! Love the taste!", delay: 200 },
    { name: "Ali", feedback: "High-quality meals at an affordable price. Highly recommended!", delay: 400 },
    { name: "Sana", feedback: "Perfect for families! The milk is so creamy and delicious.", delay: 600 },
  ];

  return (
    <section className="max-w-auto mx-auto py-16 px-6 text-center bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-5xl font-bold text-black" data-aos="fade-up">
        What Our Customers Say
      </h2>
      <p className="text-gray-600 mt-2 mb-8 text-lg" data-aos="fade-up" data-aos-delay="100">
        Trusted by thousands for premium dairy and fresh meals!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={review.delay}
          >
            <FaQuoteLeft className="text-[#ddb75e] text-3xl mx-auto mb-4" />
            <p className="text-gray-700 italic">"{review.feedback}"</p>
            <h3 className="mt-4 font-bold text-lg text-[#ddb75e]">{review.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
