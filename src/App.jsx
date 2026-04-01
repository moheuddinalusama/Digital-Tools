
import './App.css'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Navbar from './componets/navber';
import Banner from './componets/Discrption';
import Board from './componets/Bord';
import ProductCard from './componets/ProductCard';
import Steps from './componets/Steps';
import Pament from './componets/Pament';
import PricingHeader from './componets/Discription2';
import Ctasection from './componets/Ctasection';
import Footer from './componets/Footer';
import productsData from '../public/Card.json';
import pamentData from '../public/Pament.json';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (product) => {
    const isExist = cartItems.find(item => item.id === product.id);
    if (!isExist) {
      setCartItems([...cartItems, product]);
      toast.success(`${product.name} added to cart!`);
    } else {
      toast.warn("Already added to cart!");
    }
  };


  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast.error("Item removed from cart.");
  };

  const handleCheckout = () => {
    setCartItems([]);
    toast.info("Checkout complete! Cart cleared.");
  };

  return (
    <div className="font-sans bg-gray-50">
      <ToastContainer position="top-center" autoClose={2000} />
      
      <Navbar cartCount={cartItems.length} />
      
      <main>
        <Banner />
        <Board />
        <ProductCard 
          products={productsData}
          cartItems={cartItems}
          handleAddToCart={handleAddToCart}
          handleRemove={handleRemove}
          handleCheckout={handleCheckout}
        />
        
        <Steps />
        
        <div className="bg-white py-16">
          <PricingHeader />
          <Pament pementData={pamentData} />
        </div>
        
        <Ctasection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;