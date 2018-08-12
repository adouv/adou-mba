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
.ad-exclusive {
  background: #f3f2ee;
  /*顶部banner轮播*/
  .exclusive-swiper {
    height: 400rpx;
    width: 100%;
    a {
      display: block;
      height: 400rpx;
      width: 100%;
    }
    image {
      height: 100%;
      width: 100%;
    }
  }
  /*超高通过率、协议保过、无理由退费保证*/
  .guarantee {
    background: #fff;
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: nowrap;
      border-bottom: 5px solid #cda353;

      li {
        width: 33.3%;
        height: 80px;
        text-align: center;
        position: relative;
        p {
          font-size: 23px;
          font-weight: bold;
          color: #cda353;
          margin-top: 10px;
        }
        span {
          font-size: 15px;
        }
        i {
          border-left: 1px solid #cda353;
          display: block;
          height: 60px;
          position: absolute;
          right: 0px;
          top: 10px;
        }
      }
      li:nth-child(1) {
        background: url("http://www.bqeducation.com/public/static/zp/images/a.png")
          no-repeat center center;
        background-size: 70px;
      }
      li:nth-child(2) {
        background: url("http://www.bqeducation.com/public/static/zp/images/b.png")
          no-repeat center center;
        background-size: 58px;
      }
      li:nth-child(3) {
        background: url("http://www.bqeducation.com/public/static/zp/images/c.png")
          no-repeat center center;
        background-size: 60px;
      }
    }
  }
  /*模块标题*/
  .exclusive-title {
    background: #fff;
    margin-top: 10px;
    padding-bottom: 20px;
    .title {
      padding-top: 10px;
      font-size: 18px;
      font-weight: bold;
      height: 30px;
      line-height: 30px;
      display: flex;
      text-indent: 40rpx;
      position: relative;
      i {
        display: block;
        border-left: 3px solid #cda353;
        height: 15px;
        position: absolute;
        top: 35rpx;
        left: 10px;
      }
    }
  }
  /*MBA双证研究生学历为什么如此受欢迎?*/
  .exclusive-mbaszyjs {
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      li {
        margin-top: 20px;
        width: 50%;
        text-align: center;
        image {
          width: 74px;
          height: 52px;
        }
        p {
          font-weight: bold;
          font-size: 18px;
          height: 35px;
          line-height: 35px;
        }
        span {
          display: block;
          font-size: 15px;
          color: #2f5c5e;
          line-height: 22px;
        }
      }
    }
  }
  /*选择博勤嘉成*/
  .exclusive-xzbqjc {
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      li {
        width: 43%;
        height: 125px;
        border: 3px solid #cda353;
        margin-top: 10px;
        padding: 5px;
        p {
          font-size: 15px;
          color: #336468;
          font-weight: bold;
        }
        i {
          display: block;
          border-top: 3px solid #cda353;
          width: 30px;
          margin: 10px 0;
        }
        span {
          display: block;
          line-height: 22px;
          font-size: 12px;
        }
      }
      li:nth-child(1),
      li:nth-child(3),
      li:nth-child(5),
      li:nth-child(7),
      li:nth-child(9) {
        margin-right: 10px;
      }
    }
  }
}
</style>

