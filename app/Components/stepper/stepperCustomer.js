import React, {useCallback, useState, useEffect, useContext} from "react";
import LangContext from '../../context/langContext';
import RegisterCustomerForm from '../forms/registerCustomerForm';

export function StepperCustomer () {
  const [activeStep, setActiveStep] = useState(0); 
  const { stepperCustomer } = useContext(LangContext).currentLangData;

  const handleNext = (event) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handlePrev = (event) => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  return (
    <div className="Container">

      <div className="steps">
        <ul>
          <li className={activeStep === 0 ? "step active" : "step normal"} >
              <div className="bullet">1</div>
              <div className="divider-line divider-line-1"></div>
              <div className="step-text">{stepperCustomer.step1}</div>
          </li>
          <li className={activeStep === 1 ? "step active" : "step normal"}>
              <div className="bullet">2</div>
              <div className="divider-line divider-line-2"></div>
              <div className="step-text">{stepperCustomer.step2}</div>
          </li>
          <li className={activeStep === 2 ? "step active" : "step normal"}>
              <div className="bullet">3</div>
              <div className="step-text">{stepperCustomer.step3}</div>
          </li>
        </ul>
      </div>

      <RegisterCustomerForm 
            Step={activeStep} 
            OnHandleStepperNext={handleNext} 
            OnHandleStepperPrev={handlePrev} /> 
    </div>
  );
}
