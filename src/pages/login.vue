<template>
    <div>
      <div class="loginhead">
        <span><img src="../assets/img/register.png" alt=""></span>
        <h2>登录</h2>
        <span><router-link to="/register">注册</router-link></span>
      </div>
      <section>
        <input class="put1" type="text" placeholder="手机号">
        <input class="put2" type="text" placeholder="密码"> <span> |  找回密码</span>
        <div class="line"></div>
        <router-link to="/"><input class="put3" type="button" value="登录"></router-link>
      </section>
      <div class="fastbtn"><a href="">使 用 快 捷 登 录</a> </div>
      <div class="otherbtn">
        <span></span>
        <span>其他方式登录</span>
        <span></span>
      </div>
      <div class="loginfoot">
        <a href=""><img src="../assets/img/login1.png" alt="">微信</a>
        <a href=""><img src="../assets/img/login2.png" alt="">一键登录</a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>
  @import "../assets/css/login.css";
</style>
