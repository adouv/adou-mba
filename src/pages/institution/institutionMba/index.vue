
<template>
    <!--院校-->
    <div class="ad-institution-mba">
        <ul>
        <li @click="openDetails(1)">
          <image src="http://www.bqeducation.com/public/uploads/20180410/8185075adf305d215c3ababfd0ab6e26.png" />
          <div>
            <h2>清华五道口金融学院<span>PBC School of Finance, Tsinghua University</span></h2>
            <ul>
              <li>学费：约60万人民币（其中康奈尔大学部分学费按照以美元结算，按当时汇率结算）</li>
              <li>招生人数：70人</li>
              <li>性质： 211 985 双一流</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/faf1d6d05c35d68b06867024bc061d4b.png" />
          <div>
            <h2>清华大学经济管理学院<span>Tsinghua University School of Economics and Manage</span></h2>
            <ul>
              <li>学费：2018清华—MIT全球MBA项目：19.8万元;2018清华MBA项目（在职）：30.8万元</li>
              <li>招生人数：385</li>
              <li>性质： 综合类</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/197ec92bfab5d22fd49ae5cbea4ebd38.jpg" />
          <div>
            <h2>北京大学光华管理学院<span>Guanghua School of Management</span></h2>
            <ul>
              <li>学费：全日制MBA项目(英文授课):18.8万元(分两年缴纳);全日制MBA项目(中文授课):18.8万元(分两年缴纳);非全日制MBA项目:29.8万元(分两年缴纳)。</li>
              <li>招生人数：400</li>
              <li>性质： 双一流211985111计划</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/1bf0d23cced09a9c05eb94b4ed1ccfb1.jpg" />
          <div>
            <h2>北大国家发展研究院<span>Beijing International MBA at Peking University</span></h2>
            <ul>
              <li>学费：北大-伦敦大学学院MBA（全日制+在职）学费为31万，北大-弗拉瑞克商学院MBA学费为26万/29万，北大-弗拉瑞克商学院MBA（体育产业与大健康）学费为36.8万。</li>
              <li>招生人数：150人</li>
              <li>性质： 双一流</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/b77c3b6644ce14921f70c9a9128a2727.jpg" />
          <div>
            <h2>中国人民大学<span>Renmin Unversity of China</span></h2>
            <ul>
              <li>学费：全日制(中文)： 15.8万;全日制(国际)：17.8万; 非全日制(普通班)：23.8万;非全日制(互联网金融方向班)：28.8万</li>
              <li>招生人数：400人</li>
              <li>性质： 双一流 2011计划 211 985 111计划</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/43b5e3239e5e7743cd1819d28d3851e8.jpg" />
          <div>
            <h2>中央财经大学<span>Central Unversity of Finance and Economic</span></h2>
            <ul>
              <li>学费：全日制10.8万；非全日制16.8万</li>
              <li>招生人数：382</li>
              <li>性质： 211 985</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/556e3f4c69c708b714d784531467fa9c.jpg" />
          <div>
            <h2>对外经济贸易大学<span>University of International Business and Economics</span></h2>
            <ul>
              <li>学费：国际MBA项目（全日制）：14.8万元；国际MBA项目（在职英文）：19.8万元；在职MBA项目（中文）：19.8万元。</li>
              <li>招生人数：230</li>
              <li>性质： 211</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/c4d0087834a93b832663feb2b73c2e93.jpg" />
          <div>
            <h2>北京理工大学<span>Beijing Institute of Technology</span></h2>
            <ul>
              <li>学费：全日制固定课程班学费9.6万，全日制选课班学费11.6万；非全日制在职班、国际班学费均暂定13.6万。</li>
              <li>招生人数：300</li>
              <li>性质： 双一流 2011计划 211 985 111计划</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/63d3e7914934b5f4d54a49ee144a29cc.jpg" />
          <div>
            <h2>北京师范大学<span>Beijing Normal University</span></h2>
            <ul>
              <li>学费：13.8万元</li>
              <li>招生人数：311</li>
              <li>性质： 双一流 2011计划 211 985 111计划</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/bb8c6d62de03e10b6d0ca0abeea97630.jpg" />
          <div>
            <h2>北京航空航天大学<span>Bei Hang University</span></h2>
            <ul>
              <li>学费：全日制MBA学费为9.8万，非全日制MBA学费为12.8万。</li>
              <li>招生人数：400</li>
              <li>性质： 双一流 2011计划 211 985 111计划</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/0a1c1057d365247f3da7e2d1ac8e393f.jpg" />
          <div>
            <h2>北京科技大学<span>University of Science &amp; Technology Beijing</span></h2>
            <ul>
              <li>学费：全日制学费6.8万元，非全日制学费7.8万（北京）/9万（深圳）。</li>
              <li>招生人数：250</li>
              <li>性质： 2011计划 211 985 111计划</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/9ca8b4ff04507f2b5b8bf80986cd5db5.jpg" />
          <div>
            <h2>北京交通大学<span>School of Economlcs and Management BeiJing Jiaoton</span></h2>
            <ul>
              <li>学费：全日制8.2万，非全日制12.6万</li>
              <li>招生人数：290</li>
              <li>性质： 2011计划 211</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/fbb58fe4df39fe1d288891a651c1b0d4.png" />
          <div>
            <h2>中国农业大学<span>China Agricultural University MBA Education Center</span></h2>
            <ul>
              <li>学费：综合班6万，国际班7万，期货班12.8万</li>
              <li>招生人数：150</li>
              <li>性质： 双一流 2011计划 211 985 111计划</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180316/4fcf78ad53157b1dd63b0d43536f5327.png" />
          <div>
            <h2>新华都商学院<span>New Huadu Business School</span></h2>
            <ul>
              <li>学费：创业非全日制MBA学费5.1万；瑞士MBA学费20万；国内MBA学费18万，瑞士文凭</li>
              <li>招生人数： 40</li>
              <li>性质： 无</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/dbbec2add568e42ddc00cb9082b25a66.jpg" />
          <div>
            <h2>北京邮电大学<span>Beijing Unversity of Posts Telecommunicationa</span></h2>
            <ul>
              <li>学费：全日制学费为7.8万，非全日制学费为10.8万</li>
              <li>招生人数：未公布</li>
              <li>性质： 211 111计划</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/0de47c85fa1482fd9aad5a78a45bed86.jpg" />
          <div>
            <h2>中国政法大学<span>MBA Education Center of University of Political Sc</span></h2>
            <ul>
              <li>学费：全日制（定向、非定向自选）12.9万，非全日制金融班（定向）19.8万。</li>
              <li>招生人数：185</li>
              <li>性质： 211 111计划</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/a0d044fc4deb2257c4fe527cf41d1e42.jpg" />
          <div>
            <h2>中国科学院大学<span>Graduate University of Chinese Academy of Sciences</span></h2>
            <ul>
              <li>学费：全日制（脱产班、集中班）9.8万，非全日制（金融班、创业班、综合班）13.6万。</li>
              <li>招生人数：280</li>
              <li>性质： 无</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/5b66537cea1f617dd85c22dc7a2ec760.jpg" />
          <div>
            <h2>中国社会科学院研究生院<span>Graduate School of Chinese Academy of Social Scien</span></h2>
            <ul>
              <li>学费： 11万元</li>
              <li>招生人数：180</li>
              <li>性质： 未知</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/467f9285637bddd637fb1727e60496c7.jpg" />
          <div>
            <h2>北京林业大学<span>Beijng Forestry University</span></h2>
            <ul>
              <li>学费：6.5万</li>
              <li>招生人数：90</li>
              <li>性质： 2011计划 211 985</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/3e482665e30a8ba700f681023da64abb.jpg" />
          <div>
            <h2>首都经济贸易大学<span>Capital University of Economics and Business</span></h2>
            <ul>
              <li>学费：全日制MBA/EMBA学费为6.8万，非全日制MBA/FMBA学费为8.9万。</li>
              <li>招生人数：140</li>
              <li>性质： 未知</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/3d54e761c801a01ff902640ca707175a.jpg" />
          <div>
            <h2>中国矿业大学<span>China University of Mining &amp; Technology,Beijing</span></h2>
            <ul>
              <li>学费：6万</li>
              <li>招生人数：158</li>
              <li>性质： 211 111计划</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/5e9e2c8981b2de821f8de57991f028d6.jpg" />
          <div>
            <h2>华北电力大学<span>North China Electric Power University</span></h2>
            <ul>
              <li>学费： 2.5万/年</li>
              <li>招生人数： 115</li>
              <li>性质： 211</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/ce0c5de9760849f51111ee8dd08f3832.jpg" />
          <div>
            <h2>北京工业大学<span>Beijing University of Technology</span></h2>
            <ul>
              <li>学费：非全日制学费6.6万元，全日制学费7.6万，均可分两年缴清。</li>
              <li>招生人数：未公布</li>
              <li>性质： 211 111计划</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/63da1a2bb151481fa3b25acd4763cafc.jpg" />
          <div>
            <h2>中国传媒大学<span>Communication University of China</span></h2>
            <ul>
              <li>学费：10.8万元，平均分两年缴清</li>
              <li>招生人数：180</li>
              <li>性质： 2011计划 211 985 111计划</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/73c2432bc93f34df14be53a5edfc57dc.jpg" />
          <div>
            <h2>中央民族大学<span>Minzu University of China</span></h2>
            <ul>
              <li>学费：培养费用：全日制50000元/人，按学年分两次缴纳;非全日制80000元/人，按学年分两次缴纳。</li>
              <li>招生人数： 70</li>
              <li>性质： 双一流 211 985</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/fb524d2137f503ca26aa3e9e77c9c07a.jpg" />
          <div>
            <h2>中国石油大学<span>CHINA UNIVERSITY OF PETROLEUM</span></h2>
            <ul>
              <li>学费：全日制MBA：学费每人5万元。非全日制MBA：学费每人8万元，可分期缴清。</li>
              <li>招生人数：140</li>
              <li>性质： 211 111计划</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/bb6a8a26d3ceb3e7271270ddd39f54c7.jpg" />
          <div>
            <h2>北京第二外国语学院<span>The School of International Economics and Trade</span></h2>
            <ul>
              <li>学费：7.2万</li>
              <li>招生人数：70</li>
              <li>性质： 未知</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/794050755c4fa6defd55551a3f5b116b.jpg" />
          <div>
            <h2>北京信息科技大学<span>BEIJING INFORMATION SCIENCE&amp;TECHNOLOGY; UNIVERSITY</span></h2>
            <ul>
              <li>学费：5.8 万元/人（不含教材和住宿费用），分两年收取。</li>
              <li>招生人数：90</li>
              <li>性质： 未知</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/9eac13904cc75f49f66014c96f906446.jpg" />
          <div>
            <h2>北京化工大学<span>Beijing University of Chemical Technology</span></h2>
            <ul>
              <li>学费：全日制(周一至周五上课)人民币6.6万(分批次缴清)；非全日制周末班(周六、日上课)人民币7.8万(分批次缴清)全日制10人，非全日制64人</li>
              <li>招生人数：74</li>
              <li>性质： 211 111计划</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/1dab1a7ba7a6ef86be10ae4cba2dce5f.jpg" />
          <div>
            <h2>北京建筑大学<span>School of Economics and Management Engineering</span></h2>
            <ul>
              <li>学费：全日制MBA5万元/人（不含教材和住宿费用），分两年收取，每次25000元。非全日制MBA5.8万元/人（不含教材和住宿费用），分两年收取，每次29000元。</li>
              <li>招生人数：80</li>
              <li>性质： 无</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/26fa23b15ebc9b6dc2c93e921d0a7dbf.jpg" />
          <div>
            <h2>中国地质大学<span>China University Of Geosciences,Beijing</span></h2>
            <ul>
              <li>学费：中国地质大学（ 北京）学费：公司战略与运营管理方向，7.8万元；珠宝商务方向：10.8万元；资源型企业经营管理方向：7.8万元。</li>
              <li>招生人数：100</li>
              <li>性质： 双一流 211 985 111计划</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/325240e7dc850f71d57be0c854e49e5b.jpg" />
          <div>
            <h2>北方工业大学<span>MBA Education Centre.NCUT</span></h2>
            <ul>
              <li>学费：6.8万元/生，包含全部培养费用。</li>
              <li>招生人数： 50</li>
              <li>性质： 无</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/12820c6582c48b666df8404e86f7391d.jpg" />
          <div>
            <h2>北京物资学院<span>BEIJING WUZI UNIVERSITY</span></h2>
            <ul>
              <li>学费：学费每人5万元人民币(不含教材和住宿费)，分两次缴纳，第一年2.5万元，第二年2.5万元。第一志愿报考北京物资学院MBA的考生，录取后学费优惠5%。</li>
              <li>招生人数：50</li>
              <li>性质： 无</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/0a668c1f88259bdd9b832e675072a4e2.jpg" />
          <div>
            <h2>复旦大学<span>School of Management Fudan Unversity</span></h2>
            <ul>
              <li>学费：国际MBA（与MIT合作）：26.98万，S3 Asia MBA：29.98万；非全日制：33.98万</li>
              <li>招生人数：800</li>
              <li>性质： 双一流 211 985</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180316/e16ed3bdc3f89cb5743a1d4a020119f5.png" />
          <div>
            <h2>南开大学<span>Nankai University MBA Center</span></h2>
            <ul>
              <li>学费：MBA(在职)学费标准：10.8万元；MBA(全日制)学费标准：8.64万元；国际MBA学费标准：10.8万元。</li>
              <li>招生人数：360</li>
              <li>性质： 双一流 2011计划 211 985</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/5facb88dced31ecac22f4a62049c0505.jpg" />
          <div>
            <h2>上海交大安泰经管学院<span>Shanghai Jiaotong University</span></h2>
            <ul>
              <li>学费：全日制中国全球运营领袖项目（CLGO）：29.8万人民币；全日制国际MBA项目（IMBA）：26.8万人民币；非全日制：32.8万人民币</li>
              <li>招生人数：600</li>
              <li>性质： 双一流 2011计划 211 985</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/1a76ea578d308625127f5bc90492a670.jpg" />
          <div>
            <h2>上海交大高级金融学院<span>Shanghai Advanced Institute offinance</span></h2>
            <ul>
              <li>学费：2018年全日制学费：33.8万元；在职制学费：42.8万元</li>
              <li>招生人数：200</li>
              <li>性质： 双一流 211 985</li>
            </ul>
          </div>
        </li>

        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/7e9e5278ef016c7985012c87f922ed2d.jpg" />
          <div>
            <h2>天津大学<span>MBA EDUCATION CENTER OF TIANJIN UNIVERSITY</span></h2>
            <ul>
              <li>学费：参考2017年：全日制MBA7.3万，中欧金融MBA班8.8万，卓越制造MBA7.3万，创业精英班7.3万。</li>
              <li>招生人数：450</li>
              <li>性质： 双一流 2011计划 211 985</li>
            </ul>
          </div>
        </li>
      </ul>
      <div class="btn-more">点击加载更多</div>
    </div>
</template>

<script>
export default {
  name: "institutionMbaComponent",
  props: ["tabItem"],

  data() {
    return {
      msg: "院校"
    };
  },
  methods: {
    openDetails(id) {
      var url = '../school/main';
      wx.navigateTo({url})
    },
    switchTab(item) {
      this.tabList.currentTab = item.id;
    }
  }
};
</script>

<style lang="sass" scoped>

</style>

