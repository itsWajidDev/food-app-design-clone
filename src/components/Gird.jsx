import {React, useState, useEffect} from 'react'
import Card from './Card';
import NewCard from './NewCard';

export default function Gird() {

    const [categorys, setCategorys] = useState([]);
    // Fetch category data
    const fetchCategorys = async () => {
      let response = await fetch('/category.json');  // Fetch from public folder
      let data = await response.json();
      setCategorys(data);
    };
  
    useEffect(() => {
      fetchCategorys();
    }, []);
  
  return (
   <>
   
   <div className='max-w-[1200px] mx-auto'>
      <div className='flex my-3 items-center justify-between'>
        <div className='text-[35px] my-10 font-bold	'>Find All Available Items:

        </div>
        
        
      </div>
<div className='grid grid-cols-4 gap-3  mb-10    '>
      {categorys.map((ds, ii)=>{
        return(
 <NewCard {...ds} key={ii}  />
        )
      })}
       
       </div>
       <hr  className='my-6 bg-[#00000]'/> 
   </div>
   
   </>
  )
}
