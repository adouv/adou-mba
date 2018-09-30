
<template>
    <!--院校-->
    <div class="ad-institution-mba">
        <ul>
        <li v-for="(item, index) in schoolList" :index="index" :key="item.Id" @click="openDetails(item.Id)">
          <image :src="imageUrlBase+item.Logo" />
          <div>
            <h2>{{item.Name}}<span>{{item.EnglishName}}</span></h2>
            <ul>
              <li>学费：{{item.Tuition}}（{{item.TuitionDescript}}）</li>
              <li>招生人数：{{item.Number}}人</li>
              <li>性质： {{item.Nature}}</li>
            </ul>
          </div>
        </li>
      </ul>
      <div class="btn-more">点击加载更多</div>
    </div>
</template>

<script>
export default {
  name: "institutionMbaComponent",
  props: ["tabItem"],

  data() {
    return {
      msg: "院校",
      imageUrlBase: this.$imageUrl,
      schoolList: []
    };
  },
  methods: {
    openDetails(id) {
      var url = "../school/main?nid=" + id;
      wx.navigateTo({ url });
    },
    switchTab(item) {
      this.tabList.currentTab = item.id;
    },
    getSchoolList() {
      let url = "GetSchoolListByCid.ashx";

      let args = { cid: 2077 };

      this.$http(url, "GET", args).then(response => {
        this.schoolList = response;
      });
    }
  },
  mounted() {
    this.getSchoolList();
  }
};
</script>

<style lang="sass" scoped>

</style>

