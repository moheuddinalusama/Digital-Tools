import React from 'react';

const Navber = ({ cartCount }) => {
    return (
        <div className="sticky top-0 z-50 shadow-sm bg-white/80 backdrop-blur-sm">
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className="navbar py-4 px-0">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden p-0 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                                <li><a>Products</a></li>
                                <li><a>Features</a></li>
                                <li><a>Pricing</a></li>
                                <li><a>FAQ</a></li>
                            </ul>
                        </div>
                        <h2 className='text-xl md:text-3xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent cursor-pointer'>
                            Digital Tool
                        </h2>
                    </div>


                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-semibold gap-2">
                            <li><a className="hover:text-[#4F39F6]">Products</a></li>
                            <li><a className="hover:text-[#4F39F6]">Features</a></li>
                            <li><a className="hover:text-[#4F39F6]">Pricing</a></li>
                            <li><a className="hover:text-[#4F39F6]">FAQ</a></li>
                        </ul>
                    </div>



                    <div className="navbar-end gap-2 md:gap-4">

                        <div className="indicator mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="badge badge-sm indicator-item font-bold bg-amber-400 text-white border-none">
                                {cartCount}
                            </span>
                        </div>

                        <p className="hidden md:block font-semibold cursor-pointer">Login</p>

                        <button className='btn btn-sm md:btn-md rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] border-none text-white font-bold px-4 md:px-8 hover:opacity-90'>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;