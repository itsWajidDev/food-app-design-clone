import React from 'react';

export default function NewCard(props) {
  return (
    <div className='w-[85%] sm:w-[220px] md:w-[270px] flex-shrink-0 grow'>
      <div className='group h-[160px] sm:h-[180px] md:h-[200px] rounded-[15px] relative overflow-hidden'>
        <img
          className='group-hover:scale-110 duration-150 h-full w-full object-cover'
          src={'/public/images/' + props.image}
          alt={props.path}
        />
        <div className='absolute w-full h-full flex items-end top-0 p-2 text-white text-[18px] sm:text-[20px] md:text-[22px] font-bold tracking-tighter bg-gradient-to-t from-black/60 to-transparent'>
          {props.path}
        </div>
      </div>
    </div>
  );
}
