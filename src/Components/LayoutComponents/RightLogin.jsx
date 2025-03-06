import React from 'react';

const RightLogin = () => {
    return (
        
            <div>
                <h2 className='text-left mb-2 font-bold '>Login With</h2>
                <div className='space-y-2 *:w-full'>
                    <button className='btn btn-outline'>Login With Google</button>
                    <button className='btn btn-outline'>Login With Github</button>
                </div>
            </div>
       
    );
};

export default RightLogin;