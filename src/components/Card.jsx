import React from 'react';
import { IoIosStarHalf } from "react-icons/io";

export default function Card(props) {
  return (
    <div className='w-[270px] sm:w-[300px] md:w-[320px] lg:w-[350px] shrink-0 grow p-2'>
      <div className='group h-[180px] rounded-[15px] relative overflow-hidden'>
        <img 
          className='object-cover group-hover:scale-110 duration-150 w-full h-full' 
          src={'/public/images2/' + props.image} 
          alt={props.title}
        />
        <div className='image-overlay absolute w-full h-full flex items-end top-0 p-2 text-white text-[18px] sm:text-[22px] font-bold tracking-tight'>
          {props.offer}
        </div>
      </div>
      
      <div className='flex font-bold py-2 text-[16px] sm:text-[18px]'>
        {props.title}
      </div>
      
      <div className='font-bold gap-4 flex items-center text-[14px] sm:text-[16px]'>
        <IoIosStarHalf />
        <span className='ml-[-10px]'>{props.rating}</span>
        {props.minTime}-{props.maxTime + ' min'}
      </div>

      <div className='flex text-[14px] sm:text-[16px]'>
        {props.name}
        <br />
        {props.place}
      </div>
    </div>
  );
}
