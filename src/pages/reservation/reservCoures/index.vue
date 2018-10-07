<template>
    <!--课程-->
    <div class="ad-reserv-course">
       <ul>
         <li v-for="(item, index) in courseList" :index="index" :key="item.Id" :src="imageUrlBase+item.Pic">
           <image :src="imageUrlBase+item.Cover" mode="aspectFit" />
           <h2>{{item.Name}}</h2>
           <div>
             <div>{{item.Price}}元<span>价值{{item.PriceValue}}元</span></div>
             <div>
               <navigator :url="'/pages/courseDetails/main?nid='+item.Id+'&type=0'">立即预约</navigator>
             </div>
           </div>
         </li>
       </ul>
       <div class="btn-more"  @click="getCourseList(1)" v-if="flag">点击加载更多</div>
    </div>
</template>

<script>
export default {
  name: "reservCouseComponent",
  props: ["tabItem"],
  data() {
    return {
      msg: "课程",
      imageUrlBase: this.$imageUrl,
      courseList: [],
      pageIndex: 1,
      pageSize: 10,
      flag: true
    };
  },
  methods: {
    async getCourseList(pageIndex) {
      let url = "GetCourseListByCid.ashx";

      if (pageIndex != undefined) {
        this.pageIndex = this.pageIndex + 1;
      }

      let args = {
        cid: 2074,
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      };

      await this.$http(url, "GET", args).then(response => {
        let list = JSON.parse(response.list);
        if (pageIndex != undefined) {
          this.courseList = this.courseList.concat(list);
        } else {
          this.courseList = list;
        }
        this.flag = list.length > 0 ? true : false;
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


