import { IoCheckmarkOutline } from "react-icons/io5";

const Card = ({ product, handleAddToCart, cartItems }) => {
  const isAdded = cartItems.find(item => item.id === product.id);


  const tagStyles = {
   popular: "bg-orange-100 text-orange-600",
    new: "bg-green-100 text-green-600",
    "best seller": "bg-blue-100 text-blue-600",
    featured: "bg-purple-100 text-purple-600",
    reliable: "bg-cyan-100 text-cyan-600",
    security: "bg-red-100 text-red-600",
    developer: "bg-slate-100 text-slate-700",
    musthave: "bg-pink-800 text-pink-600",
    optimization: "bg-teal-100 text-teal-600",
    collaboration: "bg-indigo-100 text-indigo-600",
    essential: "bg-amber-100 text-amber-700",
    trending: "bg-rose-100 text-rose-600",
    enterprise: "bg-sky-100 text-sky-700",
    design: "bg-lime-100 text-lime-700",
    recommended: "bg-emerald-100 text-emerald-700",
    "designers choice": "bg-violet-100 text-violet-700"
  };

  return (
    <div className="bg-white p-6 rounded border border-blue-500/50 shadow-sm hover:shadow-md transition">
      <div className="relative mb-6">
        <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-3xl">
          {product.icon}
        </div>
        <span className={`absolute top-0 right-0 px-3 py-1 rounded-full text-xs font-bold uppercase ${tagStyles[product.tag?.toLowerCase()] || "bg-gray-100 text-gray-600"}`}>
          {product.tag}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
      
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-xl text-black font-black">${product.price}</span>
        <span className="text-gray-400 text-sm font-medium">/{product.period}</span>
      </div>

      <ul className="space-y-3 mb-8">
        {product.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
            <span className="text-green-500"><IoCheckmarkOutline className="size-4"/></span> {f}
          </li>
        ))}
      </ul>

      <button 
        onClick={() => handleAddToCart(product)}
        className={`w-full py-3 rounded-full font-bold transition ${isAdded ? 'bg-green-200 text-green-600' : 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:bg-purple-600'}`}
      >
        {isAdded ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default Card;