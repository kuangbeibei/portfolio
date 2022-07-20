import { createContext, Dispatch, SetStateAction, useContext } from "react";

export interface LangContextInterface {
    lang: 'CH' | 'EN'
    setLang: Dispatch<SetStateAction<'CH' | 'EN'>>
}

const LangContext = createContext<LangContextInterface>({
    lang: 'CH',
    setLang: () => {}
});

export const useLangContext = () => useContext(LangContext)

export default LangContext
