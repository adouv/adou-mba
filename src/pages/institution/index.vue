
<template>
    <!--院校-->
    <div class="ad-institution">
      <div class="banner">
        <image v-for="(item, index) in bannerList" :index="index" :key="item.Id" :src="imageUrlBase+item.Pic" mode="aspectFill" />
      </div>
        <div class="institution-tab">
        <ul>
            <li :class="tabList.currentTab==item.id?'current':''" v-for="(item,index) in tabList.item" :index="index" :key="item.id" @click="switchTab(item);">
              <div>{{item.text}}</div>
            </li>
            <li>
              <input type="text" name="key" id="key" placeholder="请输入相关搜索院校名称" /><span>搜索院校</span>
            </li>
        </ul>
        </div>
        <!--MBA\MEM-->
        <mba :tabItem="tabList.item[0]" v-if="tabList.currentTab==0"></mba>
        <mem :tabItem="tabList.item[1]" v-if="tabList.currentTab==1"></mem>
    </div>
</template>

<script>
import institutionMbaComponent from "@/pages/institution/institutionMba";
import institutionMemComponent from "@/pages/institution/institutionMem";
export default {
  name: "institutionComponent",
  components: {
    mba: institutionMbaComponent,
    mem: institutionMemComponent
  },
  data() {
    return {
      msg: "院校",
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
        tid: 2065
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
      path: "/pages/institution/main"
    };
  }
};
</script>

<style lang="sass" scoped>

</style>

