import { useEffect, useRef } from "react";
import gsap from "gsap";

const BlogDetail = () => {
  const blogRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      blogRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      }
    );
  }, []);

  const blogs = [
    {
      title: "The Secret to Healthy Bones: Why Milk Matters!",
      description: `Milk is not just a simple beverage; it is a fundamental source of nutrients essential for overall well-being. It contains calcium, which plays a crucial role in maintaining strong bones and teeth, reducing the risk of fractures and osteoporosis as we age. Additionally, the presence of vitamin D in milk helps in better calcium absorption, ensuring optimal bone health. The proteins in milk support muscle growth and repair, making it an excellent post-workout drink. Moreover, regular consumption of milk contributes to a stronger immune system, improved digestion, and enhanced cognitive function. Studies indicate that individuals who consume dairy products daily have better metabolism and reduced chances of bone-related ailments.

Beyond its role in bone health, milk is packed with essential nutrients such as potassium, which helps regulate blood pressure and support heart health. It also contains B vitamins, including B12 and riboflavin, which are crucial for energy production, brain function, and red blood cell formation. The combination of carbohydrates, proteins, and healthy fats in milk makes it a well-balanced source of sustained energy, keeping you active throughout the day.

Milk is also known for its skin-enhancing properties, as it contains antioxidants that help combat free radicals, reducing signs of aging and promoting a healthy glow. Whether consumed warm before bed to promote relaxation and better sleep or added to cereals, smoothies, and coffee, milk is a versatile and nutritious staple that supports overall health. By making milk a part of your daily diet, you are nourishing your body with essential vitamins and minerals that contribute to long-term wellness and vitality.`,
      image: "https://dapure.pk/wp-content/uploads/2025/02/Jasper_2025-02-17T113A523A04.470Z.png",
      date: "March 24, 2025",
      author: "Dr. Ayesha Khan",
    },
    {
      title: "How Dairy Can Transform Your Meal Plans",
      description: `Dairy is more than just a source of calcium; it is a powerhouse of nutrients that play a vital role in a balanced diet. Dairy products such as cheese, yogurt, and milk provide high-quality proteins that help in muscle repair and overall body growth. Additionally, they contain healthy fats that support brain function and energy levels throughout the day. Probiotics found in yogurt improve gut health, aiding digestion and enhancing the absorption of essential nutrients. Incorporating dairy into your daily meal plan not only boosts metabolism but also keeps you fuller for longer, reducing unhealthy cravings.

Rich in essential vitamins such as B12, D, and A, dairy supports a strong immune system, healthy skin, and improved vision. The presence of phosphorus and magnesium further strengthens bones and teeth, reducing the risk of osteoporosis. Studies have also shown that dairy consumption can contribute to better heart health by regulating blood pressure and supporting cardiovascular function.

Beyond its nutritional benefits, dairy is a versatile ingredient that enhances both flavor and texture in a variety of dishes. Whether added to smoothies, cereal, baked goods, or enjoyed as a refreshing glass of milk, dairy is a key component of a healthy and fulfilling diet. By making dairy a part of your daily routine, you are investing in your long-term health and overall well-being.`,
      image: "https://assets.clevelandclinic.org/transform/25327581-6b16-4f03-b00e-eca1a1cbbfcf/food-plate-balanced-nutrition-1040084798",
      date: "March 22, 2025",
      author: "Sarah Ahmed",
    },
    {
      title: "Farm Fresh: How We Ensure Quality Dairy Products",
      description: `At our dairy farms, quality and sustainability go hand in hand to ensure that you receive the freshest and healthiest dairy products. Our cows are raised on natural, nutrient-rich diets, free from harmful additives and antibiotics, ensuring pure and wholesome milk for you and your family. We follow strict hygiene protocols during the milking process, ensuring that each drop of milk retains its natural goodness. Through advanced pasteurization and packaging techniques, we maintain freshness while preserving essential vitamins and minerals, guaranteeing a rich and creamy taste in every sip.

Our commitment to ethical dairy farming not only enhances product quality but also supports environmental sustainability. We prioritize eco-friendly practices, such as water conservation, responsible waste management, and sustainable grazing techniques, to minimize our ecological footprint. By choosing our farm-fresh dairy, you are investing in superior taste, better nutrition, and responsible farming practices.

Whether it’s fresh milk, creamy yogurt, delicious butter, or wholesome cheese, our wide range of dairy products caters to all your nutritional needs. We take pride in delivering purity and excellence from our farms to your table, so you can enjoy dairy the way nature intended—fresh, nutritious, and full of goodness.`,
      image: "https://www.shutterstock.com/image-photo/dairy-products-bottles-milk-cottage-600nw-2483159649.jpg",
      date: "March 20, 2025",
      author: "Muhammad Ali",
    },
  ];

  return (
    <section className="bg-[#f4f7fc] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-12">
          Blog Details
        </h2>

        <div className="space-y-16">
          {blogs.map((blog, index) => (
            <div
              key={index}
              ref={(el) => (blogRef.current[index] = el)}
              className="overflow-hidden bg-white rounded-lg shadow-lg"
            >
              {/* Blog Image */}
              <div className="w-full h-[450px]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Blog Text */}
              <div className="p-8">
                <h3 className="text-3xl font-semibold text-gray-900 mb-4 hover:text-[#0056b3] transition">
                  {blog.title}
                </h3>

                {/* Author & Date */}
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <span className="mr-4">📅 {blog.date}</span>
                  <span>✍️ {blog.author}</span>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed text-justify">
                  {blog.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
