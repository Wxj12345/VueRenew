<template>
  <div id="login">
    <b-container id="loginContainer">
      <b-row>
        <b-col sm="4" class="col-sm-offset-1">
          <div>
            <h1 class="titletext"></h1>
          </div>
          <div style="position: relative">
            <div class="widget-body" style="border-radius:3px;background: white">
              <div style="padding: 30px">
                <div class="login-title">用户登录</div>
                <label class="block">
                  <b-input-group>
                    <b-input-group-text slot="append">
                      <i class="appendicon fa fa-user"></i>
                    </b-input-group-text>
                    <FormatInput id="userinput" type="nospecial" v-model="username"  text="请输入用户名"></FormatInput>
                  </b-input-group>
                  <label class="errorlabel" v-show="userErrorShow">用户名不能为空!</label>
                </label>
                <label class="block">
                  <b-input-group>
                    <b-input-group-text slot="append">
                      <i class="appendicon fa fa-lock"></i>
                    </b-input-group-text>
                    <b-form-input type="password" v-model="password" id="pwdinput" @keyup.native.13="login" maxlength="16" placeholder="请输入密码"></b-form-input>
                  </b-input-group>
                  <label class="errorlabel" v-show="passwordErrorShow">{{loginerror}}</label>
                </label>
                <label class="block">
                  <b-button class="login-button" @click="login">登录</b-button>
                </label>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  //框架相关
  import Vue from 'vue'
  import { mapGetters, mapActions,mapMutations } from 'vuex'
  import 'font-awesome/css/font-awesome.css'
  export default {
    name: 'Login',
    data () {
      return {
        password :'',
        hotelShow:false,
        userErrorShow:false,
        passwordErrorShow:false,
        hotelErrorShow:false,
        hasGroupid:false,
        isFirefox:true,
        hasToken:false,
        empnoType:'SC',
        loginerror:'',
        username:''
      };
    },
    computed:{

    },
    created(){

    },
    methods:{
      login: function () {
        this.$router.push({path: "/main/Overview"})
      }
    },
    watch:{

    },
    components: {

    }
  }
</script>
<style lang="scss"  type="text/scss">
  #login{
    height:calc(100%);
    background-image: url('../../static/BGlogin.png');
    background-size: cover;

    #userinput{
      ime-mode:disabled;
      text-transform:uppercase;
    }
    .input-group > .form-control{
      height: 35px;
    }
    .container{
      padding-top:calc( (100vh - 350px)/2 )
    }
    .col-sm-offset-1{
      width: 375px;
      margin: 0 auto;
    }
    .appendicon{
      width: 20px
    }
    .block{
      width: 100%;
      margin-bottom: .9rem;
      .login-button{
        width: 100%;
        margin-top: 10px;
        border: none;
      }
      .login-button:focus,.login-button:hover{
        opacity: 0.9;
      }
      .hotel-input{
        cursor: pointer;
      }
      .hotel-input[readonly]{
        background-color: white;
      }
      .errorlabel{
        font-size: 0.9rem;
        color: red;
        padding-left: 5px
      }
    }
    .titletext
    {
      font-size: 1.7rem;
      color: white;
      text-align: center;
      margin-bottom: 25px;
    }
    .login-title{
      font-size:1.2rem;
      color:#4C8FBD;
      padding-bottom:10px;
    }
  }
</style>
