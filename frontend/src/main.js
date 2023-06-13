import './assets/scss/main.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const config = {
  development: {
    api: 'http://localhost:3000',
  },
  production: {
    api: 'http://127.0.0.1:5000',
  },
};
createApp(App)
  .provide('api', config[import.meta.env.MODE || 'development'].api)
  .use(router)
  .mount('#app');
