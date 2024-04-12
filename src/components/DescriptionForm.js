import React from 'react';
import profile from "./profile";
import DescOption from "./DescOption";

function DescriptionForm({ onNextStep }) {
    const [selectedOption, setSelectedOption] = React.useState(null);

    const handleOptionSelect = (optionId) => {
        setSelectedOption(optionId);
    };

    const handleContinue = () => {
        if (selectedOption !== null) {
            onNextStep();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center py-4">
            <div className="text-center mb-10 max-lg:mb-2">
                <h1 className="text-3xl font-bold mb-6 max-lg:text-2xl max-lg:mb-1">Which describes you best?</h1>
                <p className='text-gray-500  max-lg:text-sm '>This will help us personalize your experience.</p>
            </div>
            <div className="flex flex-col gap-4 max-lg:gap-1">
                {profile.map((ptype) => (
                    <DescOption
                        key={ptype.id}
                        {...ptype}
                        onSelect={handleOptionSelect}
                        isSelected={selectedOption === ptype.id}
                    />
                ))}
            </div>
            <button 
                onClick={handleContinue} 
                disabled={selectedOption === null} 
                className={`mt-6 px-14 py-3 rounded-md text-lg text-white lg:text-xl  ${selectedOption !== null ? 'bg-black' : 'bg-gray-300 opacity-50 '}`}>
                Continue
            </button>
        </div>
    );
}

export default DescriptionForm;
