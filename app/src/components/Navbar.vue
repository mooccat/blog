<template>
<nav class="navbar navbar-default navbar-fixed-top" style="border-top:5px solid #27ae60;">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">魚</a>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
      <ul class="nav navbar-nav">
        <li v-for="navItem in navItems"><a v-link="{name:navItem.name}">{{navItem.text}}</a></li>

        <!-- <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li> -->
      </ul>
     
    </div>
  </div>
</nav>
</template>
<style>


</style>
<script>
export default {
  data () {
    return {
      copyright:"Copyright © 2016 JHLiu.",
      a:"glyphicon glyphicon-home",
      navItems :[
        {
          text:"首页",
          name:"index"
        },
        {
          text:"关于",
        },
        {
          text:"留言",
        },
      ],
    }
  }
}
</script>