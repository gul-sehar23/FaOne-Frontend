import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full overflow-hidden">
      
     
      <div 
        className="bg-[#c2141b] text-white p-6 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4" 
        data-aos="fade-right"
      >
        <div className="flex flex-col text-center md:text-left">
          <h2 className="text-2xl font-bold mb-3">Exclusive Collection</h2>
          <h3 className="text-3xl font-bold mb-4 leading-snug">Get a 10% Discount During Payday Week</h3>
          <Link
            to="/pricing" 
            className="text-white font-bold underline hover:text-gray-300 transition mt-2"
          >
            Shop Now
          </Link>
        </div>
        
        <div className="w-24 h-24 md:w-28 md:h-28 overflow-hidden rounded-lg">
          <img 
            src="https://templatekit.jegtheme.com/milcow/wp-content/uploads/sites/155/2021/09/Product.png" 
            alt="Product" 
            className="w-full h-full object-cover transform transition duration-300 hover:scale-110"
          />
        </div>
      </div>

      <div 
        className="bg-[#ddb75e] text-white p-6 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4" 
        data-aos="fade-left"
      >
        <div className="flex flex-col text-center md:text-left">
          <h2 className="text-2xl font-bold mb-3">Premium Quality</h2>
          <h3 className="text-3xl font-bold mb-4 leading-snug">Buy 1 Bottle of Milk & Get 1 Free Cow's Milk</h3>

          <Link
            to="/pricing" 
            className="text-white font-bold underline hover:text-gray-300 transition mt-2"
          >
            Shop Now
          </Link>
          
        </div>
        
        <div className="w-24 h-24 md:w-28 md:h-28 overflow-hidden rounded-lg">
          <img 
            src="https://templatekit.jegtheme.com/milcow/wp-content/uploads/sites/155/2021/09/milk-bottle-PAWAY9D.png" 
            alt="Product" 
            className="w-full h-full object-cover transform transition duration-300 hover:scale-110"
          />
        </div>
      </div>

    </section>
  );
};

export default ProductsCard;
