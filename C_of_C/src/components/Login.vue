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
    <p class="loginup"><a>忘记密码</a><span class="break"> | </span><router-link to='loginup' class="loginup">注册账号</router-link></p>
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
          // url: this.baseUrl + '/user/login',
          url: '/api/user/login',
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
          if(res.status == 200) {
            this.$toast('登录成功');

            this.axios({
              // url: this.baseUrl + '/user/info',
              url: '/api/user/info',
              method: 'get',
              headers: {
                "S-TOKEN": this.$cookies.get('token')
              }
            })
            .then((res) => {
              //console.log(res.data.data);
              if(res.data.data.userInfoName != '') {
                setTimeout(function() {
                  _this.$router.push("/AddrList");
                }, 1500);
              }
            })
            .catch((error) => {
              setTimeout(function() {
                _this.$router.push({
                  path: "/Userinfo",
                  query: {
                    edit: 1
                  }
                });
              }, 1500);
            })

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
  padding: 0.16rem 0;
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
