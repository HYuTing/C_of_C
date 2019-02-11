<template>
  <div class="main">
    <img class="login-background" src="../assets/loginback.png">
    <form :model="loginForm">
      <div class="form-div">
        <img class="icon" src="../assets/usericon.png">
        <input v-model="loginForm.username" name="username" class="form-input" placeholder="用户名" type="text">
      </div>
      <div class="form-div">
        <img class="icon" src="../assets/passwordicon.png">
        <input v-model="loginForm.password" name="password" class="form-input" placeholder="密码" type="password">
      </div>
    </form>
    <button class="login-btn" @click="Login">
      登 录
    </button>
    <p class="loginup"><router-link to='loginup' class="loginup">注册账号</router-link></p>
    <p class="tip">* 仅限忠门籍在榕乡亲注册</p>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    Login: function() {
      var _this = this;
      if(_this.loginForm.username == '') {
        this.$toast('请输入用户名');
      }
      else if(_this.loginForm.password == '') {
        this.$toast('密码错误');
      }
      else {
        this.axios({
          url: this.baseUrl + '/user/login',
          // url: '/api/user/login',
          method: 'post',
          data: {
            "userName": this.loginForm.username,
            "userPass": this.loginForm.password
          }
        })
        .then((res) => {
          // console.log(res.headers);
          // console.log(res.headers['s-token']);
          this.$cookies.set('token', res.headers['s-token'], 3600*24);
          if(res.status === 200) {
            this.$toast('登录成功');
            // console.log(res.data.data.infoCheck);
            var infoCheck = res.data.data.infoCheck;
            if(infoCheck === true) {
              setTimeout(function() {
                _this.$router.push("/AddrList");
              }, 1500);
            }
            else {
              setTimeout(function() {
                _this.$router.push({
                  path: "/Userinfo",
                  query: {
                    edit: 1
                  }
                });
              }, 500);
            }
          }
        })
        .catch((error) => {
          console.log(error);
          this.$toast('账号或密码错误');
        })
      }
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
  width: 1rem;
  margin-right: 0.2rem;
  margin-bottom: -0.36rem;
}

.form-div {
  padding-left: 1.24rem;
  margin-bottom: 0.8rem;
  text-align: left;
}

.form-input {
  width: 66%;
  padding: 6px;
  font-size: 0.6rem;
  border: none;
  border-bottom: 1px solid #DCDFE6;
}

.login-btn {
  width: 80%;
  padding: 0.16rem 0;
  margin: 0.3rem 0;
  margin-bottom: 0.6rem;
  font-size: 0.6rem;
  border: none;
  border-radius: 1rem;
  background-color: #f39839;
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
  margin: 0.5rem auto;
  font-size: 0.46rem;
  color: #b74620;
}
</style>
