import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard';

const MiddleSingleNews = () => {
    const {data:news}=useLoaderData();
    return (
        <div>
            {
                news.map(singleNews=><NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>)
            }
        </div>
    );
};

export default MiddleSingleNews;