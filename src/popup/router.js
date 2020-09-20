import Vue from 'vue';
import Router from 'vue-router';
import index from './views/index.vue';
import pluginInfo from './views/pluginInfo.vue';

Vue.use(Router);

export default new Router({
	mode: 'hash',
	routes: [
		{
			path: '/',
			name: 'index',
			component: index
		}, {
			path: '/plugin/:id',
			name: 'pluginInfo',
			component: pluginInfo
		}
	]
});
