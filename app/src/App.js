import React, {useState, useContext} from 'react';
import { render } from 'react-dom';
import LangContext, { LangProvider } from '../context/langContext';
import ChooseLang from '../Components/ChooseLang';
import {StepperCustomer} from '../Components/stepper/stepperCustomer';
import "./style.css";

function App () {
    const [state, setState] = useState([]);
    const { lang, currentLangData } = useContext(LangContext);
    
    return (
        <div className="App">
            <h1>{currentLangData.app.h1}</h1>
            <ChooseLang/>
            <div className="containerApp">
                <StepperCustomer/>
            </div>
        </div>
    );
}

const application = (
    <LangProvider>
      <App/>
    </LangProvider>
  )
  
render(application, document.getElementById('root'));
