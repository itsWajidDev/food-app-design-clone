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
    if (category.length - 8 === slide) return false;
    setSlide(slide + 3);
  }

  const prevSlide = () => {
    if (slide === 0) return false;
    setSlide(slide - 3);
  }

  return (
    <div className='max-w-[1200px] mx-auto z-10 relative'>
      <div className='flex my-3 items-center justify-between'>
        <div className='text-[35px] my-10 font-bold'>What's On Your Mind? </div>
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

      <div className='flex overflow-hidden '>
        {category.map((cate, index) => {
          return (
            <div
              key={index}
              className='flex-grow w-[150px] shrink-0 duration-500 group'
              style={{
                transform: `translateX(-${slide * 100}%)`
              }}
            >
              <img src={`/public/images/${cate.image}`} alt={cate.name}  className='group-hover:scale-110 duration-150 w-full h-full '/>
            </div>
          );
        })}
      </div>
      <hr className='my-6 bg-[#000]' />
    </div>
  );
}
