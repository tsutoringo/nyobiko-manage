import Vue from 'vue';
import App from './App.vue';
import Client from '@/Client';
import router from './router';
import { MdButton, MdContent, MdList, MdSubheader, MdIcon, MdDivider, MdAvatar, MdToolbar, MdApp, MdEmptyState, MdCheckbox, MdSwitch } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.prototype.$client = new Client();

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdList);
Vue.use(MdSubheader);
Vue.use(MdIcon);
Vue.use(MdDivider);
Vue.use(MdAvatar);
Vue.use(MdToolbar);
Vue.use(MdApp);
Vue.use(MdEmptyState);
Vue.use(MdCheckbox);
Vue.use(MdSwitch);

/* eslint-disable no-new */
new Vue({
	router,
	el: '#app',
	render: h => h(App)
});
