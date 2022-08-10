import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './assets/css/argon-dashboard.css';
import './assets/css/argon-dashboard.min.css';
import './assets/css/nucleo-icons.css';
import './assets/css/nucleo-svg.css';

createApp(App).use(store).use(router).mount('#app')
