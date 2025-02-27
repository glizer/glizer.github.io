import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import './styles/main.scss'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'

const head = createHead()
const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(head)
app.mount('#app')
