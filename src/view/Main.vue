<template>
  <div id="renewMain">
    <navbar></navbar>
    <sidebar></sidebar>
    <div :style="mainstyle">
      <div class="viewDiv" :style="{height: screenHeight + 'px'}">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { mapGetters, mapMutations } from 'vuex'
  import 'font-awesome/css/font-awesome.css'
  import navbar from '../components/main/navbar.vue'
  import sidebar from '../components/main/sidebar.vue'
    export default {
        name: "main",
      data() {
        return {
          mainstyle:{
            'margin-left':"150px"
          },
          bodyWidth: document.body.clientWidth-186,//减去header的60px
          screenHeight: document.body.clientHeight-85,//减去header的60px
          isTabChange:false,
          isTabRemove:false,
          navTransform:0
        }
      },
      components: {
        sidebar,
        navbar
      }
    }
</script>

<style lang="scss">
  #scmain{
    height: calc(100%);
    .viewDiv{
      padding-top: 15px;
      overflow: auto;
    }
  }
</style>
