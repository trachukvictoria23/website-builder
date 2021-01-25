import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

function lazyLoadView(view) {
	return () => import(`@/views/${view}.vue`);
}

const routes = [
	{
		path: '/',
		name: 'login',
		component: lazyLoadView('Login'),
	},
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

export default router;