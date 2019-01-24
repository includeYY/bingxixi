<template>
  <div class="form">
    <ul class="tab-group">
      <li class="tab active">
        <a href="#signup" data-toggle="tab">注册</a>
      </li>
      <li class="tab">
        <a href="#login" data-toggle="tab">登录</a>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane fade in active" id="signup">
        <h1>免费注册</h1>
        <form action="/" method="post">
          <div class="field-wrap">
            <input type="text" required autocomplete="off" placeholder="请输入用户名">
          </div>
          <div class="field-wrap">
            <input type="password" required autocomplete="off" placeholder="请输入密码">
          </div>
          <div class="field-wrap">
            <input type="password" required autocomplete="off" placeholder="确认密码">
          </div>
          <button type="submit" class="button button-block">注册</button>
        </form>
      </div>
      <div class="tab-pane fade" id="login">
        <h1>欢迎回来</h1>
        <form action="/" method="post">
          <div class="field-wrap">
            <input type="text" required autocomplete="off" placeholder="请输入用户名">
          </div>
          <div class="field-wrap">
            <input type="password" required autocomplete="off" placeholder="请输入密码">
          </div>
          <p class="forgot">
            <a href="#">Forgot Password?</a>
          </p>
          <button class="button button-block">登录</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/sign-up-login-form/js/index'
import '../assets/sign-up-login-form/css/style.css'

export default {
  name: 'LoginSignUp'
}
</script>
