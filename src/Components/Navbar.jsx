import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between my-8'>
            <div></div>
            <div className='flex gap-4'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/carrer'>Career</Link>
            </div>
            <div className='flex gap-4'>
                <div>
                    <img src={profile} alt="" />
                </div>
                <div>
                    <button className='bg-black text-white px-8 py-2'>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;