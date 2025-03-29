import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { Link } from "react-router-dom";

const BlogSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const blogs = [
    {
      title: "The Secret to Healthy Bones: Why Milk Matters!",
      description:
        "Discover how milk strengthens your bones, boosts immunity, and supports overall well-being. A must-read for every health-conscious individual!",
      image: "https://dapure.pk/wp-content/uploads/2025/02/Jasper_2025-02-17T113A523A04.470Z.png",
      link: "#",
    },
    {
      title: "How Dairy Can Transform Your Meal Plans",
      description:
        "Learn how to incorporate dairy into your daily meals to improve digestion, provide essential nutrients, and keep you full of energy all day long!",
      image: "https://assets.clevelandclinic.org/transform/25327581-6b16-4f03-b00e-eca1a1cbbfcf/food-plate-balanced-nutrition-1040084798",
      link: "#",
    },
    {
      title: "Farm Fresh: How We Ensure Quality Dairy Products",
      description:
        "A behind-the-scenes look at how we deliver fresh, organic dairy straight from the farm to your doorstep. Quality, purity, and taste guaranteed!",
      image: "https://www.shutterstock.com/image-photo/dairy-products-bottles-milk-cottage-600nw-2483159649.jpg",
      link: "#",
    },
  ];

  return (
    <section className="bg-[#f0f8ff] py-20 px-6 sm:px-12 md:px-20">
      
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-5xl font-bold text-[#ddb75e] tracking-wide">
          Latest From Our Blog
        </h2>
        <p className="text-gray-700 text-lg mt-3 max-w-xl mx-auto">
          Explore expert tips on nutrition, dairy benefits, and delicious meal ideas!
        </p>
      </div>

  
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg group"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
        
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f3057] opacity-90"></div>
            
           
            <div className="absolute top-[50%] left-5 right-5 text-white transform -translate-y-1/2">
              <h3 className="text-2xl font-bold">{blog.title}</h3>
              <p className="text-sm mt-2">{blog.description}</p>
              <a
                href="/blog"
                className="inline-block mt-3 text-[#ffcc00] font-semibold hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>

      
      <div className="text-center mt-12">
       
<Link
  to="/blog"
  className="bg-[#ddb75e] hover:bg-[#ddb75e] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
>
  See All Blogs
</Link>

      </div>
    </section>
  );
};

export default BlogSection;
