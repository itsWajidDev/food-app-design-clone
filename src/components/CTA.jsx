import React from 'react';
import CtaImg from '/images2/8a219d4389efaf1eb8da144d5c6fb66e.jpeg';

export default function CTA() {
  return (
    <>
      <div className='max-w-[1200px] mx-auto px-4'>
        <div className='flex flex-col md:flex-row my-3 items-center justify-center bg-[#f9f9f9] p-6 overflow-hidden'>
          {/* Text Section */}
          <div className='md:my-10 p-6 md:p-10 flex-1'>
            <h2 className='font-bold text-[28px] sm:text-[35px]'>
              What's The Order Delivery Process?
            </h2>
            <p className='mt-4 text-[16px] sm:text-[18px] md:pr-10'>
              If you really like these items and want to eat alone, you just need to subscribe by entering your email address.
            </p>
            <button className='cursor-pointer font-bold p-2 mt-6 shadow bg-black text-white'>
              Contact Now
            </button>
          </div>

          {/* Image Section */}
          <div className='w-full md:w-[450px] h-[250px] md:h-[300px] mt-6 md:mt-0 group'>
            <img
              src={CtaImg}
              className='group-hover:scale-110 duration-150 w-full h-full object-cover'
              alt='Order Process'
            />
          </div>
        </div>

        {/* Divider */}
        <hr className='my-6 bg-black' />
      </div>
    </>
  );
}
