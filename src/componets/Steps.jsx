import React from 'react';
import user from "../assets/user.png"
import rocket from "../assets/rocket.png"
import pakin from "../assets/package.png"
const Steps = () => {
    return (
        <div>
            <div className="text-center mt-4 mb-4 md:mt-30 md:mb-10">
                <h3 className='text-3xl text-black font-bold'>Get Started in 3 Steps</h3>
                <p className='text-gray-600'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className=" grid grid-cols-1 px-6 md:grid-cols-3 gap-4 md:px-40 ">

                <div className="shadow-2xl p-10">
                    <div className="flex justify-end items-center gap-16 ">                    
                        <div className=" h-10 w-10 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-2 rounded-full flex justify-center items-center ">
                            <p className='text-white font-bold '>01</p>
                        </div>
                    </div>
                <div className="flex flex-col justify-center items-center ">
                    
                    <img src={user} alt="" />
                    <h2 className='text-2xl font-bold'>Create Account</h2>
                    <p  className='text-gray-600'> Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                </div>
                

                <div className="shadow-2xl p-10">
                    <div className="flex justify-end items-center gap-16 ">                    
                        <div className=" h-10 w-10 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-2 rounded-full flex justify-center items-center ">
                            <p className='text-white font-bold '>02</p>
                        </div>
                    </div>
                <div className="flex flex-col justify-center items-center ">
                    
                    <img src={pakin} alt="" />
                    <h2 className='text-2xl font-bold'>Choose Products</h2>
                    <p  className='text-gray-600'> Browse our catalog and select the tools <br />that fit your needs.</p>
                </div>
                </div>
                

                <div className="shadow-2xl p-10">
                    <div className="flex justify-end items-center gap-16 ">                    
                        <div className=" h-10 w-10 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-2 rounded-full flex justify-center items-center ">
                            <p className='text-white font-bold '>03</p>
                        </div>
                    </div>
                <div className="flex flex-col justify-center items-center ">
                    
                    <img src={rocket} alt="" />
                    <h2 className='text-2xl font-bold'>Start Creating</h2>
                    <p  className='text-gray-600'>Download and start using your premium tools immediately.</p>
                </div>
                </div>
                

             
                
                
            </div>
        </div>
    );
};

export default Steps;