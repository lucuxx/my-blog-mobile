import './assets/rem'
import './assets/css/common.less'
import util from './utils/index.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {
  Icon,
  Button,
  NavBar,
  Tab,
  Tabs,
  Tabbar,
  TabbarItem,
  Sticky,
  Card,
  Tag,
  Toast,
  Loading,
} from 'vant'

Vue.use(Button)
  .use(Icon)
  .use(NavBar)
  .use(Tab)
  .use(Tabs)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Sticky)
  .use(Card)
  .use(Tag)
  .use(Toast)
  .use(Loading)

Vue.use(util)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
