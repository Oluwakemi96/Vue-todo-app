import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TButton from '@/components/Button.vue'

const app =createApp(App)
app.component('TButton', TButton)
app.use(router)
app.use(store)
app.mount('#app')
