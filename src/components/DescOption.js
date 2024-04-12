import React from 'react';

function DescOption({ id, profile_type, text, image, onSelect, isSelected }) {
    const handleClick = () => {
        onSelect(id);
    };

    return (
        <button className={`text-center py-2 px-4 rounded-md border border-gray-200 ${
            isSelected ? 'border border-yellow-500 shadow-md ' : ''}`} onClick={handleClick}>
            <div className="flex gap-4 items-center w-[550px] max-lg:w-[250px]">
                <img src={process.env.PUBLIC_URL + '/' + image} alt="" className="h-12 w-12 rounded-lg" />
                <p className='text-gray-800 font-medium'>{profile_type} <span className='text-gray-400'>{text}</span></p>
            </div>
        </button>
    );
}

export default DescOption;
