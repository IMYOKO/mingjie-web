<template>
  <div class="home">
    <!-- banner star -->
    <div class="banner">
      <button>联系我们</button>
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
  button {
    color: #c15700;
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
    border: 1px solid #c15700;
    &:hover {
      color: #fff;
      background: #c15700;
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
