<template>
    <!--活动-->
    <div class="ad-reserv-course">
       <ul>
         <li v-for="(item, index) in courseList" :index="index" :key="item.Id" :src="imageUrlBase+item.Pic">
           <image :src="imageUrlBase+item.Cover" mode="aspectFit" />
           <h2>{{item.Name}}</h2>
           <div>
             <div>{{item.Price}}元<span>价值{{item.PriceValue}}元</span></div>
             <div>
               <navigator :url="'/pages/courseDetails/main?nid='+item.Id+'&type=1'">立即预约</navigator>
             </div>
           </div>
         </li>
       </ul>
       <div class="btn-more">点击加载更多</div>
    </div>
</template>
<script>
export default {
  name: "reservActivityComponent",
  props: ["tabItem"],
  data() {
    return {
      msg: "活动",
      imageUrlBase: this.$imageUrl,
      courseList: []
    };
  },
  methods: {
    async getCourseList() {
      let url = "GetCourseListByCid.ashx";
      await this.$http(url, "GET", { cid: 2075 }).then(response => {
        this.courseList = response;
      });
    }
  },
  mounted() {
    this.getCourseList();
  }
};
</script>

<style lang="sass" scoped>

</style>


