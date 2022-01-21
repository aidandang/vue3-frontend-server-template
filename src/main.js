import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// tailwindcss import
import './assets/css/app.css';

createApp(App).use(store).use(router).mount('#app');
