<template>
  <div id="app">
  </div>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Hello from './components/Hello'

export default {
  components: {
    Navbar,
    Hello
  }
}
</script>

<style>
  body{
    font-family: "Classic Grotesque W01", "Avenir Next", "Segoe UI", "Helvetica Neue", Arial, "Hiragino Sans GB", "PingFang SC", "Heiti SC", "Microsoft YaHei UI", "Microsoft YaHei", "Source   Sans", sans-serif;
    font-size: 18px;
  }

</style>
