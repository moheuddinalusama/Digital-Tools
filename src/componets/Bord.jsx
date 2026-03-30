import React from 'react';

const Bord = () => {
    return (
        <div className=''>
            <div className="grid grid-cols-3 bg-[#4F39F6] justify-between items-center py-14 px-48 text-center mx-auto">
                <div className='border-r border-gray-300'>
                    <h2 className='font-bold text-5xl text-white'>50K+</h2>
                    <p className='text-gray-300'>Active Users</p>
                </div>
                <div className='border-r border-gray-300'>
                    <h2 className='font-bold text-5xl text-white'>200+</h2>
                    <p className='text-gray-300'>Premium Tools</p>
                </div>
                <div className=''>
                    <h2 className='font-bold text-5xl text-white'>4.9</h2>
                    <p className='text-gray-300'>Rating</p>
                </div>
                
            </div>
        </div>
    );
};

export default Bord;