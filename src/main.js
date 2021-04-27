import Vue from "vue";
import App from "./App.vue";
import i18n from "./plugins/i18n";
import upperFirst from "lodash.upperfirst";
import camelCase from "lodash.camelcase";
import Vuelidate from "vuelidate";
import router from "./router/index";
import store from "./store";
import { mask } from "vue-the-mask";
//import vuetify from '@/plugins/vuetify';


import { firestorePlugin } from "vuefire";
Vue.use(firestorePlugin);
import firebase from "firebase/app";
import "firebase/firestore";

/*const admin = require("firebase-admin");

const serviceAccount = require("../key.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL:
		"https://website-builder-d45ea-default-rtdb.europe-west1.firebasedatabase.app"
});
*/
export const db = firebase
	.initializeApp({
		projectId: "website-builder-d45ea"
		//databaseURL:
		//"https://website-builder-d45ea-default-rtdb.europe-west1.firebasedatabase.app/"
	})
	.firestore();

const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };

Vue.use(Vuelidate);
Vue.directive("mask", mask);

const requireComponent = require.context(
	"./components/app",
	false,
	/App[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
	const componentConfig = requireComponent(fileName);
	const componentName = upperFirst(
		camelCase(
			fileName
				.split("/")
				.pop()
				.replace(/\.\w+$/, "")
		)
	);
	Vue.component(componentName, componentConfig.default || componentConfig);
});

export const bus = new Vue();
window.$bus = bus;

new Vue({
	el: "#app",
	//vuetify,
	i18n,
	router,
	store,
	render: h => h(App)
});
