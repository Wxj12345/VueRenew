// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import { Input, Badge, DatePicker, Select, Loading, Option, Tree, Table, TableColumn, Tabs, TabPane, Message, MessageBox, Upload, Dialog, Popover } from 'element-ui'
import axiosinstance from '../src/common/axiosinstance'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'element-ui/lib/theme-chalk/index.css'

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

Vue.use(BootstrapVue)
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$http = axiosinstance
/* eslint-disable no-new */
Vue.prototype.$message = Message

// 项目内组件
const requireComponent = require.context(
  // 其组件目录的相对路径
  './components/base',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)

  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 剥去文件名开头的 `'./` 和结尾的扩展名
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )
  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})

let sc = new Vue({
  el: '#app',
  store,
  router,
  render (h) {
    return h(App)
  }
})

Vue.use({ sc })
