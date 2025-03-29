import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import ScrollToTop from "./ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import Meal from "./pages/Meal";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import Footer from "./components/Footer";
import './App.css';
import ScrollingBanner from "./components/ScrollingBanner";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollingBanner />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/meals" element={<Meal />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />

     
      <FloatingWhatsApp 
        phoneNumber="+923 458 662 825"  
        accountName="FAOne FOODS" 
        avatar="/logo.png"  
        allowClickAway
        notification
        notificationSound
        chatMessage="Hello! How can we assist you today?" 
      />
      
      
    </Router>
  );
}

export default App;
