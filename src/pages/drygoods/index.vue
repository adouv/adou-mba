
<template>
    <!--干货-->
    <div class="ad-drygoods">
      <div class="banner">
        <image v-for="(item, index) in bannerList" :index="index" :key="item.Id" :src="imageUrlBase+item.Pic" mode="aspectFill" />
      </div>
      <div class="drygoods-tab">
        <ul>
          <li :class="tabList.currentTab==item.id?'current':''" v-for="(item,index) in tabList.item" :index="index" :key="item.id" @click="switchTab(item);">
            <div>{{item.text}}</div>
          </li>
        </ul>
      </div>
      <!--MBA\MEM-->
      <mba :tabItem="tabList.item[0]" v-if="tabList.currentTab==0"></mba>
      <mem :tabItem="tabList.item[1]" v-if="tabList.currentTab==1"></mem>
    </div>
</template>

<script>
import drygoodsMbaComponent from "@/pages/drygoodsMba";
import drygoodsMemComponent from "@/pages/drygoodsMem";
export default {
  name: "drygoodsComponent",
  components: {
    mba: drygoodsMbaComponent,
    mem: drygoodsMemComponent
  },
  data() {
    return {
      msg: "干货",
      imageUrlBase: this.$imageUrl,
      tabList: {
        currentTab: 0,
        item: [{ id: 0, text: "MBA" }, { id: 1, text: "MEM" }]
      },
      bannerList: []
    };
  },
  methods: {
    switchTab(item) {
      this.tabList.currentTab = item.id;
    },
    openDetails(id) {
      var url = "../student/main";
      wx.navigateTo({ url });
    },
    /**
     * 获取banner
     */
    getBannerList() {
      let url = "GetBannerList.ashx";

      let params = {
        tid: 2063
      };

      this.$http(url, "GET", params).then(response => {
        this.bannerList = response;
      });
    }
  },
  mounted() {
    this.getBannerList();
  },
  onShareAppMessage(res) {
    return {
      title: "B&Q教育",
      path: "/pages/drygoods/main"
    };
  }
};
</script>

<style lang="sass" scoped>

</style>

