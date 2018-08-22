import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: "干货",//当前页面标题
    //enablePullDownRefresh: false // 对应的子页面有下拉刷新功能
  }
}
