import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import InstantSearch from 'vue-instantsearch/vue3/es';

createApp(App,{props: ["index"]})
    .use(InstantSearch)
    .mount('#app')