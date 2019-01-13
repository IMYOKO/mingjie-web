<template>
  <div id="app">
    <Header />
    <div class="container-wrapper">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  .container-wrapper {
    flex: 1;
  }
}
</style>
