import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createPinia } from 'pinia'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import 'bulma/css/bulma.min.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

createApp(App).use(store).use(router).use(pinia).mount('#app');
