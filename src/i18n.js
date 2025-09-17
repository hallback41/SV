import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en/translation.json'
import pl from './locales/pl/translation.json'
import ru from './locales/ru/translation.json'
import ua from './locales/ua/translation.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      ua: { translation: ua },
      pl: { translation: pl },
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // react уже экранирует HTML
    },
  })

export default i18n
