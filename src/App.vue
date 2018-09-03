<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import 'font-awesome/css/font-awesome.css'
import './assets/iconfont/iconfont.css'
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Open Sans', sans-serif;
    h1,h2,h3{
      font-family: 'Open Sans', sans-serif;
    }
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height:100%;
  }
  body,span,input,label{
    font-family: 'Open Sans',sans-serif;
  }
  html, body{ margin:0; height:100%; }
  body{
    overflow-y: hidden;
  }
  input,table{
    font-size: 0.9rem;
  }
</style>
