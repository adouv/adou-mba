
<template>
    <!--预约-->
    <div class="ad-reservation">
      <div class="banner">
        <image v-for="(item, index) in bannerList" :index="index" :key="item.Id" :src="imageUrlBase+item.Pic" mode="aspectFill" />
      </div>
      <div class="reservation-tab">
        <ul>
          <li :class="tabList.currentTab==item.id?'current':''" v-for="(item,index) in tabList.item" :index="index" :key="item.id" @click="switchTab(item);">
            <div class="icon iconfont" :class="item.icon"><span>{{item.text}}</span></div>
          </li>
        </ul>
      </div>
      <!--MBA\MEM-->
      <course :tabItem="tabList.item[0]" v-if="tabList.currentTab==0"></course>
      <activity :tabItem="tabList.item[1]" v-if="tabList.currentTab==1"></activity>
      <div v-if="tabList.currentTab==2">
        <div class="ad-reservation-form">
          <ul>
            <li>
              <label>姓名</label>
              <input type="text" name="name" id="name" placeholder="请输入您的姓名" v-model="form.Name" />
            </li>
            <li>
              <label>联系方式</label>
              <input type="text" name="contact" id="contact" placeholder="请输入您的电话/微信" v-model="form.Tel" />
            </li>
            <li>
              <label>意向院校</label>
              <input type="text" name="school" id="school" placeholder="请输入您的意向院校" v-model="form.School" />
            </li>
            <li>
              <label>留言</label>
              <textarea rows="20" cols="10" name="contents" id="contents" placeholder="有什么问题请讲" v-model="form.Contents"></textarea>
            </li>
            <li>
              <div class="btn-more" @click="btnSubmit()">立即提交</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
import reservCouresComponent from "@/pages/reservation/reservCoures";
import reservActivityComponent from "@/pages/reservation/reservActivity";
import reservFormComponent from "@/pages/reservation/reservForm";
export default {
  name: "reservationComponent",
  components: {
    course: reservCouresComponent,
    activity: reservActivityComponent,
    form: reservFormComponent
  },
  data() {
    return {
      msg: "预约",
      imageUrlBase: this.$imageUrl,
      tabList: {
        currentTab: 0,
        item: [
          { id: 0, text: "课程", icon: "icon-kechengbiao" },
          { id: 1, text: "活动", icon: "icon-huodong" },
          { id: 2, text: "预约", icon: "icon-yuyue" }
        ]
      },
      form: {
        Name: "",
        Tel: "",
        School: "",
        Contents: ""
      },
      bannerList: []
    };
  },
  methods: {
    switchTab(item) {
      this.tabList.currentTab = item.id;
    },
    /**
     * 获取banner
     */
    getBannerList() {
      let url = "GetBannerList.ashx";

      let params = {
        tid: 2064
      };

      this.$http(url, "GET", params).then(response => {
        this.bannerList = response;
      });
    },
    btnSubmit() {
      let url = "InsertMessage.ashx";

      if (this.form.Name == "" || this.form.Tel == "") {
        wx.showModal({
          title: "提示",
          content: "姓名和电话不能为空！",
          showCancel: false
        });
        return;
      }

      let args = {
        Name: this.form.Name,
        Tel: this.form.Tel,
        School: this.form.School,
        Contents: this.form.Contents
      };

      this.$http(url, "GET", args).then(response => {
        if (response == "ok") {
          wx.showToast({
            title: "成功",
            icon: "error"
          });
        } else {
          console.log(response);
          wx.showToast({
            title: "失败",
            icon: "error"
          });
        }
        this.form = {
          Name: "",
          Tel: "",
          School: "",
          Contents: ""
        };
      });
    }
  },
  mounted() {
    this.getBannerList();
  },
  onShareAppMessage(res) {
    return {
      title: "B&Q教育",
      path: "/pages/reservation/main"
    };
  }
};
</script>

<style lang="sass" scoped>

</style>

