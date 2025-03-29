import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeedbackSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const testimonials = [
    {
      name: "Sarah Khan",
      feedback: "The best organic milk and meals! Super fresh, healthy, and delivered on time. Highly recommended!",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
      name: "Ahmed Ali",
      feedback: "Great taste and top quality! The meals are delicious, and the milk is pure and creamy. 10/10 service!",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Ayesha Rizwan",
      feedback: "I love how natural and nutritious these products are. My family enjoys every meal. Perfect choice!",
      image: "https://randomuser.me/api/portraits/women/48.jpg",
    },
    {
      name: "Bilal Haider",
      feedback: "Their dairy products are 100% natural. No chemicals, no preservatives, just pure goodness. Love it!",
      image: "https://randomuser.me/api/portraits/men/40.jpg",
    },
    {
      name: "Farah Javed",
      feedback: "Perfect service and fresh meals! My kids love the milk, and I trust the quality completely.",
      image: "https://randomuser.me/api/portraits/women/52.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-16  w-full overflow-hidden">
      <div className="text-center px-4 md:px-6 lg:px-20" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-[#ddb75e] mb-2">What Our Customers Say</h2>
        <p className="text-gray-500 text-lg">Trusted by thousands of happy customers</p>
      </div>

      
      <div className="mt-12 px-4 sm:px-6 md:px-12 lg:px-20">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-2 sm:px-4">
              <div
                className="group bg-white p-6 rounded-xl shadow-lg max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[320px] h-auto flex flex-col justify-center items-center text-center transition-all transform hover:-translate-y-2 hover:shadow-2xl hover:bg-[#c2141b] mx-auto"
                data-aos="flip-left"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-[#ddb75e] group-hover:border-white"
                />
                <h4 className="text-lg font-semibold mt-4 group-hover:text-white">{testimonial.name}</h4>
                <p className="text-gray-600 mt-2 italic group-hover:text-white">{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeedbackSection;
