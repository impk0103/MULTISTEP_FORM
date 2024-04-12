// InterestForm.js
import React, { useState } from 'react';
import interest from "./interest";
import InterestOpt from "./InterestOpt";

function InterestForm({ onNextStep, onPrevStep, step }) { 
    const [selectedInterest, setSelectedInterest] = useState(null);

    const handleInterestSelect = (interestId) => {
        setSelectedInterest(interestId);
    };

    const handleContinue = () => {
        if (selectedInterest !== null) {
            onNextStep();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center py-4">
            <div className="text-center mb-10 max-lg:w-[250px]">
                <h1 className="text-3xl font-bold mb-6 max-lg:text-2xl max-lg:mb-1">Which are you most interested in?</h1>
                <p className='text-gray-500 max-lg:text-sm'>Choose just one. This will help us get you started (but won't limit your experience)</p>
            </div>
            <div className="flex flex-col gap-4 max-lg:gap-1">
                {interest.map((itype) => (
                    <InterestOpt
                        key={itype.id}
                        {...itype}
                        onSelect={handleInterestSelect}
                        isSelected={selectedInterest === itype.id}
                    />
                ))}
            </div>
            <button onClick={handleContinue} disabled={selectedInterest === null}
            className={`mt-6 px-14 py-3 rounded-md text-lg text-white   ${selectedInterest !== null ? 'bg-black' : 'bg-gray-300 opacity-50 '}`}
            >Continue</button>
            {step > 0 && <button onClick={onPrevStep}>Back</button>} {/* Conditional rendering of back button */}
        </div>
    );
}

export default InterestForm;
