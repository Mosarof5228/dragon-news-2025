import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-2'>
            <div>
                <img src={logo} alt="" />
            </div>
            <p className='text-gray-500 text-lg'>Journalism Without Fear or Favour</p>
            <div>
           <h2 className='font-semibold text-xl'> {moment().format("dddd, MMMM Do YYYY")}</h2>
            </div>
        </div>
    );
};

export default Header;