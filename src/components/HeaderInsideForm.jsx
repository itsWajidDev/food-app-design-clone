import React from 'react'
import Logo from '../assets/looog.png'

export default function HeaderInsideForm() {
  return (
    <>
      <div className='fixed top-0 left-40 max-w-[80px]  mx-auto mt-50 z-40 overflow-hidden'>
        <img src={Logo} alt="Company Logo" />
      </div>

      <div className="flex justify-center items-center mt-20 h-screen z-30 relative">
        <div className='max-w-[300px] bg-[#fc8019] p-10 rounded-[15px] shadow'>
          <form>
            <div>
              <label className="text-black">Full Name</label>
              <input 
                type="text" 
                name="name" 
                placeholder="Enter Full Name" 
                className="w-full p-2 mt-1 mb-3"
              />
            </div>

            <div>
              <label className="text-black">Email</label>
              <input 
                type="email" 
                name="email" 
                placeholder="Enter Email" 
                className="w-full p-2 mt-1 mb-3"
              />
            </div>

            <div>
              <label className="text-black">Message</label>
              <textarea 
                name="message" 
                placeholder="Send Message" 
                className="w-full p-2 mt-1 mb-3"
              ></textarea>
            </div>

            <button type="submit" className="bg-blue-800 text-white p-2 rounded">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}
