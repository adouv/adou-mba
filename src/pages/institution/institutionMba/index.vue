
<template>
    <!--院校-->
    <div class="ad-institution-mba">
      <ul>
        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/8185075adf305d215c3ababfd0ab6e26.png" />
          <div>
            <h2>
              清华五道口金融学院
              <span>PBC School of Finance,Tsinghua University</span>
            </h2>
            <ul>
              <li>学费：约60万人民币（其中康奈尔大学部分学费按照以美元结算，按当时汇率结算）</li>
              <li>招生人数：70人</li>
              <li>性质：211 985双一流</li>
            </ul>
          </div>
        </li>
        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/faf1d6d05c35d68b06867024bc061d4b.png" />
          <div>
            <h2>
              清华五道口金融学院
              <span>PBC School of Finance,Tsinghua University</span>
            </h2>
            <ul>
              <li>学费：约60万人民币（其中康奈尔大学部分学费按照以美元结算，按当时汇率结算）</li>
              <li>招生人数：70人</li>
              <li>性质：211 985双一流</li>
            </ul>
          </div>
        </li>
        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/197ec92bfab5d22fd49ae5cbea4ebd38.jpg" />
          <div>
            <h2>
              清华五道口金融学院
              <span>PBC School of Finance,Tsinghua University</span>
            </h2>
            <ul>
              <li>学费：约60万人民币（其中康奈尔大学部分学费按照以美元结算，按当时汇率结算）</li>
              <li>招生人数：70人</li>
              <li>性质：211 985双一流</li>
            </ul>
          </div>
        </li>
        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/1bf0d23cced09a9c05eb94b4ed1ccfb1.jpg" />
          <div>
            <h2>
              清华五道口金融学院
              <span>PBC School of Finance,Tsinghua University</span>
            </h2>
            <ul>
              <li>学费：约60万人民币（其中康奈尔大学部分学费按照以美元结算，按当时汇率结算）</li>
              <li>招生人数：70人</li>
              <li>性质：211 985双一流</li>
            </ul>
          </div>
        </li>
        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/b77c3b6644ce14921f70c9a9128a2727.jpg" />
          <div>
            <h2>
              清华五道口金融学院
              <span>PBC School of Finance,Tsinghua University</span>
            </h2>
            <ul>
              <li>学费：约60万人民币（其中康奈尔大学部分学费按照以美元结算，按当时汇率结算）</li>
              <li>招生人数：70人</li>
              <li>性质：211 985双一流</li>
            </ul>
          </div>
        </li>
        <li>
          <image src="http://www.bqeducation.com/public/uploads/20180410/43b5e3239e5e7743cd1819d28d3851e8.jpg" />
          <div>
            <h2>
              清华五道口金融学院
              <span>PBC School of Finance,Tsinghua University</span>
            </h2>
            <ul>
              <li>学费：约60万人民币（其中康奈尔大学部分学费按照以美元结算，按当时汇率结算）</li>
              <li>招生人数：70人</li>
              <li>性质：211 985双一流</li>
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
    switchTab(item) {
      this.tabList.currentTab = item.id;
    }
  }
};
</script>

<style lang="sass" scoped>

</style>

