
<template>
    <!--干货-->
    <div class="ad-drygoods">
      <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
          <block v-for="(item, index) in movies" :index="index" :key="item.id">
              <swiper-item>
                <a href="http://www.baidu.com/">
                  <image :src="item.url" class="slide-image" mode="aspectFill" />
                </a>
              </swiper-item>
          </block>
      </swiper>
      <div class="drygoods-tab">
        <ul>
          <li class="current">
            <a>MBA</a>
          </li>
          <li>
            <a>MEM</a>
          </li>
        </ul>
      </div>
      <component :is="tabTo"></component>
    </div>
</template>

<script>
import mbaComponent from "@/pages/drygoodsMba";
import memComponent from "@/pages/drygoodsMem";
export default {
  name: "drygoodsComponent",
  components: {
    mba: mbaComponent,
    mem: memComponent
  },
  data() {
    return {
      msg: "干货",
      tabTo: "mba",
      movies: [
        {
          id: 1,
          url:
            "http://www.bqeducation.com/public/uploads/20180330/7f4d7b2d06bd73d49a05e59bb119b738.jpg"
        },
        {
          id: 2,
          url:
            "http://www.bqeducation.com/public/uploads/20180327/24c9cfb6bb4c0e1260370ca2c7ae3ce3.jpg"
        },
        {
          id: 3,
          url:
            "http://www.bqeducation.com/public/uploads/20180426/fed7f4060f3f2af6d1807263d490171a.jpg"
        },
        {
          id: 4,
          url:
            "http://www.bqeducation.com/public/uploads/20180327/68e6300c0e25773beabbcf5db7e5730d.jpg"
        },
        {
          id: 5,
          url:
            "http://www.bqeducation.com/public/uploads/20180327/cf684c9c10bda9a51330df3626ea8206.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>

</style>

