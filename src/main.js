import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

import 'font-awesome/scss/font-awesome.scss'
import 'iconfontone/iconfont.css';
import './assets/scss/index.scss'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$store = store

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      'pages/logs/main',
      'pages/index/main',
      '^pages/exclusive/main',
      'pages/drygoods/main',
      'pages/drygoods/mba/main',
      'pages/drygoods/mem/main',
      'pages/reservation/main',
      'pages/reservation/reservForm/main',
      'pages/reservation/reservActivity/main',
      'pages/reservation/reservCoures/main',
      'pages/institution/main',
      'pages/institution/institutionMba/main',
      'pages/institution/institutionMem/main',
      'pages/course/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#ffffff',
      navigationBarTitleText: 'B&Q教育',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#333333",
      selectedColor: "#b4751c",
      backgroundColor: "#FFFFFF",
      borderStyle: "black",
      position: "bottom",
      list: [{
          pagePath: "pages/exclusive/main",
          text: "独家",
          tag: "exclusive",
          iconPath: "/static/img/dujia.png",
          selectedIconPath: "/static/img/dujia_select.png"
        },
        {
          pagePath: "pages/drygoods/main",
          text: "干货",
          tag: "drygoods",
          iconPath: "/static/img/ganhuo.png",
          selectedIconPath: "/static/img/ganhuo_select.png"
        },
        {
          pagePath: "pages/reservation/main",
          text: "预约",
          tag: "reservation",
          iconPath: "/static/img/yuyue.png",
          selectedIconPath: "/static/img/yuyue_select.png"
        },
        {
          pagePath: "pages/institution/main",
          text: "院校",
          tag: "institution",
          iconPath: "/static/img/yuanxiao.png",
          selectedIconPath: "/static/img/yuanxiao_select.png"
        },
        {
          pagePath: "pages/course/main",
          text: "课程",
          tag: "course",
          iconPath: "/static/img/kecheng.png",
          selectedIconPath: "/static/img/kecheng_select.png"
        }
      ]
    }
  }
}
