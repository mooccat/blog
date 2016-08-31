<template>
  <div id="app">
  </div>
  <navbar></navbar>
  <router-view></router-view>

</template>

<script>
import Navbar from './components/Navbar'
import store from './vuex/store'

export default {
  components: {
    Navbar,
  },
  store,
}
</script>

<style>
  body{
    font-family: "Classic Grotesque W01", "Avenir Next", "Segoe UI", "Helvetica Neue", Arial, "Hiragino Sans GB", "PingFang SC", "Heiti SC", "Microsoft YaHei UI", "Microsoft YaHei", "Source   Sans", sans-serif;
    font-size: 18px;
    background-color: #F2F2F2;
  }

</style>
