<template>
  <div class="header">
    <div class="midder-wrapper">
      <div class="logo">
        <img src="../../assets/images/logo.png" height="68px" alt="">
      </div>
      <div class="tel-box">
        电话： 0755-12345678
      </div>
      <ul class="nav-list clearfix">
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/service">服务</router-link>
        </li>
        <li>
          <router-link to="/about">我们</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="less" scoped>
.header .router-link-exact-active.router-link-active {
  color: #c15700;
  font-weight: bold;
}
.header {
  width: 100%;
  height: 68px;
  line-height: 68px;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  .nav-list {
    float: right;
    margin-right: 40px;
    li {
      width: 98px;
      float: left;
      cursor: pointer;
      text-align: center;
      a {
        display: block;
        color: #000;
      }

      &:hover {
        background: #c15700;
        a {
          color: #fff;
        }
      }
    }
  }
  .logo {
    float: left;
    height: 68px;
    cursor: pointer;
  }
  .tel-box {
    color: #c15700;
    float: right;
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
