import * as i18n from "i18next";
import {initReactI18next} from "react-i18next";
import en from "./locales/en_US.json";
import ja_JP from "./locales/ja_JP.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en
    },
    ja_JP: {
      translation: ja_JP
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});


export default i18n;
