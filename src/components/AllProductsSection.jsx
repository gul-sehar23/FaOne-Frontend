import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  { name: "Fresh Milk", description: "Pure and fresh dairy milk.", price: "$2.99", image: "https://templatekit.jegtheme.com/milcow/wp-content/uploads/sites/155/2021/09/traditional-glass-milk-bottle-P6GCXB3.png" },
  { name: "Full Cream Milk", description: "Rich and creamy full cream milk.", price: "$3.49", image: "https://templatekit.jegtheme.com/milcow/wp-content/uploads/sites/155/2021/09/Product.png" },
  { name: "UHT Milk", description: "Long-life ultra-heat-treated milk.", price: "$2.79", image: "https://templatekit.jegtheme.com/milcow/wp-content/uploads/sites/155/2021/09/Product2.png" },
  { name: "Margarine Butter", description: "Smooth and spreadable margarine.", price: "$1.99", image: "https://templatekit.jegtheme.com/milcow/wp-content/uploads/sites/155/2021/09/margarine-butter-or-cream-cheese-PAAZXKA.png" },
  { name: "Butter Cream", description: "Soft and delicious butter cream.", price: "$2.49", image: "https://templatekit.jegtheme.com/milcow/wp-content/uploads/sites/155/2021/09/pieces-of-butter-MKG386V.png" },
  { name: "Feta Cheese", description: "Rich and tangy feta cheese.", price: "$4.99", image: "https://templatekit.jegtheme.com/milcow/wp-content/uploads/sites/155/2021/09/feta-cheese-LR2MKHL.png" },
  { name: "Condensed Milk", description: "Sweetened condensed milk.", price: "$3.29", image: "https://templatekit.jegtheme.com/milcow/wp-content/uploads/sites/155/2021/09/condensed-milk-can-on-black-background-2SJ8KMD.png" },
  { name: "Gourmet Cheese", description: "Premium quality gourmet cheese.", price: "$6.99", image: "https://templatekit.jegtheme.com/milcow/wp-content/uploads/sites/155/2021/09/gourmet-cheese-isolated-R8D44QX.png" },
  { name: "Fresh Juices", description: "100% natural fruit juices.", price: "$2.99", image: "https://media.istockphoto.com/id/1304936721/photo/healthy-rainbow-colored-fruits-and-vegetables-smoothies-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=aD_W9ZEmra2DRxRftfIG8pQTaOP-8DIsQczj4lq01MY=" },
  { name: "Nuggets", description: "Crispy and tasty chicken nuggets.", price: "$5.49", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJePpsfa_yS3CdyLUwE_PK-8xaNAPebgunpQ&s" },
  { name: "Frozen Paratha", description: "Flaky and delicious frozen paratha.", price: "$4.99", image: "https://5.imimg.com/data5/LH/SU/GU/SELLER-14186204/frozen-paratha-500x500.jpg" },
  { name: "Frozen Meat", description: "Fresh and frozen meat cuts.", price: "$9.99", image: "https://st2.depositphotos.com/1022214/8462/i/950/depositphotos_84629990-stock-photo-frozen-raw-meat-wrapped-in.jpg" },
  { name: "Fresh Eggs", description: "Farm-fresh chicken eggs.", price: "$3.99", image: "https://static.vecteezy.com/system/resources/previews/027/601/773/non_2x/fresh-chicken-eggs-in-pater-tray-isolated-on-white-background-photo.jpg" },
  { name: "Almond Milk", description: "Nutritious almond-based milk.", price: "$3.99", image: "https://img.freepik.com/premium-photo/almonds-almond-milk-isolated-white-background_34435-3912.jpg" },
  { name: "Soy Milk", description: "Healthy soy-based milk.", price: "$3.79", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4EltDzLkVjOSbos2T9-XHG2zPNwkGDM19k8f2n7NQxBcYpzhtIvxnPdZvGJ-oUX1Nk8w&usqp=CAU" }
];

const AllProductsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="p-8 max-w-screen-xl mx-auto">
     
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-6" data-aos="fade-up">
        Our Premium Products
      </h2>

      <div className="flex flex-col lg:flex-row gap-8">
     
      <div className="w-full lg:w-1/4 bg-gray-100 p-6 rounded-lg shadow-md h-200 fixed-category" data-aos="fade-right">

          <h3 className="text-xl font-semibold border-b-2 border-[#c2141b] pb-2 text-gray-700">Product Categories</h3>
          <ul className="mt-4 space-y-2 list-disc list-inside">
            {products.map((product, index) => (
              <li key={index} className="text-gray-600  font-semibold hover:text-[#ddb75e] transition duration-300 cursor-pointer">
                {product.name}
                <hr className="mt-2 border-gray-300" />
              </li>
            ))}
          </ul>
        </div>

        
        <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} data-aos="fade-up" className="relative p-5 bg-white rounded-lg shadow-lg transition hover:shadow-xl flex flex-col items-center">
              <img src={product.image} alt={product.name} className="w-full h-40 object-contain rounded-md" />
              <h3 className="mt-3 text-lg font-bold text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-600 text-center">{product.description}</p>
              <p className="text-gray-500 font-semibold text-lg mt-2">{product.price}</p>
              
             
              <Link to="/pricing" className="mt-3 bg-[#ddb75e] text-white py-2 px-5 rounded-lg shadow-md transition hover:bg-[#73a63e]">
                  Order Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProductsSection;
