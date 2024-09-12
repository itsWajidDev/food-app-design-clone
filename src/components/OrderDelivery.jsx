import React, { useEffect, useState } from 'react'
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import Card from './Card';
export default function OrderDelivery() {


    const [order, setOrder] = useState([]);
    const [slide, setSlide] = useState(0);

    const apiD = async() =>{
        const response = await fetch('/restaurantChains.json');
        const data = await response.json()
        setOrder(data)
    }


    
  const slideNext = () =>{
    if(order.length - 3== slide) return false
    setSlide(slide + 1)
  }

  const prevSlide = () =>{
    if(slide == 0) return false
    setSlide(slide - 1)
  }



    useEffect(()=>{
        apiD()
       
    }, [])
  return (
   <>
   <div className='max-w-[1200px] mx-auto'>
   <div className='flex my-3 items-center justify-between'>
        <div className='text-[35px] my-10 font-bold	'>What's The Order Delivery Process?</div>
        <div className='flex'>
          <div className='cursor-pointer flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'  onClick={prevSlide}>
            <LuArrowLeft />
          </div>
          <div className='cursor-pointer flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={slideNext} >
            <LuArrowRight  />
          </div>
        </div>

 

   
        
      </div>

 <div className='mb-14 flex gap-6 overflow-hidden'>
     

   {order.map((d, i)=>{
 
            return( <div  className=' duration-500 z-10	 '
            
                style={{
                    transform: `translateX(-${slide * 100}%)`
                }}
                
                ><Card {...d} key={i} /> </div>)
   })}

 <Card />
 

    </div>
    <hr  className='my-6 bg-[#00000]'/>
    </div>
   
   
   
   </>
  )
}
