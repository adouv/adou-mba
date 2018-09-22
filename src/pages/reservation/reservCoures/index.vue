<template>
    <!--课程-->
    <div class="ad-reserv-course">
       <ul>
         <li @click="openDetails(1)">
           <image src="http://www.a-dou.com/mba/image/yuyue_kecheng1.png" mode="aspectFit" />
           <h2>1V1针对性评估30min</h2>
           <div>
             <div>0元<span>价值32850元</span></div>
             <div>立即预约</div>
           </div>
         </li>
         <li>
           <image src="http://www.a-dou.com/mba/image/yuyue_kecheng2.png" mode="aspectFit" />
           <h2>1V1针对性评估30min</h2>
           <div>
             <div>0元<span>价值32850元</span></div>
             <div>立即预约</div>
           </div>
         </li>
         <li>
           <image src="http://www.a-dou.com/mba/image/yuyue_kecheng3.png" mode="aspectFit" />
            <h2>1V1针对性评估30min</h2>
            <div>
              <div>0元<span>价值32850元</span></div>
              <div>立即预约</div>
            </div>
         </li>
         <li>
           <image src="http://www.a-dou.com/mba/image/yuyue_kecheng4.png" mode="aspectFit" />
            <h2>1V1针对性评估30min</h2>
            <div>
              <div>0元<span>价值32850元</span></div>
              <div>立即预约</div>
            </div>
         </li>
         <li>
           <image src="http://www.a-dou.com/mba/image/yuyue_kecheng5.png" mode="aspectFit" />
            <h2>1V1针对性评估30min</h2>
            <div>
              <div>0元<span>价值32850元</span></div>
              <div>立即预约</div>
            </div>
         </li>
         <li>
           <image src="http://www.a-dou.com/mba/image/yuyue_kecheng6.png" mode="aspectFit" />
            <h2>1V1针对性评估30min</h2>
            <div>
              <div>0元<span>价值32850元</span></div>
              <div>立即预约</div>
            </div>
         </li>
         <li>
          <image src="http://www.a-dou.com/mba/image/yuyue_kecheng7.png" mode="aspectFit" />
            <h2>1V1针对性评估30min</h2>
            <div>
              <div>0元<span>价值32850元</span></div>
              <div>立即预约</div>
            </div>
        </li>
       </ul>
       <div class="btn-more">点击加载更多</div>
    </div>
</template>

<script>
export default {
  name: "reservCouseComponent",
  props: ["tabItem"],
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    openDetails(id) {
      var url = '../courseDetails/main';
      wx.navigateTo({url})
    }
  }
};
</script>

<style lang="sass" scoped>

</style>


