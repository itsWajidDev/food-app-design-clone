import React, { useState } from 'react';
import Logo from '../assets/looog.png';
import { FaCaretDown } from "react-icons/fa6";
import { IoSearchCircleOutline, IoFilter } from "react-icons/io5";
import { TfiHelp } from "react-icons/tfi";
import { LiaSignInAltSolid } from "react-icons/lia";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import HeaderInsideForm from './HeaderInsideForm';

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const showSide = () => {
    setToggle(true);
  };

  const closeSidebar = () => {
    setToggle(false);
  };

  const links = [
    {
      icon: <IoSearchCircleOutline />,
      name: 'Search'
    },
    {
      icon: <IoFilter />,
      name: 'Offer',
      sup: 'new'
    },
    {
      icon: <TfiHelp />,
      name: 'Help'
    },
    {
      icon: <LiaSignInAltSolid />,
      name: 'SignIn'
    },
    {
      icon: <MdOutlineAddShoppingCart />,
      name: 'Cart',
      sup: '(02)'
    },
  ];

  return (
    <>
      {/* Sidebar Overlay */}
      <div className='over-lay z-40 fixed w-full h-full bg-black/50 duration-500' onClick={closeSidebar} style={{
        opacity: toggle ? 1 : 0,
        visibility: toggle ? 'visible' : 'hidden'
      }}>
        <div onClick={(e) => e.stopPropagation()} className='w-[80%] sm:w-[400px] bg-white h-full duration-700 absolute' style={{
          left: toggle ? '0%' : '-100%'
        }}>
          <HeaderInsideForm />
        </div>
      </div>

      {/* Header Section */}
      <header className='p-4 sm:p-6 shadow-xl sticky top-0 z-[9999] bg-white'>
        <div className='max-w-[1200px] mx-auto flex items-center justify-between'>
          {/* Logo */}
          <div className='w-[80px] sm:w-[100px]'>
            <img src={Logo} alt="Company Logo" className='w-full' />
          </div>

          {/* Address and Dropdown */}
          <div className='hidden md:flex cursor-pointer items-center'>
            <span className='font-bold border-b-2 border-black mx-2'>Banu Beef</span> Hai Bht Tasty, Lahore, Pakistan.
            <FaCaretDown onClick={showSide} className='inline text-[0.9rem] text-[#fc8019] ml-2 cursor-pointer' />
          </div>

          {/* Mobile Dropdown for Address */}
          <div className='md:hidden flex items-center'>
            <FaCaretDown onClick={showSide} className='text-[1.2rem] text-[#fc8019] cursor-pointer' />
          </div>

          {/* Navigation Menu */}
          <nav className='hidden md:flex items-center gap-6 list-none ml-auto text-[16px] lg:text-[18px]'>
            {
              links.map((link, index) => (
                <li key={index} className='flex items-center gap-2 cursor-pointer hover:text-yellow-500 duration-300'>
                  {link.icon}
                  {link.name}
                  <sup>{link.sup}</sup>
                </li>
              ))
            }
          </nav>

          {/* Hamburger Icon for Mobile */}
          <div className='md:hidden cursor-pointer text-[#fc8019]' onClick={showSide}>
            <MdOutlineAddShoppingCart size={24} />
          </div>
        </div>
      </header>
    </>
  );
}
