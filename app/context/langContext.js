import React, { useState, useLayoutEffect } from 'react';

const LangContext = React.createContext({
  lang: '',
  currentLangData: {},
  switchLang: () => {},
});

export default LangContext;

export function LangProvider (props) {

  const [lang, setLang] = useState(window.localStorage.getItem('appUILang') || window.navigator.language || 'en-US');
  
  useLayoutEffect(() => {
    const selectedLang = window.localStorage.getItem('appUILang');

    if (selectedLang) {
      setLang(selectedLang);
    } 
  }, [lang])

  const switchLang = (ln) => {
    setLang(ln);
    window.localStorage.setItem('appUILang', ln);
  };

  return (
    <LangContext.Provider value={{
      lang, 
      switchLang, 
      currentLangData: langData[lang]
    }}>
      {props.children}
    </LangContext.Provider>
  );
};

const langData = {
  'en-US': {
    stepperCustomer: {
      step1: 'Benefiary',
      step2: 'Country currency',
      step3: 'Bank details',
    },
    app: {
      h1: 'BaLink Application'
    },
  },
  'fr-FR': {
    stepperCustomer: {
      step1: 'Bénéficiare',
      step2: 'Pays',
      step3: 'Données bancaires',
    },
    app: {
      h1: 'Application BaLink'
    },
  },
}