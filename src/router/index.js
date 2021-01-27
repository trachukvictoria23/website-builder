import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

function lazyLoadView(view) {
	return () => import(`@/views/${view}.vue`);
}

const routes = [
	{
		path: '/',
		name: 'Login',
		component: lazyLoadView('Login'),
	},
	{
		path: '/registration',
		name: 'Registration',
		component: lazyLoadView('Registration'),
	},
	{
		path: '/home',
		name: 'Home',
		component: lazyLoadView('Home'),
	},
	{
		path: '/draft',
		name: 'Draft',
		component: lazyLoadView('Draft'),
	},
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

export default router;