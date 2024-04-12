import React from 'react';

function InterestOpt({ id, text, image, onSelect, isSelected }) {
    const handleClick = () => {
        onSelect(id);
    };

    return (
        <button className={`text-center py-2 px-4 rounded-md border border-gray-200 ${
            isSelected ? 'border border-yellow-500 shadow-md ' : ''}`} onClick={handleClick}>
            <div className="flex gap-4 items-center w-[550px] max-lg:w-[250px]">
                <img src={process.env.PUBLIC_URL + '/' + image} alt="" className="h-12 w-12 rounded-lg" />
                <p className='font-medium text-gray-800'>{text}</p>
            </div>
        </button>
    );
}

export default InterestOpt;
