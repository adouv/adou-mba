
<template>
    <!--课程-->
    <div class="ad-course">
      <div class="banner">
        <image v-for="(item, index) in bannerList" :index="index" :key="item.Id" :src="imageUrlBase+item.Pic" mode="aspectFill" />
      </div>
        <!--课程推荐-->
        <div class="global-title ad-course-tuijian">
          <h2 class="title">
            课程推荐<i></i>
          </h2>
          <ul>
            <li>
              <div>
                <i></i>
                <h2>清北人保过班</h2>
                <p>适合人群：</p>
                <p>学习时间有限</p>
                <p>笔试基础薄弱</p>
                <p>面试能力与经验不足</p>
                <span>课程详情</span>
              </div>
            </li>
            <li>
              <div>
                <i></i>
                <h2>清北人保过班</h2>
                <p>适合人群：</p>
                <p>学习时间有限</p>
                <p>笔试基础薄弱</p>
                <p>面试能力与经验不足</p>
                <span>课程详情</span>
              </div>
            </li>
            <li>
              <div>
                <i></i>
                <h2>清北人保过班</h2>
                <p>适合人群：</p>
                <p>学习时间有限</p>
                <p>笔试基础薄弱</p>
                <p>面试能力与经验不足</p>
                <span>课程详情</span>
              </div>
            </li>
            <li>
              <div>
                <i></i>
                <h2>清北人保过班</h2>
                <p>适合人群：</p>
                <p>学习时间有限</p>
                <p>笔试基础薄弱</p>
                <p>面试能力与经验不足</p>
                <span>课程详情</span>
              </div>
            </li>
            <li>
              <div>
                <i></i>
                <h2>清北人保过班</h2>
                <p>适合人群：</p>
                <p>学习时间有限</p>
                <p>笔试基础薄弱</p>
                <p>面试能力与经验不足</p>
                <span>课程详情</span>
              </div>
            </li>
            <li>
              <div>
                <i></i>
                <h2>清北人保过班</h2>
                <p>适合人群：</p>
                <p>学习时间有限</p>
                <p>笔试基础薄弱</p>
                <p>面试能力与经验不足</p>
                <span>课程详情</span>
              </div>
            </li>
          </ul>
        </div>
        <!--8项增值服务-->
        <div class="global-title ad-course-bxzzfw">
          <h2 class="title">
            8项增值服务<i></i>
          </h2>
          <ul>
            <li v-for="(item, index) in valueAddedServiceList" :index="index" :key="item.Id">
              <h2><i class="fa fa-heart"></i>{{item.Title}}</h2>
              <p>{{item.Summary}}</p>
            </li>
          </ul>
        </div>
        <!--独家配套教材-->
        <div class="global-title ad-course-djptjc">
          <h2 class="title">
            独家配套教材<i></i>
          </h2>
          <ul>
            <li v-for="(item, index) in supportingMaterialsList" :index="index" :key="item.Id">
              <image :src="imageUrlBase+item.BPic"  />
              <h2>{{item.Title}}</h2>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "courseComponent",
  data() {
    return {
      msg: "课程",
      imageUrlBase: this.$imageUrl,
      bannerList: [],
      valueAddedServiceList: [],
      supportingMaterialsList: []
    };
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

      let args = {
        tid: 2066
      };

      this.$http(url, "GET", args).then(response => {
        this.bannerList = response;
      });
    },
    async getArticleList() {
      let url = "GetArticleListByCid.ashx";

      await this.$http(url, "GET", { cid: 2080 }).then(response => {
        this.valueAddedServiceList = response;
      });

      await this.$http(url, "GET", { cid: 2081 }).then(response => {
        this.supportingMaterialsList = response;
      });
    }
  },
  mounted() {
    this.getBannerList();
    this.getArticleList();
  },
  onShareAppMessage(res) {
    return {
      title: "B&Q教育",
      path: "/pages/course/main"
    };
  }
};
</script>

<style lang="sass" scoped>

</style>

