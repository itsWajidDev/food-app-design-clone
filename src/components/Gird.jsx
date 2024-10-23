import { React, useState, useEffect } from 'react';
import NewCard from './NewCard';

export default function Grid() {
  const [categories, setCategories] = useState([]);

  // Fetch category data
  const fetchCategories = async () => {
    let response = await fetch('/category.json'); // Fetch from public folder
    let data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <div className='max-w-[1200px] mx-auto px-4'>
        {/* Header Section */}
        <div className='flex my-3 items-center justify-between'>
          <div className='text-[28px] sm:text-[35px] my-6 font-bold'>
            Find All Available Items:
          </div>
        </div>

        {/* Responsive Grid Section */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10'>
          {categories.map((category, index) => (
            <NewCard {...category} key={index} />
          ))}
        </div>

        <hr className='my-6 bg-[#000]' />
      </div>
    </>
  );
}
