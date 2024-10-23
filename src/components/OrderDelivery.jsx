import React, { useEffect, useState } from 'react';
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import Card from './Card';

export default function OrderDelivery() {
    const [order, setOrder] = useState([]);
    const [slide, setSlide] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3); // Default number of visible cards

    const apiD = async () => {
        const response = await fetch('/restaurantChains.json');
        const data = await response.json();
        setOrder(data);
    };

    // Function to handle the next slide
    const slideNext = () => {
        if (slide >= order.length - visibleCards) return; // Prevent sliding beyond available cards
        setSlide(slide + 1);
    };

    // Function to handle the previous slide
    const prevSlide = () => {
        if (slide === 0) return; // Prevent sliding backward beyond first card
        setSlide(slide - 1);
    };

    // Function to adjust the number of visible cards based on screen size
    const handleResize = () => {
        const width = window.innerWidth;
        if (width <= 640) {
            setVisibleCards(1); // Mobile screens
        } else if (width <= 1024) {
            setVisibleCards(2); // Tablet screens
        } else {
            setVisibleCards(3); // Desktop screens
        }
    };

    useEffect(() => {
        apiD();
        handleResize(); // Set initial visible cards based on screen size

        window.addEventListener('resize', handleResize); // Listen for screen resizing
        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup the event listener
        };
    }, []);

    return (
        <>
            <div className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex my-3 items-center justify-between'>
                    <div className='text-[24px] sm:text-[28px] md:text-[35px] my-10 font-bold'>
                        What's The Order Delivery Process?
                    </div>
                    <div className='flex'>
                        <div className='cursor-pointer flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={prevSlide}>
                            <LuArrowLeft />
                        </div>
                        <div className='cursor-pointer flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={slideNext}>
                            <LuArrowRight />
                        </div>
                    </div>
                </div>

                <div className='mb-14 flex gap-6 overflow-hidden'>
                    {/* Card Slider */}
                    {order.map((d, i) => (
                        <div key={i} className='duration-500 z-10 flex-shrink-0'
                            style={{
                                transform: `translateX(-${slide * (100 / visibleCards)}%)`, // Adjust based on visible cards
                                width: `${100 / visibleCards}%` // Dynamically adjust width of each card
                            }}
                        >
                            <Card {...d} />
                        </div>
                    ))}
                </div>

                <hr className='my-6 bg-[#00000]' />
            </div>
        </>
    );
}
