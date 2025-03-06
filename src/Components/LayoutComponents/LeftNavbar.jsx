
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
    const [categorys,setCategories]=useState([]);
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data.data.news_category));
    },[])

    return (
        <div>
            <h2 className='text-left font-bold mb-4 text-xl'>All Category: {categorys.length}</h2>
               <div className='flex flex-col items-start gap-2 '>
                {
                    categorys.map(singleCategory=><NavLink to={`/singleCategory/${singleCategory.category_id}`}  key={singleCategory.category_id} className='btn bg-gray-300 w-[150px]'>{singleCategory.category_name}</NavLink>)
                    
                }
                
               </div> 
        </div>
    );
};

export default LeftNavbar;