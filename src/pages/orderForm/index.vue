<template>
    <div class="order-form">
        <div class="order-form-box">
            <div class="couse-name" v-if="detail.Cover!=undefined">
                <div>
                    <image :src="imageUrlBase+detail.Cover" mode="aspectFill"/>
                </div>
                <div>
                    <h2>{{detail.Name}}</h2>
                    <p>{{detail.Characteristics}}</p>
                </div>
            </div>

            <div class="couse-subtotal">
                <ul>
                    <li>
                        <span>小计</span>
                        <span>{{detail.Price}}元</span>
                    </li>
                    <li>
                        <span>数量</span>
                        <span>X1份</span>
                    </li>
                </ul>
            </div>

            <div class="order-form-info">
                <h2>请填写一下信息</h2>
                <ul>
                    <li>
                        <label>姓名</label>
                        <input type="text" name="name" id="name" v-model="form.Name" />
                    </li>
                    <li>
                        <label>电话号码</label>
                        <input type="text" name="contact" id="contact" v-model="form.Tel" />
                    </li>
                    <li>
                        <label>所在城市</label>
                        <input type="text" name="profession" id="profession" v-model="form.City" />
                    </li>
                    <li>
                        <label>意向专业</label>
                        <input type="text" name="profession" id="profession" v-model="form.Profession" />
                    </li>
                    <li>
                        <label>意向院校</label>
                        <input type="text" name="profession" id="profession" v-model="form.School" />
                    </li>
                    <li>
                        <div class="btn-more" @click="submitOrder()">立即提交</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import common from "../../common";
export default {
  name: "orderFormComponent",
  data() {
    return {
      imageUrlBase: this.$imageUrl,
      form: {
        Name: "",
        Tel: "",
        City: "",
        Profession: "",
        School: ""
      },
      detail: {}
    };
  },
  methods: {
    getCourseDetail() {
      let urlArgs = common.UtilService.getCurrentPageUrlWithArgs();
      const key = "courseDetail" + urlArgs.nid;
      this.detail = wx.getStorageSync(key);
    },
    submitOrder() {
      let url = "InsertOrder.ashx";

      if (this.form.Name == "" || this.form.Tel == "") {
        wx.showModal({
          title: "提示",
          content: "姓名和电话不能为空！",
          showCancel: false
        });
        return;
      }

      let args = {
        nid: this.detail.Id,
        CourseName: this.detail.Name,
        Name: this.form.Name,
        Tel: this.form.Tel,
        City: this.form.City,
        Profession: this.form.Profession,
        School: this.form.School,
        Type: this.detail.type,
        Quantity: "1",
        Subtotal: "0"
      };

      this.$http(url, "GET", args).then(response => {
        if (response == "ok") {
          wx.showToast({
            title: "成功",
            icon: "success",
            success: () => {
              let to =
                "/pages/courseDetails/main?nid=" +
                this.detail.Id +
                "&type=" +
                this.detail.type;
              setTimeout(() => {
                wx.navigateTo({ url: to });
              }, 500);
            }
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
  },
  mounted() {
    this.getCourseDetail();
  }
};
</script>

