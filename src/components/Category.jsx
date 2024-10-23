import React, { useEffect, useState } from 'react';
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

export default function Category() {
  const [category, setCategory] = useState([]);
  const [slide, setSlide] = useState(0);

  // Fetch category data
  const fetchCategory = async () => {
    let response = await fetch('/category.json');  // Fetch from public folder
    let data = await response.json();
    setCategory(data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const slideNext = () => {
    if (category.length - 4 <= slide) return false; // Adjust for larger screen
    setSlide(slide + 1);  // Reduced the increment for better UX
  };

  const prevSlide = () => {
    if (slide === 0) return false;
    setSlide(slide - 1);
  };

  return (
    <div className='max-w-[1200px] mx-auto z-10 relative'>
      <div className='flex my-3 items-center justify-between'>
        <div className='text-[28px] sm:text-[35px] my-10 font-bold'>What's On Your Mind? </div>
        <div className='flex'>
          <div
            className='cursor-pointer flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'
            onClick={prevSlide}
          >
            <LuArrowLeft />
          </div>
          <div
            className='cursor-pointer flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'
            onClick={slideNext}
          >
            <LuArrowRight />
          </div>
        </div>
      </div>

      {/* Image Slider Section */}
      <div className='flex overflow-hidden'>
        {category.map((cate, index) => {
          return (
            <div
              key={index}
              className='w-[150px] sm:w-[200px] shrink-0 duration-500 group transition-all ease-in-out transform'
              style={{
                transform: `translateX(-${slide * 100}%)`
              }}
            >
              <img 
                src={`/public/images/${cate.image}`} 
                alt={cate.name} 
                className='group-hover:scale-110 duration-150 w-full h-[150px] sm:h-[200px] object-cover rounded-lg'
              />
            </div>
          );
        })}
      </div>

      {/* Divider */}
      <hr className='my-6 bg-[#000]' />
    </div>
  );
}
