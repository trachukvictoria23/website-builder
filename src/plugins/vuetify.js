import Vue from 'vue';
import Vuetify from 'vuetify/lib';
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
import "@mdi/font/css/materialdesignicons.css";
Vue.use(Vuetify);
export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  theme: {
    themes: {
      light: {
        accent: "#26AE4D",
        anchor: "#26AE4D",
        error: "#FF5252",
        info: "#26AE4D",
        primary: "#26AE4D",
        secondary: "#26AE4D",
        success: "#4CAF50",
        warning: "#FB8C00"
      }
    }
  }
});