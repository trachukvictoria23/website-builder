import Vue from 'vue'
import App from './App.vue'
import i18n from "./plugins/i18n";
import upperFirst from 'lodash.upperfirst';
import camelCase from 'lodash.camelcase';
import Vuelidate from 'vuelidate';
import router from './router/index';

Vue.use(Vuelidate);

const requireComponent = require.context(
	'./components/app',
	false,
	/App[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
	const componentConfig = requireComponent(fileName);
	const componentName = upperFirst(
		camelCase(
			fileName
				.split('/')
				.pop()
				.replace(/\.\w+$/, '')
		)
	);
	Vue.component(componentName, componentConfig.default || componentConfig);
});

export const bus = new Vue();
window.$bus = bus;

new Vue({
  el: "#app",
  i18n,
  router,
  render: (h) => h(App),
});

