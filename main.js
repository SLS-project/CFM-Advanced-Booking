import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'

createApp(App).use(BootstrapVue3);
createApp(App).mount('#app')
const app = createApp(App);
// app.component('row', Row);
// app.component('column', Column);
// app.component('hidden', Hidden);


//import { useFetch } from '@vueuse/core'

app.use(BootstrapVue3);
app.mount('#app');