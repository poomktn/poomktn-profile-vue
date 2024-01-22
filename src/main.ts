import { createApp } from "vue";
import App from "./App.vue";
import { Box } from './components'

createApp(App).component('Box', Box).mount("#app");
