import { createApp } from 'vue'
import App from './App.vue'
import { i18n } from '/@/i18n'
import router from './router'
import { setupStore } from '/@/store'
import './assets/font/iconfont.css'
import './assets/app.css'
import './index.css'

// vant组件引入
import { Button, Cell, CellGroup, Icon } from 'vant'

const app = createApp(App)
setupStore(app)

app.use(router)
app.use(i18n)
app.use(Button)
app.use(Cell)
app.use(CellGroup)
app.use(Icon)

app.mount('#app')
