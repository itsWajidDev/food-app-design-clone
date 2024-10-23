import React from 'react';
import { GiEternalLove } from "react-icons/gi";

export default function Footer() {
  return (
    <>
      <div className='max-w-[1200px] mx-auto mb-10 px-4'>
        {/* Header Text */}
        <div className='flex items-center justify-center'>
          <div className='text-[28px] sm:text-[35px] my-6 font-bold'>
            We Made Food With <GiEternalLove className='inline text-red-500' /> Love!
          </div>
        </div>

        {/* Footer Links */}
        <div className='bg-[#f9f9f9] shadow flex flex-col md:flex-row justify-between gap-6 max-w-[900px] mx-auto p-8'>
          
          {/* Quick Links */}
          <div className='text-black'>
            <span className='font-bold'>Quick Links</span>
            <ul className='mt-2'>
              <li className='text-[16px] hover:text-yellow-500 cursor-pointer'>Home</li>
              <li className='text-[16px] hover:text-yellow-500 cursor-pointer'>Services</li>
              <li className='text-[16px] hover:text-yellow-500 cursor-pointer'>Food</li>
              <li className='text-[16px] hover:text-yellow-500 cursor-pointer'>Order</li>
            </ul>
          </div>

          {/* Food Category */}
          <div className='text-black'>
            <span className='font-bold'>Food Category</span>
            <ul className='mt-2'>
              <li className='text-[16px] hover:text-yellow-500 cursor-pointer'>Desi</li>
              <li className='text-[16px] hover:text-yellow-500 cursor-pointer'>Chinese</li>
              <li className='text-[16px] hover:text-yellow-500 cursor-pointer'>Indian</li>
              <li className='text-[16px] hover:text-yellow-500 cursor-pointer'>Karachi</li>
            </ul>
          </div>

          {/* Terms & Conditions */}
          <div className='text-black'>
            <span className='font-bold'>Terms & Conditions</span>
            <ul className='mt-2'>
              <li className='text-[16px] hover:text-yellow-500 cursor-pointer'>Privacy Policy</li>
              <li className='text-[16px] hover:text-yellow-500 cursor-pointer'>User Agreement</li>
              <li className='text-[16px] hover:text-yellow-500 cursor-pointer'>User Policy</li>
              <li className='text-[16px] hover:text-yellow-500 cursor-pointer'>Contact Info</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className='my-6 bg-black' />

        {/* Footer Note */}
        <div className='max-w-[900px] flex justify-center font-semibold text-center p-2 mx-auto'>
          © 2024 Wajid Web Solutions. All Rights Reserved.
        </div>
      </div>
    </>
  );
}
