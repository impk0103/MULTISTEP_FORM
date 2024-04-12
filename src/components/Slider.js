
import React from 'react';
import { MdKeyboardArrowLeft } from "react-icons/md";

function Slider({ progress, showBackButton, onBack }) {
  
  let greenWidth;
  switch (progress) {
    case 0:
      greenWidth = 20;
      break;
    case 20:
      greenWidth = 40;
      break;
    case 40:
      greenWidth = 60;
      break;
    case 60:
      greenWidth = 80;
      break;
    case 80:
      greenWidth = 100;
      break;
    default:
      greenWidth = progress <= 10 ? progress : progress - 10;
  }

  
  const handleBack = () => {
    onBack(); 
  };

  return (
    <div className={`flex justify-center items-center gap-[10px] m-8 max-lg:m-2 ${progress === 100 ? 'hidden' : ''}`}>
      {showBackButton && <button className="text-2xl" onClick={handleBack}><MdKeyboardArrowLeft className='text-4xl mt-2 max-lg:text-2xl' /></button>}
      <div className="bg-gray-200 w-[1200px] h-1 rounded-lg relative mt-2 ">
        <div className="bg-green-600 h-full absolute left-0 top-0 rounded-lg " style={{ width: `${greenWidth}%` }}></div>
      </div>
    </div>
  );
}

export default Slider;
