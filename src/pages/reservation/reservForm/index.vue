<template>
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
</template>

<script>
export default {
  name: "reservFormComponent",
  props: ["tabItem"],
  data() {
    return {
      msg: "",
      form: {
        Name: "",
        Tel: "",
        School: "",
        Contents: ""
      }
    }
  },
  methods: {
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
      });
    }
  }
};
</script>

<style lang="sass" scoped>

</style>


