import React from 'react';
import Header from '../Components/Header';
import Marque from '../Components/Marque';
import Navbar from '../Components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <Marque></Marque>
            <Navbar></Navbar>
        </div>
    );
};

export default HomeLayout;