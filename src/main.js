import { createApp } from 'vue';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.vue';
import router from './router';
import "./main.css";
import { createPinia } from 'pinia'
import "./ws"
const pinia = createPinia()



createApp(App).use(router).use(pinia).mount('#app');
