// App.js
import React, { useState } from 'react';
import Slider from './components/Slider';
import DescriptionForm from './components/DescriptionForm';
import InterestForm from './components/InterestForm';
import MsgFormOne from './components/MsgFormOne';
import MathForm from './components/MathForm';
import MsgFormSec from './components/MsgFormSec';
import LearningPath from './components/LearningPath';

function App() {
  const [step, setStep] = useState(0); 
  const [sliderProgress, setSliderProgress] = useState(0); 
  const [sliderVisible, setSliderVisible] = useState(true); 
  const maxStep = 5; 

  
  const handleNextStep = () => {
    if (step < maxStep) {
      setStep(step + 1);
      setSliderProgress((step + 1) * 20); 
      if (step === 4) {
        
        setSliderVisible(false);
        setStep(step + 1);
        setSliderProgress((step + 1) * 20);
      }
    }
  };

  
  const handlePrevStep = () => {
    if (step > 0) {
      setStep(step - 1);
      setSliderProgress((step - 1) * 20); 
      if (step === 3) {
        
        setSliderVisible(true);
      }
    }
  };

  
  const hideSlider = () => {
    setSliderVisible(false);
  };


  const renderStep = () => {
    switch (step) {
      case 0:
        return <DescriptionForm onNextStep={handleNextStep} />;
      case 1:
        return <InterestForm onNextStep={handleNextStep} onPrevStep={handlePrevStep} />;
      case 2:
        return <MsgFormOne onNextStep={handleNextStep} onPrevStep={handlePrevStep} />;
      case 3:
        return <MathForm onNextStep={handleNextStep} onPrevStep={handlePrevStep} />;
      case 4:
        return <MsgFormSec onNextStep={handleNextStep} onPrevStep={handlePrevStep} onHideSlider={hideSlider} />;
      case 5:
        return <LearningPath />;
      default:
        return null;
    }
  };

  return (
    <div>
      {sliderVisible && <Slider progress={sliderProgress} showBackButton={step > 0} onBack={handlePrevStep} />}
      {renderStep()}
    </div>
  );
}

export default App;
