import React from 'react';

const ProductCard = () => {
    return (
        <div>
            <section className='mt-20 mb-8'>
                <div className="space-y-4">
                    <div className=" text-center space-y-4">
                        <h2 className='text-3xl font-bold'>Premium Digital Tools</h2>
                         <p className='text-gray-600'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
                    </div>
                    <div className="flex gap-3 items-center justify-center ">
                        <button className='btn rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-4 py-2 font-bold text-white'>Products</button>
                        <p>Cart (0)</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductCard;