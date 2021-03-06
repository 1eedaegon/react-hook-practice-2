import React, { createContext, useContext, useState } from "react"

const LangContext = createContext()

const LangProvider = ({ defaultLang, children, translations }) => {
    const [lang, setLang] = useState(defaultLang)
    const simpleTranslate = (text) => {
        if (lang === defaultLang) {
            return text;
        } else {
            return translations[lang][text];
        }
    }
    return (
        <LangContext.Provider value={{ setLang, t: simpleTranslate }}>
            {children}
        </LangContext.Provider>
    )
}

export const useSetLang = () => {
    const { setLang } = useContext(LangContext);
    return setLang;
}

export const useT = () => {
    const { t } = useContext(LangContext)
    return t;
}

export default LangProvider;