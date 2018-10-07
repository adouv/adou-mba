
<template>
    <!--院校-->
    <div class="ad-institution-mba">
        <ul>
          <li v-for="(item, index) in schoolList" :index="index" :key="item.Id" @click="openDetails(item.Id)">
            <image :src="imageUrlBase+item.Logo" />
            <div>
              <h2>{{item.Id}}{{item.Name}}<span>{{item.EnglishName}}</span></h2>
              <ul>
                <li>学费：{{item.Tuition}}（{{item.TuitionDescript}}）</li>
                <li>招生人数：{{item.Number}}人</li>
                <li>性质： {{item.Nature}}</li>
              </ul>
            </div>
          </li>
      </ul>
      <div class="btn-more" @click="getSchoolList(1);" v-if="flag">点击加载更多</div>
    </div>
</template>

<script>
export default {
  name: "institutionMemComponent",
  props: ["tabItem"],

  data() {
    return {
      msg: "院校",
      imageUrlBase: this.$imageUrl,
      schoolList: [],
      pageIndex: 1,
      pageSize: 10,
      flag: true
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
    getSchoolList(pageIndex) {
      let url = "GetSchoolListByCid.ashx";

      if (pageIndex != undefined) {
        this.pageIndex = this.pageIndex + 1;
      }

      let args = {
        cid: 2078,
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      };

      this.$http(url, "GET", args).then(response => {
        if (response) {
          let list = JSON.parse(response.list);
          if (pageIndex != undefined) {
            this.schoolList = this.schoolList.concat(list);
          } else {
            this.schoolList = list;
          }
          this.flag = list.length > 0 ? true : false;
        } else {
          this.flag = false;
        }
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

