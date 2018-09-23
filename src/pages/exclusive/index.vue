<template>
    <!--独家-->
    <div class="ad-exclusive">
      <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
          <block v-for="(item, index) in bannerList" :index="index" :key="item.Id">
              <swiper-item>
                <a :href="item.Url">
                  <image :src="'http://localhost:54546/'+item.Pic" class="slide-image" mode="aspectFill" />
                </a>
              </swiper-item>
          </block>
      </swiper>
      <!--超高通过率、协议保过、无理由退费保证-->
      <div class="guarantee">
        <ul>
          <li>
            <p>93.3%</p>
            <span>超高通过率</span>
            <i></i>
          </li>
          <li>
            <p>100%</p>
            <span>协议保过</span>
            <i></i>
          </li>
          <li>
            <p>100%</p>
            <span>无理由退费保证</span>
          </li>
        </ul>
      </div>
      <!--MBA双证研究生学历为什么如此受欢迎-->
      <div class="global-title exclusive-mbaszyjs">
        <h2 class="title">
          MBA双证研究生学历为什么如此受欢迎?<i></i>
        </h2>
        <ul>
          <li v-for="(item, index) in mbaDoubelCertificateList" :index="index" :key="item.Id">
            <image :src="imageUrlBase+item.BPic" />
            <p>{{item.Title}}</p>
            <div class="v-html-div" v-html="item.Contents">
              {{item.Contents}}
            </div>
          </li>
        </ul>
      </div>
      <!--选择博勤嘉成-->
      <div class="global-title exclusive-xzbqjc">
        <h2 class="title">
          选择博勤嘉成<i></i>
        </h2>
        <ul>
          <li v-for="(item, index) in boQinList" :index="index" :key="item.Id">
            <p>{{item.Title}}</p>
            <i></i>
            <div class="v-html-div" v-html="item.Contents">
              {{item.Contents}}
            </div>
          </li>
        </ul>
      </div>
      <!--导师团队-->
      <div class="global-title exclusive-dstd">
        <h2 class="title">
          导师团队<i></i>
        </h2>
        <ul>
          <li v-for="(item, index) in MentorTeamList" :index="index" :key="item.Id">
            <image :src="imageUrlBase+item.BPic" />
            <p>{{item.Title}}</p>
            <span>{{item.Position}}</span>
            <span>{{item.School}}</span>
          </li>
        </ul>
      </div>
      <!--名校OFFER榜-->
      <div class="global-title exclusive-mxofferb">
        <h2 class="title">
          名校OFFER榜<i></i>
        </h2>
        <ul>
          <li v-for="(item, index) in FamousSchoolOfferList" :index="index" :key="item.Id">
            <image :src="imageUrlBase+item.BPic" />
            <image class="exclusive-school-logo" :src="imageUrlBase+item.SPic" />
            <h2>{{item.Title}}</h2>
            <p>录取人数:<span>{{item.Number}}人</span></p>
          </li>
        </ul>
      </div>
      <!--学员案例-->
      <div class="global-title exclusive-xyal">
        <h2 class="title">
          学员案例<i></i>
        </h2>
        <ul>
          <li @click="openDetails(item.Id)" v-for="(item, index) in StudentList" :index="index" :key="item.Id">
            <image :src="imageUrlBase+item.BPic" mode="aspectFill" />
            <h2><span>{{item.Title}}</span><i>|</i>{{item.Position}}</h2>
            <p>{{item.School}}</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: "exclusiveComponent",
  data() {
    return {
      msg: "独家",
      imageUrlBase: this.$imageUrl,
      //顶部轮播图
      bannerList: [],
      //MBA双证研究生学历为什么如此受欢迎
      mbaDoubelCertificateList: [],
      //选择博勤嘉成
      boQinList: [],
      //导师团队
      MentorTeamList: [],
      //名校OFFER榜
      FamousSchoolOfferList: [],
      //学员案例
      StudentList: []
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

      let params = {
        tid: 1
      };

      this.$http(url, 'GET', params).then(response => {
        this.bannerList = response;
      });
    },
    async getArticleList() {
      let url = "GetArticleListByCid.ashx";
      //MBA双证研究生学历为什么如此受欢迎
      await this.$http(url, 'GET', { cid: 2067 }).then(response => {
        this.mbaDoubelCertificateList = response;
      });
      //选择博勤嘉成
      await this.$http(url, 'GET', { cid: 2070 }).then(response => {
        this.boQinList = response;
      });
      //导师团队
      await this.$http(url, 'GET', { cid: 2082 }).then(response => {
        this.MentorTeamList = response;
      });
      //名校OFFER榜
      await this.$http(url, 'GET', { cid: 2068 }).then(response => {
        this.FamousSchoolOfferList = response;
      });
      //学员案例
      await this.$http(url, 'GET', { cid: 2069 }).then(response => {
        this.StudentList = response;
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
      path: "/pages/exclusive/main"
    };
  }
};
</script>

<style lang="scss" scoped>
</style>