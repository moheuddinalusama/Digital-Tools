import { useState } from 'react';
import Card from './Card';

const ProductCard = ({ products, cartItems, handleAddToCart, handleRemove, handleCheckout }) => {
  const [activeTab, setActiveTab] = useState('products');
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex justify-center gap-4 mb-12">
        <button 
          onClick={() => setActiveTab('products')}
          className={`px-8 py-3 rounded-full font-bold transition ${activeTab === 'products' ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-lg' : 'bg-white border text-gray-600'}`}
        >
          Products
        </button>
        <button 
          onClick={() => setActiveTab('cart')}
          className={`px-8 py-3 rounded-full font-bold transition ${activeTab === 'cart' ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-lg' : 'bg-white border text-gray-600'}`}
        >
          Cart ({cartItems.length})
        </button>
      </div>

      {activeTab === 'products' ? (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(p => (
            <Card key={p.id} product={p} handleAddToCart={handleAddToCart} cartItems={cartItems} />
          ))}
        </div>
      ) : (
      
        <div className=" mx-auto bg-white p-8 rounded shadow-2xl border border-green-500">
          <h2 className="text-2xl text-black font-bold mb-6">Your Selected Products</h2>
          {cartItems.length > 0 ? (
            <>
              <div className="space-y-4 mb-8">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <h4 className="font-bold text-black text-xl">{item.name}</h4>
                        <p className="text-md font-bold text-gray-500">${item.price}</p>
                      </div>
                    </div>
                    <button onClick={() => handleRemove(item.id)} className="text-red-500 font-medium hover:underline hover:bg-red-200 px-6 py-1 rounded-4xl">Remove</button>
                  </div>
                ))}
              </div>
            
              <div className="border-t pt-6">
                <div className="flex justify-between text-xl font-bold mb-6">
                  <span className='text-black'>Total Amount:</span>
                  <span className='text-black'>${totalPrice}</span>
                </div>
                <button onClick={handleCheckout} className="w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white py-4 rounded-xl font-bold hover:bg-purple-700 transition">
                  Proceed To Checkout
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-10 text-gray-400 font-medium">Your cart is currently empty! 🛒</div>
          )}
        </div>
      )}
    </section>
  );
};

export default ProductCard;