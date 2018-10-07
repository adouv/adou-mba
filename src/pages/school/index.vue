<template>
  <div class="hb-school">
    <!--背景图片-->
    <div class="hb-school-box">
      <image class="bg" src="https://www.a-dou.com//wwwroot/images/xxkxq_banner.jpg" mode="aspectFill"/>
            <div class="school-info">
        <div class="school-logo" v-if="detail.Logo!=undefined">
          <image :src="imageUrlBase+detail.Logo" mode="aspectFill"/>
        </div>
        <!--学校名字-->
        <div class="school-name">
          <h2>{{schoolName}}</h2>
          <p>PBC School of Finance, Tsinghua University</p>
        </div>
        <!--学校通知-->
        <div class="school-notice">
          <p><span>地区</span><span>{{detail.Area}}</span></p>
          <p><span>性质</span><span>{{detail.Nature}}</span></p>
          <p><span>创办时间</span><span>{{detail.Time}}</span></p>
          <p><span>地址</span><span>{{detail.Address}}</span></p>
          <p><span>分数线类别</span><span>{{detail.ScoreLineType}}</span></p>
          <p><span>官网</span><span>{{detail.Url}}</span></p>
        </div>
      </div>
    </div>
    <!--招生信息-->
    <div class="school-student-info">
      <p><span>项目类别</span><span>{{detail.Type}}</span></p>
    </div>

    <div class="school-student-info">
      <p><span>学制</span><span>{{detail.SchoolSystem}}</span></p>
    </div>

    <div class="school-student-info">
      <p><span>是否接受调剂</span><span>{{detail.IsAdjust}}</span></p>
    </div>

    <div class="school-student-info">
      <p><span>是否开设提前面试</span><span>{{detail.IsEarlyInterview}}</span></p>
    </div>

    <div class="school-student-info">
      <p><span>招生人数</span><span>{{detail.Number}}</span></p>
    </div>

    <div class="school-introduce">
      <div class="title">
        学费
      </div>
      <div class="school-introduce-body school-content">
        {{detail.Tuition}}{{detail.TuitionDescript}}
      </div>
    </div>

    <div class="school-introduce">
      <div class="title">
        奖学金
      </div>
      <div class="school-introduce-body school-content">
        {{detail.Scholarship}}
      </div>
    </div>

    <div class="school-introduce">
      <div class="title">
        历年分数线
      </div>
      <div class="school-introduce-body school-content">
        {{detail.ScoreLine}}
      </div>
    </div>
    <!--介绍-->
    <div class="school-introduce">
      <div class="title">
        招生项目
      </div>
      <div class="school-introduce-body">
        <div v-html="detail.Project"></div>
      </div>
    </div>
    <div class="school-introduce">
      <div class="title">
        项目特色
      </div>
      <div class="school-introduce-body">
        <div v-html="detail.Project"></div>
      </div>
    </div>
  </div>
</template>

<script>
import common from "../../common";
export default {
  name: " schoolComponent",
  data() {
    return {
      msg: "学院详情",
      imageUrlBase: this.$imageUrl,
      schoolName: "清华大学",
      detail: {}
    };
  },
  methods: {
    async getSchoolDetail() {
      let url = "GetSchoolDetailById.ashx";

      let urlArgs = common.UtilService.getCurrentPageUrlWithArgs();

      await this.$http(url, "GET", urlArgs).then(response => {
        this.detail = response;
      });
    }
  },
  mounted() {
    this.getSchoolDetail();
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

