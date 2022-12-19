import { createApp } from 'vue'
import './styles/index.css'

import routes from './router/index'
import App from './App.vue'
import iconfont from './components/iconfont.vue'

const app = createApp(App)

app.component('Iconfont', iconfont)

app.use(routes).mount('#app')
