<template>
  <div class="home">
    <!-- banner star -->
    <div class="banner">
      <div class="bg"></div>
      <div class="midder-wrapper">
        <h1>一站式企业网站服务解决方案</h1>
        <button>联系我们</button>
      </div>
    </div>
    <!-- banner end -->

    <!-- main star -->
    <div class="main">
      <div class="main-content">
        <h2>网站建设领域</h2>
        <div class="content-box">
          <p>企业官网</p>
          <p>营销型网站</p>
          <p>响应式网站</p>
          <p>手机网站</p>
        </div>
      </div>
      <div class="main-content">
        <h2>APP定制开发</h2>
        <div class="content-box">
          <p>iOS开发</p>
          <p>Android开发ss</p>
          <p>混合app开发</p>
        </div>
      </div>
      <div class="main-content">
        <h2>微信开发</h2>
        <div class="content-box">
          <p>小程序开发</p>
          <p>微信公众平台开发</p>
          <p>这里是修改</p>
        </div>
      </div>
    </div>
    <!-- main end -->
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="less" scoped>
.home {
  text-align: left;
  padding-top: 68px;
}
.banner {
  height: 600px;
  background: url('../../assets/images/banner.jpg') center center no-repeat;
  position: relative;

  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background: #000;
    opacity: .4;
  }
  h1 {
    color: #fff;
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    padding-top: 100px;
    position: relative;
    z-index: 200;
  }
  button {
    color: #fff;
    cursor: pointer;
    height: 44px;
    line-height: 44px;
    padding: 0;
    width: 160px;
    border-radius: 22px;
    position: absolute;
    left: 50%;
    bottom: 80px;
    z-index: 100;
    margin-left: -80px;
    background: none;
    border: 1px solid #fff;
    &:hover {
      color: #fff;
      background: #c15700;
      border: 1px solid #c15700;
    }
  }
}
.main-content {
  text-align: center;
  h2 {
    padding: 50px 0;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
  }
  p {
    font-size: 14px;
    line-height: 24px;
  }
}
</style>
