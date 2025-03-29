import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import { FaUser, FaEnvelope, FaHome, FaBox, FaHashtag, FaDollarSign } from "react-icons/fa";

const products = [
  { name: "Fresh Milk", price: 5.99 },
  { name: "Full Cream Milk", price: 6.49 },
  { name: "UHT Milk", price: 4.99 },
  { name: "Margarnie Butter", price: 3.99 },
  { name: "Butter Cream", price: 4.29 },
  { name: "Feta Cheese", price: 7.99 },
  { name: "Condensed Milk", price: 12.99 },
  { name: "Gourmet Cheese", price: 5.49 },
  { name: "Fresh Juices", price: 9.99 },
  { name: "Nuggets", price: 3.99 },
  { name: "Frozen Pratha", price: 10.99 },
  { name: "Frozen Meat", price: 2.99 },
  { name: "Fresh Eggs", price: 2.99 },
  { name: "Almond Milk", price: 2.99 },
  { name: "Soy Milk", price: 2.99 },
  { name: "Organic Fruits", price: 2.99 }
];


const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    product: "",
    quantity: "",
    price: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "product") {
      const selectedProduct = products.find((p) => p.name === e.target.value);
      setFormData({ ...formData, product: e.target.value, price: selectedProduct ? selectedProduct.price : "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.address || !formData.product || !formData.quantity || !formData.price) {
      toast.error("Please fill in all fields!");
      return;
    }

    emailjs
      .send("service_acd0omh", "template_j58ix5o", formData, "ICU_NMFIvLcGBZ0Qt")
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          toast.success("Order placed successfully!");
          setFormData({
            name: "",
            email: "",
            address: "",
            product: "",
            quantity: "",
            price: "",
          });
        },
        (error) => {
          console.error("Email failed to send:", error);
          toast.error("Order placement failed! Please try again.");
        }
      );
  };

  return (
    <section className="flex flex-col md:flex-row items-center min-h-screen bg-gradient-to-r from-[#F4D03F] to-[#16A085]">
     
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative flex items-center">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20220329/pngtree-a-delivery-truck-on-the-urban-road-flat-design-home-service-image_1069487.jpg"
          alt="Offer Background"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center p-4 md:p-8">
          <h1 className="text-2xl md:text-5xl font-extrabold leading-tight" data-aos="fade-right">
             Special Offer Just for You!
          </h1>
          <p className="text-sm md:text-lg opacity-90 mt-2 md:mt-4" data-aos="fade-right" data-aos-delay="200">
            Order now and <strong>get 20% OFF</strong> your first purchase!  
            Enjoy <strong>fast delivery & guaranteed quality</strong>.
          </p>
          <h3 className="text-lg md:text-2xl font-semibold text-yellow-300 mt-2 md:mt-4" data-aos="fade-right" data-aos-delay="400">
             Free Shipping on Orders Above $50!
          </h3>
        </div>
      </div>

     
      <div className="w-full md:w-1/2 h-auto md:h-screen flex items-center bg-white shadow-lg rounded-lg p-8 md:p-12">
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6" data-aos="fade-up">
            Secure Your Order Now!
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full pl-10 py-3 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 transition-all"
              />
            </div>

           
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full pl-10 py-3 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 transition-all"
              />
            </div>

         
            <div className="relative">
              <FaHome className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Delivery Address"
                className="w-full pl-10 py-3 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 transition-all"
              />
            </div>

           
            <div className="relative">
              <FaBox className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="w-full pl-10 py-3 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 transition-all"
              >
                <option value="">Select Product</option>
                {products.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

          
            <div className="relative">
              <FaHashtag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="Quantity"
                className="w-full pl-10 py-3 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 transition-all"
              />
            </div>

      
            <div className="relative">
              <FaDollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                name="price"
                value={formData.price}
                readOnly
                className="w-full pl-10 py-3 bg-gray-200 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 transition-all"
              />
            </div>

            <button className="w-full bg-yellow-500 text-white py-3 font-bold rounded-lg hover:scale-105 hover:shadow-lg transition-all">
              Place Order Now 
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default OrderForm;
