import React, { useState } from 'react';
import { IoCheckmarkOutline } from 'react-icons/io5';

const Pament = ({ pementData }) => {
    const [selectedPlan, setSelectedPlan] = useState("Pro");

    return (
        <div className="bg-gray-100 py-20 px-4 min-h-screen">
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto">
                {pementData && pementData.map((plan, index) => {
                    const isSelected = selectedPlan === plan.planName;

                    return (
                        <div
                        
                
                            key={index}
                            className={`relative flex flex-col p-8 rounded w-full max-w-sm transition-all duration-500 transform 
                            ${isSelected
                                    ? ' bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-2xl scale-105 z-10'
                                    : 'bg-white text-gray-900 border border-gray-200 shadow-md hover:shadow-lg'
                                }`}
                        >
                            {plan.planName === "Pro" && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#D97706] px-5 py-1 rounded-full text-xs font-bold border border-[#FDE68A]">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h2 className="text-2xl font-bold mb-2">{plan.planName}</h2>
                                <p className={`text-sm ${isSelected ? 'text-purple-100' : 'text-gray-500'}`}>
                                    {plan.description}
                                </p>
                            </div>

                            <div className="flex items-baseline mb-8">
                                <span className="text-2xl font-bold">${plan.price}</span>
                                <span className={`ml-1 text-lg ${isSelected ? 'text-purple-200' : 'text-gray-400'}`}>/Month</span>
                            </div>

                            <ul className="flex-1 space-y-4 mb-10">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                                        <span className={`flex items-center justify-center w-5 h-5 rounded-full ${isSelected ? 'text-white' : 'text-green-500'}`}>
                                           <IoCheckmarkOutline className='size-4'/>
                                        </span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => setSelectedPlan(plan.planName)}
                                className={`w-full py-4 rounded-full font-bold transition-all duration-300 active:scale-95 ${isSelected
                                        ? 'bg-white text-[#7C3AED] shadow-md'
                                        : ' bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:bg-[#6D28D9]'
                                    }`}
                            >
                                {isSelected ? "Selected" : plan.buttonText}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Pament;