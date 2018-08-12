import Vue from 'vue'
import App from './App'

import 'font-awesome/scss/font-awesome.scss'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', 'pages/index/main','^pages/exclusive/main','pages/drygoods/main','pages/reservation/main','pages/institution/main','pages/course/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#ffffff',
      navigationBarTitleText: 'MBA',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#333333",
      selectedColor: "#4287FF",
      backgroundColor: "#FFFFFF",
      borderStyle: "black",
      position: "bottom",
      list: [{
          pagePath: "pages/exclusive/main",
          text: "独家",
          tag: "exclusive"
        },
        {
          pagePath: "pages/drygoods/main",
          text: "干货",
          tag: "drygoods"
        },
        {
          pagePath: "pages/reservation/main",
          text: "预约",
          tag: "reservation"
        },
        {
          pagePath: "pages/institution/main",
          text: "院校",
          tag: "institution"
        },
        {
          pagePath: "pages/course/main",
          text: "课程",
          tag: "course"
        }
      ]
    }
  }
}
