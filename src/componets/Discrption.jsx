import React from 'react';
import banner from "../assets/banner.png"

import { RiFocus2Fill } from 'react-icons/ri';
import { MdOutlinePlayArrow } from 'react-icons/md';
const Discrption = () => {
    return (
        <div>
            <div className="flex justify-between items-center px-30 my-30">
                <div className="space-y-5">
                    <div className="w-fit bg-blue-100 rounded-full text-center ">
                        <p className=' flex items-center px-6 py-3'>
                            <RiFocus2Fill className='size-6 text-blue-600' /> <span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent '>New: AI-Powered Tools Available</span>
                        </p>
                    </div>
                    <h1 className='text-3xl font-bold'>Supercharge Your <br /><span>Digital Workflow</span></h1>
                    <p>Access premium AI tools, design assets, templates, and productivity software-all in one place. Start creating faster today.Explore Products</p>
                    <div className="flex gap-3">
                        <button className='btn rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-4 py-2 font-bold text-white'>GExplore Products</button>
                        <button className="btn btn-outline btn-primary rounded-full"><MdOutlinePlayArrow className='size-6'/> Watch Demo</button>
                    </div>
                </div>
                <div className=""><img src={banner} alt="banner.png" /></div>
            </div>
        </div>
    );
};

export default Discrption;