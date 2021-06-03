import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";
import en from "./translations/en.json";
import lt from "./translations/lt.json";

i18n
    .use(initReactI18next)
    .use(languageDetector)
    .init({
        resources: {
            en, lt
        },
        load: 'languageOnly',
        ns: [],
        fallbackLng: "en",
        whitelist: ["en", "lt"],
        interpolation: {
            escapeValue: false
        }
    })

export default i18n