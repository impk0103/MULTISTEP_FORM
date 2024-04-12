
import React from 'react';

function MsgFormOne({ onNextStep}) {
    return (
        <div className='flex flex-col items-center justify-center gap-8 '>
            <div className="flex max-lg:flex-col gap-8 mt-20  items-center justify-center max-lg:pl-2 max-lg:mt-1">
                <div className="w-1/2 flex items-center justify-center">
                    <img src={process.env.PUBLIC_URL + '/images/message/m1.png'} alt="" className="pl-60 h-96 max-lg:pl-2 max-lg:h-52 max-lg:w-52" />
                </div>
                <div className="w-1/2 pr-52 flex flex-col gap-6 justify-center ">
                    <h2 className='text-3xl font-bold mb-6 max-lg:text-2xl max-lg:w-[250px] max-lg:text-center'>You're in the right place</h2>
                    <p className='font-medium text-base text-gray-800 max-lg:text-sm max-lg:w-[250px] '>Brillant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science & computer science.</p> 
                </div>
            </div>
            <button onClick={onNextStep}
            className="mt-6 px-14 py-3 rounded-md text-lg text-white bg-black"
            >Continue</button>
            
        </div>
    );
}

export default MsgFormOne;
