import React from 'react'
import { GiEternalLove } from "react-icons/gi";

export default function Footer() {
  return (
 <>
                  <div className='max-w-[1200px] mx-auto mb-10'>
   <div className='flex my-3 items-center justify-center '>
        <div className='text-[35px] my-10 font-bold	 '>We Made Food WIth<GiEternalLove  className='inline'/>
         Love!</div>



            
        </div>
        <div className='bg-[#f9f9f9] shadow flex justify-between  max-w-[900px] mx-auto p-10'>

                <div className=' text-black p-3 '> <span className='font-bold'>Quick Links</span>

                <ul>
                
                <li className='text-[16px] hover:text-yellow-500 cursor-pointer'>Home</li>
                <li className='text-[16px] hover:text-yellow-500 cursor-pointer'>Services</li>
                <li className='text-[16px] hover:text-yellow-500 cursor-pointer'>Food</li>
                <li className='text-[16px] hover:text-yellow-500 cursor-pointer'>Order</li>

                    
                </ul>


                </div>

                 
                <div className=' text-black p-3 '> <span className='font-bold'>Food Category</span>

<ul>
<li className='text-[16px] hover:text-yellow-500 cursor-pointer'>Desi</li>
<li className='text-[16px] hover:text-yellow-500 cursor-pointer'>Chinase</li>
<li className='text-[16px] hover:text-yellow-500 cursor-pointer'>Indian</li>
<li className='text-[16px] hover:text-yellow-500 cursor-pointer'>Karachi</li>
    
</ul>


</div>



<div className=' text-black p-3 '> <span className='font-bold'>Terms & Conditions</span>

<ul>
<li className='text-[16px] hover:text-yellow-500 cursor-pointer'>Privacy Policy</li>
<li className='text-[16px] hover:text-yellow-500 cursor-pointer'>User Agreement</li>
<li className='text-[16px] hover:text-yellow-500 cursor-pointer'>User Policy</li>
<li className='text-[16px] hover:text-yellow-500 cursor-pointer'>Cotact Info</li>
    
</ul>


</div>




               
            </div>

            <hr  className='my-6 bg-[#00000] mt-20 '/>
        </div>

        <div className='max-w-[900px] flex justify-center font-semibold	 text-center p-2 mx-auto'>
        © 2024 Wajid Web Solutions. All Rights Reserved.

        </div>
 
 
 </>
  )
}
