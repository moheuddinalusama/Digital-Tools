import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="bg-[#0B1221] text-white py-16 px-6 md:px-20 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-12 gap-12 mb-16">
                    
                

                    <div className="md:col-span-4 space-y-6">
                        <h2 className="text-4xl font-bold tracking-tight">DigiTools</h2>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>
                    </div>



                    <div className="md:col-span-2">
                        <h3 className="text-white font-semibold text-lg mb-6">Product</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-white transition">Features</a></li>
                            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition">Templates</a></li>
                            <li><a href="#" className="hover:text-white transition">Integrations</a></li>
                        </ul>
                    </div>

            
                    <div className="md:col-span-2">
                        <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-white transition">About</a></li>
                            <li><a href="#" className="hover:text-white transition">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition">Press</a></li>
                        </ul>
                    </div>



                    <div className="md:col-span-2">
                        <h3 className="text-white font-bold text-lg mb-6">Resources</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition">Community</a></li>
                            <li><a href="#" className="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>

                

                    <div className="md:col-span-2">
                        <h3 className="text-white font-semibold text-lg mb-6">Social Links</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-white p-2 rounded-full text-black hover:bg-gray-200 transition">
                               <FaInstagram/>
                            </a>
                            <a href="#" className="bg-white p-2 rounded-full text-black hover:bg-gray-200 transition">
                             <FaFacebook/>
                            </a>
                            <a href="#" className="bg-white p-2 rounded-full text-black hover:bg-gray-200 transition">
                               <FaTwitter/>
                            </a>
                        </div>
                    </div>
                </div>



                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2026 Digitools. All rights reserved.
                    </p>
                    <div className="flex space-x-8 text-gray-500 text-sm">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;