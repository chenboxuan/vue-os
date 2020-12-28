import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from '@axios'
import VueAxios from 'vue-axios'
import Store from './store'
import '@/styles/common.less'

const app = createApp(App)

app.use(router).use(VueAxios, axios).use(Store).mount('#app')
