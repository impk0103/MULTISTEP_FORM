import React, { useState } from 'react';
import Spinner from "./Spinner";

function MsgFormSec({ onNextStep,onHideSlider }) {
  const [showSpinner, setShowSpinner] = useState(false);
  const [continueClicked, setContinueClicked] = useState(false);


  const handleContinueClick = () => {
    setContinueClicked(true);
    onHideSlider(); 
    setShowSpinner(true); 
    setTimeout(() => {
      setShowSpinner(false);
      onNextStep(); 
    }, 3000);
  };

  return (
    <div className='flex flex-col justify-center item-center gap-8 max-lg:gap-2'>
      <div className={`flex gap-8 mt-20 items-center justify-center max-lg:flex-col max-lg:mt-1 ${continueClicked ? 'hidden' : ''}`}>
        <div className="w-1/2 flex items-center justify-center">
          <img src={process.env.PUBLIC_URL + '/images/message/m2.png'} alt="" className="pl-60 h-96 max-lg:pl-2 max-lg:h-52 max-lg:w-52" />
        </div>
        <div className="w-1/2 pr-52 flex flex-col gap-6 max-lg:w-[250px] ">
          <h2 className='text-3xl font-bold mb-6  max-lg:text-2xl max-lg:w-[250px] max-lg:text-center max-lg:mb-1'>You're on your way!</h2>
          <img src={process.env.PUBLIC_URL + '/images/message/r2.png'} alt="" className="h-22 w-40 " />
          <p className='font-medium text-base text-gray-800 max-lg:text-sm  max-lg:w-[280px]'>Brillant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science & computer science.</p>
          <p className='font-medium text-base text-gray-800 max-lg:text-sm'>-Jacob.s</p>
        </div>
      </div>
      {showSpinner && <Spinner />} 
      <div className='w-[200px] mx-auto'>{!continueClicked && <button className="mt-6 px-14 py-3 max-lg:mt-1 rounded-md text-lg text-white bg-black"
       onClick={handleContinueClick}
       >Continue</button>}</div> 
    </div>
  );
}

export default MsgFormSec;
