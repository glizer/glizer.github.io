import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ru from './locales/ru.json'

const languages = ['ru', 'en'],
    defaultLang = languages[0],
    lang = (navigator.language || navigator.userLanguage).substr(0, 2) || defaultLang

export const i18n = createI18n({
    legacy: false,
    locale: languages.includes(lang) ? lang : defaultLang,
    messages: { en, ru }
})