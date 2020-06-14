import React, { useContext } from 'react';
import  LangContext from '../context/langContext';

export default function ChooseLang() {
  const { lang, switchLang } = useContext(LangContext);

  const changeLang = (e) => {
    switchLang(e.target.value);
  };

  return (
    <div className="lang" name="Language">
        <select placeholder="langue" name="language" defaultValue={lang} onChange={changeLang} onBlur={changeLang} >
            <option key="01" value="en-US" {...lang === "en-US" ? "selected" : " "} name="english">EN</option>
            <option key="02" value="fr-FR" {...lang === "fr-FR" ? "selected" : " "} name="french">FR</option>
        </select>
    </div>
  )
}