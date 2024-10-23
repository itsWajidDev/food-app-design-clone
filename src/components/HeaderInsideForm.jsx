import React from 'react';
import Logo from '../assets/looog.png';

export default function HeaderInsideForm() {
  return (
    <>
      {/* Logo Section */}
      <div className='fixed top-4 left-4 sm:left-10 max-w-[50px] sm:max-w-[60px] md:max-w-[80px] z-40'>
        <img src={Logo} alt="Company Logo" />
      </div>

      {/* Form Section */}
      <div className="flex justify-center items-center mt-20 h-screen relative">
        <div className='max-w-[95%] sm:max-w-[400px] bg-[#fc8019] p-6 sm:p-8 md:p-10 rounded-[15px] shadow-lg'>
          <form>
            {/* Full Name Field */}
            <div>
              <label className="text-black text-sm md:text-base">Full Name</label>
              <input 
                type="text" 
                name="name" 
                placeholder="Enter Full Name" 
                className="w-full p-2 mt-1 mb-3 border border-gray-300 rounded"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="text-black text-sm md:text-base">Email</label>
              <input 
                type="email" 
                name="email" 
                placeholder="Enter Email" 
                className="w-full p-2 mt-1 mb-3 border border-gray-300 rounded"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="text-black text-sm md:text-base">Message</label>
              <textarea 
                name="message" 
                placeholder="Send Message" 
                className="w-full p-2 mt-1 mb-3 border border-gray-300 rounded"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-blue-800 text-white p-2 rounded mt-3 hover:bg-blue-900 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
