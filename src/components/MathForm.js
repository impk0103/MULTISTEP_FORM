// MathForm.js
import React, { useState } from 'react';
import math from "./math";
import MathOpt from "./MathOpt";

function MathForm({ onNextStep}) {
    const [selectedMath, setSelectedMath] = useState(null);

    const handleMathSelect = (mathId) => {
        setSelectedMath(mathId);
    };

    const handleContinue = () => {
        if (selectedMath !== null) {
            onNextStep();
        }
    };

    return (
        <div className="flex flex-col items-center justify-cente py-8 overflow-y-auto">
            <div className="text-center mb-10 max-lg:mb-2">
                <h1 className="text-3xl font-bold mb-8 max-lg:mb-2 max-lg:text-xl">What is your math comfort level?</h1>
                <p className='text-gray-800 mb-10 max-lg:mb-2'>Choose the highest level you feel confident in — you can always adjust later.</p>
            </div>
            <div className="flex gap-4 max-lg:flex-col max-lg:gap-1">
                {math.map((mtype) => (
                    <MathOpt
                        key={mtype.id}
                        {...mtype}
                        onSelect={handleMathSelect}
                        isSelected={selectedMath === mtype.id}
                    />
                ))}
            </div>
            <button onClick={handleContinue} disabled={selectedMath === null}
            className={`mt-6 px-14 py-3 rounded-md text-lg text-white  max-lg:mt-1  ${selectedMath !== null ? 'bg-black' : 'bg-gray-300 opacity-50 '}`}
            >Continue</button>
        </div>
    );
}

export default MathForm;
