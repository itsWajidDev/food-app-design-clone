import React from 'react'

export default function NewCard(props) {
  return (
    <div className='w-[270px] shrink-0 grow '>
        <div className=' group h-[180px] rounded-[15px] relative overflow-hidden'>
        <img className='group-hover:scale-110 duration-150 h-[280px] w-full object-cover' src={'/public/images/' +props.image} />
        <div className='image-overlay absolute w-full h-full flex items-end top-0 p-2 text-white text-[22px] font-bold tracking-tighter'>
            {props.path}
        </div>
        </div>



      </div>
  )
}
