
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '../../public/langs/en'
import ru from '../../public/langs/ru'

Vue.use(VueI18n)

export const messages = {
    en: {
        ...en
    },
    ru: {
      ...ru
    }
}

const i18n = new VueI18n({
    locale: "ru",
    messages
})
  
export default i18n