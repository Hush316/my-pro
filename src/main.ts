import '@/assets/styles/index.css';
import 'uno.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
const app = createApp(App);

app.use(store);
app.use(router);
app.mount('#app');
