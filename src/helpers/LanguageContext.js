import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [spanish, setSpanish] = useState(true);

    // const changeLanguage=(language)=>{
    //     setLanguage(language)
    // }

    return(
        <LanguageContext.Provider value={[spanish, setSpanish]}>
            {children}
        </LanguageContext.Provider>
    )
}