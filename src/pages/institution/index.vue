
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
      bannerList: [],
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
  methods: {
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

