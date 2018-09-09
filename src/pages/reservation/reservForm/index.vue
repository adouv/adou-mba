<template>
    <div class="ad-reservation-form">
      <ul>
        <li>
          <label>姓名</label>
          <input type="text" name="name" id="name" placeholder="请输入您的姓名" />
        </li>
        <li>
          <label>联系方式</label>
          <input type="text" name="contact" id="contact" placeholder="请输入您的电话/微信" />
        </li>
        <li>
          <label>意向院校</label>
          <input type="text" name="profession" id="profession" placeholder="请输入您的意向院校" />
        </li>
        <li>
          <label>留言</label>
          <textarea rows="20" cols="10" placeholder="有什么问题请讲"></textarea>
        </li>
        <li>
          <div class="btn-more">立即提交</div>
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
      msg: ""
    };
  }
};
</script>

<style lang="sass" scoped>

</style>


