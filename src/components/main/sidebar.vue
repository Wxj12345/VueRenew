<template>
  <div id="sidebar" :style="{height: screenHeight + 'px'}">
    <b-nav vertical>
      <b-nav-item :to="menu.route" :class="getselect(menu)"  v-for="menu in menus" :key="menu.route" :style="{width: navwidth + 'px'}">
        <i class="menu-icon fa fa-fw" :class="menu.iconClass"></i>
        <span v-show="isClose" class="menu-text">{{menu.name}}</span>
      </b-nav-item>
    </b-nav>
  </div>
</template>
<script>
  // 框架相关
  import vue from 'vue'
  import { mapGetters, mapMutations } from 'vuex'
  import 'font-awesome/css/font-awesome.css'
   // 组件和参数
  export default {
    name: 'sidebar',
    data :function () {
      return {
        menus: [],
        isClose:true,
        toggleClass:"fa-angle-double-left",
        screenHeight: document.body.clientHeight+145,//减去header的60px
        navwidth:150
      }
    },
    computed: {

    },
    methods: {
      getselect: function (menu) {
        if(this.$route.path===menu.route){
          return "active"
        }
      },
    },
    mounted () {
        this.menus.push({ route: '/main/Overview', name: '概览',iconClass:"fa-list"});
        this.menus.push({ route: '/main/CustomerProcess', name: '客户处理',iconClass:"fa-clock-o fa-rotate-90"});
        this.menus.push({ route: '/main/FinancialConfirm', name: '款项确认',iconClass:"fa-registered"});
     },
  }
</script>
<style lang="scss">
  #sidebar{
    background-color: #f2f2f2;
    border-style: solid;
    border-color: #CCC;
    border-width: 0 1px 0 0;
    float: left;
    height: auto;
    position: relative;
    padding-left: 0;
    padding-right: 0;
    .sidebar-shortcuts{
      background-color: #fafafa;
      text-align: center;
      min-height: 40px;
      margin-bottom: 0;
      overflow: hidden;
      position: relative;
      border: 0 solid;
    }
    .sidebar-toggle{
      display: block;
      border-top: 1px solid #e5e5e5;
      border-bottom: 1px solid #e5e5e5;
      .fa{
        margin: 9px 0;
        padding: 0 5px;
        line-height: 18px;
        cursor: pointer;
        font-size: 14px;
        border-radius: 100%;
        border: 1px solid #BBB;
        position: relative;
        color: #AAA;
        background-color: #FFF;
        text-align: center;
      }
    }
    .nav{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      list-style: none;
      li:hover:before{
        content: "";
        position: absolute;
        top: -1px;
        left: 0;
        z-index: 1;
        height: 41px;
        width: 3px;
        max-width: 3px;
        overflow: hidden;
        background-color: #629cc9;
      }
      li.active:after{
        display: block;
        content: "";
        position: absolute;
        right: -2px;
        top: -1px;
        bottom: 0;
        z-index: 1;
        border: solid;
        border-width: 0 2px 0 0;
        border-color: #2b7dbc;
      }
      li:hover {
        a {
          background-color: #FFF;
          color: #266cad
        }
      }
      .active{
        a{
          background-color: #FFF;
          color: #266cad
        }
        a:after {
          display: block;
          content: "";
          position: absolute;
          right: 0;
          top: 4px;
          border:solid transparent;
          border-width: 14px 10px;
          border-right-color: #2b7dbc
        }
      }
    }
    .nav-item{
      display: block;
      position: relative;
      float: none;
      padding: 0;
      border-style: solid;
      border-width: 1px 0 0;
      border-color: #e5e5e5;
      a{
        padding: 10px;
        background-color: #f8f8f8;
        height: 39px;
        font-size: 0.9rem;
        color: #585858;
      }
    }
    .menu-icon{
      display: inline-block;
      min-width: 30px;
      vertical-align: sub;
      text-align: center;
      font-size: 1.2rem;
      font-weight: normal;
    }
  }
</style>
