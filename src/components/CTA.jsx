import React from 'react'
import CtaImg from '/images2/8a219d4389efaf1eb8da144d5c6fb66e.jpeg'
export default function CTA() {
  return (
 <>
 
 <div className='max-w-[1200px] mx-auto'>
   <div className='flex my-3 items-center justify-center bg-[#f9f9f9] p-6 overflow-hidden '>
        <div className=' my-10 p-10  	'>

        <h2 className='font-bold text-[35px]'>What's The Order Delivery Process?</h2>
        <p className='pr-40'>If you really like this items and wants to eat alonely. Then 
            you just have to do Subscribe by Entering Your Email address. 
        </p>
        <button className='cursor-pointer font-bold p-2 shadow bg-black text-white mt-4'>Contact Now</button>
        </div>

        <div className='object-cover w-[450px] h-[200px] center px-10 group '>

        <img src={CtaImg}   className='group-hover:scale-110 duration-150 w-full h-full '/>
        </div>


        </div>
        <hr  className='my-6 bg-[#00000]'/> 
        </div>
 
 </>
  )
}
