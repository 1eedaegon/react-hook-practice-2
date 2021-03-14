import React from "react"
import { useSetLang, useT } from "./LangContext"

export default () => {
    const setLang = useSetLang()
    const t = useT();
    return (
        <main>
            <h1>{t("Hello")}!</h1>
            <button onClick={() => setLang("es")}>{t("Translate")}</button>
        </main>
    )
}