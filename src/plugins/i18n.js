
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '../../public/langs/en'
import ukr from '../../public/langs/ukr'

Vue.use(VueI18n)

export const messages = {
    en: {
        ...en
    },
    ukr: {
      ...ukr
    }
}

const i18n = new VueI18n({
    locale: "ukr",
    messages
})
  
export default i18n