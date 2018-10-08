<template>
    <!--活动-->
    <div class="ad-reserv-course">
       <ul>
         <li v-for="(item, index) in activityList" :index="index" :key="item.Id" :src="imageUrlBase+item.Pic">
           <image :src="imageUrlBase+item.Cover" mode="aspectFit" />
           <h2>{{item.Name}}</h2>
           <div>
             <div>{{item.Price}}元<span>价值{{item.PriceValue}}元</span></div>
             <div>
               <navigator :url="'/pages/reservationActivityDetail/main?nid='+item.Id+'&type=1'">立即预约</navigator>
             </div>
           </div>
         </li>
       </ul>
       <div class="btn-more"  @click="getActivityList(1)" v-if="flag">点击加载更多</div>
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
      activityList: [],
      pageIndex: 1,
      pageSize: 10,
      flag: true
    };
  },
  methods: {
    async getActivityList(pageIndex) {
      let url = "GetActivityListByCid.ashx";

      if (pageIndex != undefined) {
        this.pageIndex = this.pageIndex + 1;
      }

      let args = {
        cid: 2075,
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      };

      await this.$http(url, "GET", args).then(response => {
        let list = JSON.parse(response.list);
        if (pageIndex != undefined) {
          this.activityList = this.activityList.concat(list);
        } else {
          this.activityList = list;
        }
        this.flag = list.length > 0 ? true : false;
      });
    }
  },
  mounted() {
    this.getActivityList();
  }
};
</script>

<style lang="sass" scoped>

</style>


