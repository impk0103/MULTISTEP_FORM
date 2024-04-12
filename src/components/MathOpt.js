import React from 'react';

function MathOpt({ id, title, text, image, onSelect, isSelected }) {
  const handleClick = () => {
    onSelect(id);
  };

  return (
    <button className={`text-center py-2 px-4 rounded-md border border-gray-200 mb-12 max-lg:mb-6 ${
      isSelected ? 'border border-yellow-500 shadow-md ' : ''}`} onClick={handleClick}>
      <div className="flex gap-2 flex-col max-lg:flex-row items-center justify-center max-lg:w-[280px] ">
        <img src={process.env.PUBLIC_URL + '/' + image} alt="" className="h-20 w-44 rounded-lg max-lg:h-10 max-lg:w-12" />
        <h2 className='font-medium text-[14px] text-gray-800'>{title}</h2>
        <p className='text-gray-400 mb-2 max-lg:mb-0'>{text}</p>
      </div>
    </button>
  );
}

export default MathOpt;
