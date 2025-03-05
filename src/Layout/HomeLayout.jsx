import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Marque from '../Components/Marque';
import Navbar from '../Components/Navbar';

const HomeLayout = () => {
    const [categorys,setCategories]=useState([]);
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data.data.news_category));
    },[])

    // "category_id": "01",
// "category_name": "Breaking News"
    return (
        <div  className=' w-11/12 mx-auto font-serif'>
            <Header></Header>
            <Marque></Marque>
            <Navbar></Navbar>
           <main className='grid md:grid-cols-12'>
            <aside className='col-span-3'>
               <h2 className='text-left font-bold mb-4 text-xl'>All Category: {categorys.length}</h2>
               <div className='flex flex-col items-start gap-2 '>
                {
                    categorys.map(singleCategory=><button  key={singleCategory.category_id} className='btn bg-gray-300 w-[150px]'>{singleCategory.category_name}</button>)
                }
               </div>
            </aside>
            <section className='col-span-6'>
                middle side
            </section>
            <aside className='col-span-3'>Right side</aside>
           </main>
        </div>
    );
};

export default HomeLayout;