import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);

// import '@unocss/reset/tailwind.css'
// import 'uno.css'
import './index.css'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-green/theme.css'
import 'primeicons/primeicons.css'
import primevueComponent from './component.js'
// for (const key in primevueComponent) {
//     app.component(key, primevueComponent[key])
// }
// main.ts
// import 'virtual:uno.css'




app.use(PrimeVue, { ripple: true }).use(primevueComponent).mount('#app')
