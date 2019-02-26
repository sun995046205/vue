<template>
  <div>
  <div class="registerhead">
    <span><img src="../assets/img/register.png" alt=""></span>
    <h2>注册</h2>
    <span><router-link to="/login">登录</router-link></span>
  </div>

  <section>
    <input class="put1" type="text" placeholder="手机号">
    <input class="put2" type="text" placeholder="短信验证码"> <span> |  获取验证码</span>
    <div class="line"></div>
    <router-link to="/login"><input class="put3" type="button" value="注册"></router-link>
  </section>
  <div class="foot">
    注册即表示同意 <a href="">《用户使用协议》</a>和<a href="">《知识产权协议》</a>
  </div>
  </div>
</template>

<script>
    export default {
        name: "register",
      data () { //注意：data即使不需要传数据，也必须return,否则会报错
        return {
          message: "啦啦啦啦啦",
          title: {}
        }
      }
    }
</script>

<style scoped>
  @import "../assets/css/register.css";
</style>
