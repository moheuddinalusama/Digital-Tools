import React from 'react';
import { IoCheckmarkOutline } from 'react-icons/io5';

const Card = ({ product }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 bg-gray-50">
            {product?.map((cardData) => {
                const { id, icon, tagType, name, description, features, price, period, tag } = cardData;

                return (
                    <div key={id} className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">

                        <div className="flex justify-between items-center mb-4">
                            <span className="text-3xl">{icon}</span>
                            <span className={`text-[10px] px-2 py-1 rounded-full uppercase font-bold 
                                ${tagType === 'featured' ? 'bg-purple-100 text-purple-600' :
                                    tagType === 'new' ? 'bg-green-200 text-green-600' :
                                        tagType === 'bestseller' ? 'bg-orange-100 text-orange-600' :
                                            tagType === 'popular' ? 'bg-blue-100 text-blue-600' :
                                                'bg-gray-100 text-gray-600'}`}>
                                {tag || tagType}
                            </span>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-gray-800">{name}</h3>
                            <p className="text-gray-500 text-sm my-2">{description}</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-xl font-black text-gray-900">${price}</span>
                                <span className="text-gray-400 text-xs">/ {period}</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <span className="text-green-500 text-xs">
                                        <IoCheckmarkOutline className='size-5' />
                                    </span>
                                    <p className="text-sm text-gray-600">{feature}</p>
                                </div>
                            ))}
                        </div>

                        <button className="mt-6 w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
                            Choose Plan
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;