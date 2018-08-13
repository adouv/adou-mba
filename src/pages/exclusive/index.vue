<template>
    <!--独家-->
    <div class="ad-exclusive">
      <swiper class="exclusive-swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
          <block v-for="(item, index) in movies" :index="index" :key="item.id">
              <swiper-item>
                <a href="http://www.baidu.com/">
                  <image :src="item.url" class="slide-image" mode="aspectFill" />
                </a>
              </swiper-item>
          </block>
      </swiper>
      <!--超高通过率、协议保过、无理由退费保证-->
      <div class="guarantee">
        <ul>
          <li>
            <p>93.3%</p>
            <span>超高通过率</span>
            <i></i>
          </li>
          <li>
            <p>100%</p>
            <span>协议保过</span>
            <i></i>
          </li>
          <li>
            <p>100%</p>
            <span>无理由退费保证</span>
          </li>
        </ul>
      </div>
      <!--MBA双证研究生学历为什么如此受欢迎-->
      <div class="exclusive-title exclusive-mbaszyjs">
        <h2 class="title">
          MBA双证研究生学历为什么如此受欢迎?<i></i>
        </h2>
        <ul>
          <li v-for="(item, index) in dataone" :index="index" :key="item.id">
            <image :src="item.url" />
            <p>{{item.title}}</p>
            <span v-for="(sub,j) in item.arr" :index="j" :key="j">
              {{sub}}
            </span>
          </li>
        </ul>
      </div>
      <!--选择博勤嘉成-->
      <div class="exclusive-title exclusive-xzbqjc">
        <h2 class="title">
          选择博勤嘉成<i></i>
        </h2>
        <ul>
          <li>
            <p>权威管理类联考备考导师</p>
            <i></i>
            <span>来自于国内外顶级商学院</span>
            <span>拥有世界500强企业职业背景</span>
            <span>多年执教和教育研究经验</span>
            <span>MBA院校面试官亲授</span>
          </li>
          <li>
            <p>ACE产品体系</p>
            <i></i>
            <span>名师教研组研发</span>
            <span>真正快速有效的学习方法</span>
            <span>深挖核心知识适合在职人员</span>
            <span>最大化学习成果为核心</span>
          </li>
          <li>
            <p>100%保过课程保障</p>
            <i></i>
            <span>原创教学大纲</span>
            <span>权威官方培训教材</span>
            <span>即时更新官方资讯</span>
          </li>
          <li>
            <p>专属教学服务系统</p>
            <i></i>
            <span>独家研发教务管理系统</span>
            <span>全程专属教务人员</span>
            <span>细致服务从备考评估</span>
            <span>到录取入学的每个环节</span>
          </li>
          <li>
            <p>STUDIO互动教学模式</p>
            <i></i>
            <span>真正以学生为中心</span>
            <span>源自于国际商学院教育体系</span>
            <span>小班教学&一对一辅导</span>
            <span>多元的授课方式</span>
          </li>
          <li>
            <p>精英限额招生体系</p>
            <i></i>
            <span>严格把控生源</span>
            <span>保证教学及服务质量</span>
            <span>开始你的商务升级之旅</span>
            <span>不仅是一个商学院入学资格</span>
          </li>
        </ul>
      </div>
      <!--导师团队-->
      <div class="exclusive-title exclusive-dstd">
        <h2 class="title">
          导师团队<i></i>
        </h2>
        <ul>
          <li>
            <image src="http://www.bqeducation.com/public//uploads/20180426/9a37f50d3f2bbf15da2143cf3db1a63c.jpg" />
            <p>秦老师</p>
            <span>博勤嘉成小城</span>
            <span>香港理工大学</span>
          </li>
          <li>
            <image src="http://www.bqeducation.com/public//uploads/20180426/4ba30063eeaa7fc929d7be706e15358c.jpg" />
            <p>孙老师</p>
            <span>数学高级讲师</span>
            <span>帝国理工大学</span>
          </li>
          <li>
            <image src="http://www.bqeducation.com/public//uploads/20180426/49d41dbdaa7872759332963bf63c1b1c.jpg" />
            <p>祝老师</p>
            <span>英语考研组组长</span>
            <span>英国谢菲尔德</span>
          </li>
          <li>
            <image src="http://www.bqeducation.com/public//uploads/20180426/19e7c92d000d6e0b00ff3c5a18862d88.jpg" />
            <p>张老师</p>
            <span>逻辑资深讲师</span>
            <span>中国人民大学博士</span>
          </li>
          <li>
            <image src="http://www.bqeducation.com/public//uploads/20180426/65ec205ee670fe85801a559dc97652f3.jpg" />
            <p>思聪老师</p>
            <span>面试研究院导师</span>
            <span>伦敦政治经济学院</span>
          </li>
          <li>
            <image src="http://www.bqeducation.com/public//uploads/20180426/33bc6a32f4f1ac053d7d01dbd9a1fcd1.jpg" />
            <p>王老师</p>
            <span>面试研究院导师</span>
            <span>香港科技大学</span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: "exclusiveComponent",
  data() {
    return {
      msg: "独家",
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
      ],
      dataone: [
        {
          id: 0,
          title: "提升学历水平",
          arr: ["教育部承认的", "正统研究生学历", "在职完成你的名校梦"],
          url: "http://www.bqeducation.com/public/static/zp/images/index_ts.png"
        },
        {
          id: 1,
          title: "加速职业发展",
          arr: ["系统学习管理类知识", "提高实践能力", "提升至更高的职业高度"],
          url: "http://www.bqeducation.com/public/static/zp/images/index_js.png"
        },
        {
          id: 2,
          title: "共享资源",
          arr: ["入学即享院校资源", "直接对世界500强企业", "各行业大佬精英"],
          url:
            "http://www.bqeducation.com/public/static/zp/images/index_gxzy.png"
        },
        {
          id: 3,
          title: "积分落户",
          arr: ["应届毕业生待遇", "集体户口福利", "北上广人才落户政策"],
          url:
            "http://www.bqeducation.com/public/static/zp/images/index_jflh.png"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>

