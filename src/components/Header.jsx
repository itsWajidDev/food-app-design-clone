import React, { useState } from 'react'
import Logo from '../assets/looog.png'
import { FaCaretDown } from "react-icons/fa6";
import { IoSearchCircleOutline } from "react-icons/io5";
import { IoFilter } from "react-icons/io5";
import { TfiHelp } from "react-icons/tfi";
import { LiaSignInAltSolid } from "react-icons/lia";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import HeaderInsideForm from './HeaderInsideForm';

export default function Header() {

    const [toggle, setToggle] = useState(false)

    const showSide = () => {
        setToggle(true)
    }

    const closeSidebar = () => {
        setToggle(false)
    }

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
    ]

    return (
        <>
            <div className='over-lay z-40	 fixed w-full h-full duration-500' onClick={closeSidebar} style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? 'visible' : 'hidden'
            }}>
                <div onClick={(e) => {
                    e.stopPropagation()
                }} className='w-[400px] bg-white h-full duration-700 absolute ' style={{
                    left: toggle ? '0%' : '-100%'
                }}>

                    <HeaderInsideForm />
                </div>

            </div>

            <header className='p-[15px] shadow-xl sticky top-0 z-[99999] bg-white'>
                <div className='max-w-[1200px] mx-auto  flex items-center'>

                    <div className='w-[100px] border outline-none cursor-pointer'>
                        <img src={Logo} className='w-full' />
                    </div>

                    <div className='cursor-pointer'>
                        <span className='font-bold border-b-[3px] border-[black] mx-[10px]'>Banu Beef</span> Hai Bht Tasty, Lahore, Pakistan. <FaCaretDown onClick={showSide} className='inline text-[0.9rem] text-[#fc8019] cursor-pointer' />
                    </div>

                    {/* menu */}

                    <nav className='flex align-middle gap-10 list-none ml-auto text-[18px]'>
                        {
                            links.map((link, index) => {
                                return (
                                    <li key={index} className='flex items-center gap-2 cursor-pointer hover:text-yellow-500 duration-400'>
                                        {link.icon}
                                        {link.name}
                                        <sup>{link.sup}</sup>
                                    </li>
                                )
                            })
                        }
                    </nav>

                </div>
            </header>
        </>
    )
}
