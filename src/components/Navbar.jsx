import { useState } from "react";
import { FiPhoneCall, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#c2141b] text-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center py-2">
        
        <Link to="/" className="flex items-center ml-5">
          <img src="logo.png" alt="logo" className="h-16 w-auto" />
        </Link>

        <ul className="hidden lg:flex text-1xl space-x-6 font-semibold absolute left-1/2 transform -translate-x-1/2">
          {[  
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Products", path: "/products" },
            { name: "Pricing", path: "/pricing" },
            { name: "Meals", path: "/meals" },
            { name: "Blog", path: "/blog" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <li key={item.name} className="relative group">
              <Link to={item.path} className="cursor-pointer hover:text-gray-200 transition">
                {item.name}
              </Link>
              <span className="absolute left-0 bottom-[-4px] h-[2px] bg-[#ddb75e] w-0 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center space-x-2 bg-[#ddb75e] text-[#c2141b] font-semibold border border-[#ddb75e] border-solid rounded-[50px] px-3 py-1 shadow-md">
          <FiPhoneCall className="text-xl" />
          <span>+923 030 869 985</span>
        </div>

        <button 
          className="lg:hidden text-3xl focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#c2141b] text-white py-3 transition-all duration-300 shadow-lg">
          <ul className="flex flex-col items-center space-y-3 text-lg">
            {[  
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Products", path: "/products" },
              { name: "Pricing", path: "/pricing" },
              { name: "Meals", path: "/meals" },
              { name: "Blog", path: "/blog" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path} 
                  className="cursor-pointer hover:text-gray-300 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-400 opacity-60"></div>
    </nav>
  );
};

export default Navbar;
