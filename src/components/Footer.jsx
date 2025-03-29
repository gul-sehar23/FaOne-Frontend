import { useState } from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim() === "") {
      toast.error("Please enter a valid email!");
    } else {
      toast.success("You have successfully subscribed!");
      setEmail(""); // Clear input after subscribing
    }
  };

  return (
    <footer className="relative text-white py-16">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

     
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/008/991/953/small/realistic-yellow-red-orange-leaves-autumn-foliage-on-a-white-background-illustration-vector.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="absolute inset-0 bg-[#c2141b] opacity-80"></div>

      <div className="relative max-w-7xl mx-auto px-5 grid md:grid-cols-4 sm:grid-cols-2 gap-8">
      
        <div>
          <img src="logo.png" alt="FAOne Foods" className="h-16" loading="lazy" />
          <p className="mt-2 text-justify">
            Delicious and healthy milk-based snacks for everyone to enjoy. Providing the best Milk and Meals Products with premium quality and taste.
          </p>

          <div className="flex space-x-4 mt-4">
            {[
              { icon: <FaTwitter />, link: "https://twitter.com/TechnicMentors" },
              { icon: <FaFacebookF />, link: "https://www.facebook.com/TechnicMentors" },
              { icon: <FaInstagram />, link: "https://www.instagram.com/technicmentorsofficial/#" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/TechnicMentors/" },
            ].map(({ icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#ddb75e] rounded-full text-white hover:text-white font-bold transition transform hover:-translate-y-1"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

       
        <div>
          <h3 className="font-semibold uppercase">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            {[
              { text: "Home", path: "/" },
              { text: "About", path: "/about" },
              { text: "Products", path: "/products" },
              { text: "Meals", path: "/meals" },
              { text: "Contact", path: "/contact" },
            ].map(({ text, path }, index) => (
              <li key={index}>
                <Link
                  to={path}
                  className="relative inline-block transition-transform duration-300 hover:translate-x-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#ddb75e] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold uppercase">Contact</h3>
          <ul className="mt-2 space-y-3">
            {[
              { icon: <FaPhone />, text: "(+923) 458 662 825", link: "tel:+923458662825" },
              { icon: <FaPhone />, text: "+923 030 869 985", link: "tel:+923030869985" },
              { icon: <FaEnvelope />, text: "info@faonefoods.com", link: "mailto:info@faonefoods.com" },
              { icon: <FaMapMarkerAlt />, text: "238 Lalazar Commercial Market, Lahore" },
            ].map(({ icon, text, link }, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="p-2 bg-[#ddb75e] rounded-full transition transform hover:-translate-y-1 cursor-pointer">
                  {icon}
                </span>
                {link ? (
                  <a href={link} className="hover:underline hover:text-gray-300 transition">
                    {text}
                  </a>
                ) : (
                  <span>{text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

     
        <div>
          <h3 className="font-bold uppercase">Subscribe to Newsletter</h3>
          <div className="mt-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-2 border rounded-md focus:outline-none text-black"
            />
            <button
              onClick={handleSubscribe}
              className="mt-2 w-full bg-white text-[#ddb75e] font-bold p-2 rounded-md hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="relative mt-5 border-t border-white opacity-50"></div>

     
      <div className="relative mt-3 text-center text-sm font-bold">
        © {new Date().getFullYear()} FAOne FOODS. All Rights Reserved. | Developed with 💙 by
        <a href="https://technicmentors.com" target="_blank" rel="noopener noreferrer" className="ml-1 text-white font-semibold hover:underline">
          Technic Mentors
        </a>
      </div>
    </footer>
  );
};

export default Footer;
