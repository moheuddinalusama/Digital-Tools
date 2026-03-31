import React from 'react';
import banner from "../assets/banner.png";
import { RiFocus2Fill } from 'react-icons/ri';
import { MdOutlinePlayArrow } from 'react-icons/md';

const Discrption = () => {
    return (
        <section className="bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 md:py-20 lg:py-28">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8">
                    
                    <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left">
                        
                   
                        <div className="inline-flex items-center bg-blue-50 border border-blue-100 rounded-full px-4 py-2 shadow-sm">
                            <RiFocus2Fill className="size-5 text-blue-600 mr-2" />
                            <span className="text-sm font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                                New: AI-Powered Tools Available
                            </span>
                        </div>

               
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                            Supercharge Your <br />
                            <span className="text-[#4F39F6]">Digital Workflow</span>
                        </h1>

                     
                        <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
                            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
                        </p>

                   
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <button className="btn btn-md md:btn-lg rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] border-none text-white font-bold px-8 shadow-lg hover:scale-105 transition-transform">
                                Explore Products
                            </button>
                            <button className="btn btn-md md:btn-lg btn-outline border-2 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full px-6 hover:bg-[#4F39F6] hover:text-white transition-all">
                                <MdOutlinePlayArrow className="size-6 mr-1" /> Watch Demo
                            </button>
                        </div>
                    </div>

         
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-pulse-slow">
                        <img 
                            src={banner} 
                            alt="Banner AI Tools" 
                            className="w-full max-w-[550px] h-auto object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Discrption;