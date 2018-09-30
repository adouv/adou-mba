<template>
  <div class="hb-student">
    <!--背景图片-->
    <div class="title-bg">
      <div class="title-bg-img">
        <image src="http://www.bqeducation.com/public/static/zp/images/xyal_jtbanner.png" mode="aspectFill"/>
      </div>
    </div>
    <!--头像名字-->
    <div class="avatar-name">
      <div class="avatar" v-if="detail.BPic!=undefined">
        <image :src="imageUrlBase+detail.BPic" mode="aspectFill"/>
      </div>
      <div class="name">
        <h2>{{detail.Title}}<i>|</i><span>{{detail.Position}}</span></h2>
      </div>
      <div class="school">
        <p>录取院校：清华大学</p>
      </div>
    </div>
    <!--介绍-->
    <div class="introduce">
      <div v-html="detail.Contents"></div>
    </div>
  </div>
</template>

<script>
import common from '../../common'
export default {
  name: " studentComponent",
  data() {
    return {
      msg: "学员详情",
      imageUrlBase: this.$imageUrl,
      detail: {}
    };
  },
  methods: {
    async getArticleDetail() {
      let url = "GetArticleDetailById.ashx";

      let urlArgs = common.UtilService.getCurrentPageUrlWithArgs();

      await this.$http(url, "GET", urlArgs).then(response => {
        this.detail = response;
      });
    }
  },
  mounted() {
    this.getArticleDetail();
  },
  onShareAppMessage(res) {
    return {
      title: "B&Q教育",
      path: "/pages/exclusive/main"
    };
  }
};
</script>

<style lang="scss" scoped>
</style>

