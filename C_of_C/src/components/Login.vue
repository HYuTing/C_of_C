<template>
  <div class="main">
    <img class="login-background" src="../assets/loginback.png">
    <form>
      <div class="form-div">
        <img class="icon" src="../assets/usericon.png">
        <input class="form-input" placeholder="用户名" type="text">
      </div>
      <div class="form-div">
        <img class="icon" src="../assets/passwordicon.png">
        <input class="form-input" placeholder="密码" type="password">
      </div>
    </form>
    <button class="login-btn">
      登 录
    </button>
    <p class="loginup"><a>忘记密码</a><span class="break"> | </span><router-link to='loginup' class="loginup">注册账号</router-link></p>
    <p class="tip">* 仅限忠门籍在榕乡亲注册</p>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
}

.login-background {
  width: 100%;
}

.icon {
  width: 0.9rem;
  margin-right: 0.3rem;
  margin-bottom: -0.3rem;
}

.form-div {
  margin-bottom: 0.8rem;
}

.form-input {
  width: 64%;
  padding: 6px;
  font-size: 0.6rem;
  border: none;
  border-bottom: 1px solid #f38255;
}

.login-btn {
  width: 80%;
  padding: 6px 0;
  margin: 0.3rem 0;
  margin-bottom: 0.5rem;
  font-size: 0.6rem;
  border: none;
  border-radius: 1rem;
  background-color: #f38255;
  color: #fff;
}

.loginup {
  font-size: 0.46rem;
  color: #606266;
  text-decoration: none;
}

.break {
  margin: 0 0.3rem;
}

.tip {
  margin: 1rem auto;
  margin-bottom: 0.21rem;
  font-size: 0.46rem;
  color: #f38255;
}
</style>
