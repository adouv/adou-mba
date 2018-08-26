
<template>
    <!--预约-->
    <div class="ad-reservation">
      <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
          <block v-for="(item, index) in movies" :index="index" :key="item.id">
              <swiper-item>
                <a href="http://www.baidu.com/">
                  <image :src="item.url" class="slide-image" mode="aspectFill" />
                </a>
              </swiper-item>
          </block>
      </swiper>
      <div class="reservation-tab">
        <ul>
          <li :class="tabList.currentTab==item.id?'current':''" v-for="(item,index) in tabList.item" :index="index" :key="item.id" @click="switchTab(item);">
            <div>{{item.text}}</div>
          </li>
        </ul>
      </div>
      <!--MBA\MEM-->
      <reservCoures :tabItem="tabList.item[0]" v-if="tabList.currentTab==0"></reservCoures>
      <reservActivity :tabItem="tabList.item[1]" v-if="tabList.currentTab==1"></reservActivity>
      <reserv :tabItem="tabList.item[2]" v-if="tabList.currentTab==2"></reserv>
    </div>
</template>

<script>
import reservCoures from "@/pages/reservation/reservCoures";
import reservActivity from "@/pages/reservation/reservActivity";
import reserv from "@/pages/reservation/reserv";
export default {
  name: "reservationComponent",
  data() {
    return {
      msg: "预约",
      tabList: {
        currentTab: 0,
        item: [
          { id: 0, text: "课程" },
          { id: 1, text: "活动" },
          { id: 2, text: "预约" }
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
  }
};
</script>

<style lang="sass" scoped>

</style>

