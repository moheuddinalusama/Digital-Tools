import React from 'react';

const Ctasection = () => {
    return (
        <section className=" bg-gradient-to-r from-[#4F39F6] to-[#9514FA] mt-2 md:py-20 px-20 md:mt-12  md:mx-auto">
            <div className="flex flex-col items-center text-center space-y-8">
                
                <h2 className="text-3xl md:text-5xl font-bold text-white ">
                   Ready to Transform Your Workflow?
                </h2>
                
        
                <p className="text-gray-300 ">
                    Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.
                </p>

               
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <button className="bg-white text-[#7C3AED] font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:bg-gray-100 transition duration-300">
                        Get Started Free
                    </button>
                    <button className="bg-transparent text-white border-2 border-white font-semibold py-4 px-10 rounded-full text-lg hover:bg-white hover:text-[#7C3AED] transition duration-300">
                        Request Demo
                    </button>
                    
                </div>
                <p className='text-gray-300'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </section>
    );
};

export default Ctasection;