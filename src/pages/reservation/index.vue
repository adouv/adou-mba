
<template>
    <!--预约-->
    <div class="ad-reservation">
      <div class="banner">
        <image src="http://www.bqeducation.com/public/uploads/20180426/fed7f4060f3f2af6d1807263d490171a.jpg" mode="aspectFill" />
      </div>
      <div class="reservation-tab">
        <ul>
          <li :class="tabList.currentTab==item.id?'current':''" v-for="(item,index) in tabList.item" :index="index" :key="item.id" @click="switchTab(item);">
            <div class="icon iconfont" :class="item.icon"><span>{{item.text}}</span></div>
          </li>
        </ul>
      </div>
      <!--MBA\MEM-->
      <course :tabItem="tabList.item[0]" v-if="tabList.currentTab==0"></course>
      <activity :tabItem="tabList.item[1]" v-if="tabList.currentTab==1"></activity>
      <form :tabItem="tabList.item[2]" v-if="tabList.currentTab==2"></form>
    </div>
</template>

<script>
import reservCouresComponent from "@/pages/reservation/reservCoures";
import reservActivityComponent from "@/pages/reservation/reservActivity";
import reservFormComponent from "@/pages/reservation/reservForm";
export default {
  name: "reservationComponent",
  components: {
    course: reservCouresComponent,
    activity: reservActivityComponent,
    form: reservFormComponent
  },
  data() {
    return {
      msg: "预约",
      tabList: {
        currentTab: 0,
        item: [
          { id: 0, text: "课程", icon: "icon-kechengbiao" },
          { id: 1, text: "活动", icon: "icon-huodong" },
          { id: 2, text: "预约", icon: "icon-yuyue" }
        ]
      },
      movies: [
        {
          id: 1,
          url:
            "http://www.bqeducation.com/public/uploads/20180330/7f4d7b2d06bd73d49a05e59bb119b738.jpg"
        },
        {
          id: 2,
          url:
            "http://www.bqeducation.com/public/uploads/20180327/24c9cfb6bb4c0e1260370ca2c7ae3ce3.jpg"
        },
        {
          id: 3,
          url:
            "http://www.bqeducation.com/public/uploads/20180426/fed7f4060f3f2af6d1807263d490171a.jpg"
        },
        {
          id: 4,
          url:
            "http://www.bqeducation.com/public/uploads/20180327/68e6300c0e25773beabbcf5db7e5730d.jpg"
        },
        {
          id: 5,
          url:
            "http://www.bqeducation.com/public/uploads/20180327/cf684c9c10bda9a51330df3626ea8206.jpg"
        }
      ]
    };
  },
  methods: {
    switchTab(item) {
      this.tabList.currentTab = item.id;
    }
  },
  onShareAppMessage(res) {
    return {
      title: "B&Q教育",
      path: "/pages/reservation/main"
    };
  }
};
</script>

<style lang="sass" scoped>

</style>

