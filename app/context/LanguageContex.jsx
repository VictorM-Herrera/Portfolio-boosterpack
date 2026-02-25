'use client'

const { createContext, useState, useContext } = require("react")

const LanguageContext = createContext();

export function LanguageProvider({children}){
    const [lang, setLang] = useState('en');

    function toggleLanguage(){
        setLang((prev => (prev === 'en' ? 'es': 'en')));
    }
    return(
        <LanguageContext.Provider value={{lang,setLang,toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
  return useContext(LanguageContext);
}