<template>
  <!--课程详情-->
  <div class="course-details">
    <div class="banner">
      <image src="http://www.bqeducation.com/public/uploads/20180426/fed7f4060f3f2af6d1807263d490171a.jpg"
             mode="aspectFill"/>
    </div>
    <div class="product">
      <p class="product-name">珠宝设计作品集辅导试听课</p>
      <span class="present-price">¥ 0</span><span class="original-price">价值1800元</span>
    </div>
    <div class="product-introduction-box">
      <!--课程特点-->
      <div class=" global-title product-introduction">
        <h4 class="title">课程特点<i></i></h4>
        <p class="content">
          针对个人作品针对个人作品针对个人作品针对个人作品针对个人作品针对个人作品针对个人作品针对个人作品针对个人作品针对个人作品针对个人作品针对个人作品
        </p>
      </div>
      <!--授课时间-->
      <div class=" global-title product-introduction">
        <h4 class="title">授课时间<i></i></h4>
        <p class="content">
          周一至周日 9.30-18.00 <span class="prompt">(需提前预约)</span>
        </p>
      </div>
      <!--课程内容-->
      <div class=" global-title product-introduction">
        <h4 class="title">课程内容<i></i></h4>
        <p class="content">
          珠宝设计作品集试听课
          <span class="fr">1份  价值1800元</span>
        </p>
      </div>
      <!--课程特点-->
      <div class=" global-title product-introduction">
        <h4 class="title">课程特点<i></i></h4>
        <div class="content">
          <ul>
            <li>
              <p>授课方式</p>
              <p>1对1免受和远程授课1</p>
            </li>
            <li>
              <p>授课方式</p>
              <p>1对1免受和远程授课2</p>
            </li>

            <li>
              <p>授课方式</p>
              <p>1对1免受和远程授课</p>
            </li>
          </ul>
        </div>
      </div>

      <!--预约需知-->
      <div class=" global-title product-introduction">
        <h4 class="title">预约需知<i></i></h4>
        <div class="content">
          <ul>
            <li>
              <p class="prompt">授课方式</p>
              <p>·1对1免受和远程授课1</p>
            </li>
            <li>
              <p class="prompt">授课方式</p>
              <p>·1对1免受和远程授课2</p>
            </li>

            <li>
              <p class="prompt">授课方式</p>
              <p>·1对1免受和远程授课</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer">
      <span class="present-price">¥ 0</span><span class="original-price">价值1800元</span>
      <span class="btn">立即支付</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "courseDetailsComponent",
    data() {
      return {
        msg: "课程",
      };
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

