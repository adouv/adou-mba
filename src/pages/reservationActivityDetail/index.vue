<template>
  <!--课程详情-->
  <div class="course-details">
    <div class="banner" v-if="detail.Cover!=undefined">
      <image :src="imageUrlBase+detail.Cover" mode="aspectFill"/>
    </div>
    <div class="product">
      <p class="product-name">{{detail.Name}}</p>
      <span class="present-price">¥{{detail.Price}}</span><span class="original-price">价值{{detail.PriceValue}}元</span>
    </div>
    <div class="product-introduction-box">
      <!--活动特点-->
      <div class=" global-title product-introduction">
        <h4 class="title">活动特点<i></i></h4>
        <div class="content">
          <div v-html="detail.Characteristics"></div>
        </div>
      </div>
      <!--活动时间-->
      <div class=" global-title product-introduction">
        <h4 class="title">活动时间<i></i></h4>
        <p class="content">
          {{detail.Time}} <span class="prompt">(需提前预约)</span>
        </p>
      </div>
      <!--活动地点-->
      <div class=" global-title product-introduction">
        <h4 class="title">活动地点<i></i></h4>
        <div class="content">
          <div v-html="detail.Address"></div>
        </div>
      </div>
      <!--活动嘉宾-->
      <div class=" global-title product-introduction">
        <h4 class="title">活动嘉宾<i></i></h4>
        <div class="content">
          <div v-html="detail.Guest"></div>
        </div>
      </div>
      <!--活动特点-->
      <div class=" global-title product-introduction">
        <h4 class="title">活动内容<i></i></h4>
        <div class="content">
          <div v-html="detail.Contents"></div>
        </div>
      </div>
      <!--预约需知-->
      <div class=" global-title product-introduction">
        <h4 class="title">预约需知<i></i></h4>
        <div class="content">
          <div v-html="detail.Notice"></div>
        </div>
      </div>
    </div>
    <div class="footer">
      <span class="present-price">¥ 0</span><span class="original-price">价值1800元</span>
      <span class="btn">
        <navigator :url="'/pages/orderForm/main?nid='+detail.Id">立即支付</navigator>
      </span>
    </div>
  </div>
</template>

<script>
import common from "../../common";
export default {
  name: "activityDetailsComponent",
  data() {
    return {
      msg: "课程详情",
      imageUrlBase: this.$imageUrl,
      detail: {}
    };
  },
  methods: {
    async getCourseDetail() {
      let url = "GetActivityDetailById.ashx";

      let urlArgs = common.UtilService.getCurrentPageUrlWithArgs();

      await this.$http(url, "GET", urlArgs).then(response => {
        this.detail = response;
        this.detail.type = urlArgs.type;
        const key = "courseDetail" + this.detail.Id;
        wx.setStorageSync(key, "");
        wx.setStorageSync(key, this.detail);
      });
    }
  },
  mounted() {
    this.getCourseDetail();
  },
  onShareAppMessage(res) {
    return {
      title: "B&Q教育",
      path: "/pages/activityDetails/main"
    };
  }
};
</script>

<style lang="sass" scoped>

</style>

