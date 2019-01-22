<template>
  <div class="main">
    <img class="login-background" src="../assets/loginback2.png">
    <form :model="loginForm">
      <div class="form-div">
        <img class="icon" src="../assets/usericon.png">
        <input v-model="loginForm.username" name="username" class="form-input" placeholder="用户名" type="text">
      </div>
      <div class="form-div">
        <img class="icon" src="../assets/passwordicon.png">
        <input v-model="loginForm.password" name="password" class="form-input" placeholder="密码" type="password">
      </div>
      <div class="form-div">
        <img class="icon" :src="checkpassword">
        <input v-model="check" name="check" class="form-input" placeholder="确认密码" type="password">
      </div>
    </form>
    <button class="login-btn" @click="LoginUp">
      注 册
    </button>
    <p class="loginup"><router-link to='login' class="loginup">已有账号，去登录</router-link></p>
    <p class="tip">* 仅限忠门籍在榕乡亲注册</p>
  </div>
</template>

<script>
export default {
  name: 'Loginup',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      checkpassword: require('../assets/checkpassword.png'),
      check: ''
    }
  },
  computed: {
    userpassword() {
      return this.loginForm.password;
    }
  },
  watch: {
    userpassword(val) {
      this.checkpassword  = require('../assets/checkpassword.png')
      this.check = ''
    },

    check(val) {
      // console.log(this.check);
      if(this.check.length >= this.loginForm.password.length) {
        if(this.check == this.loginForm.password) {
          this.checkpassword = require('../assets/checkpassword1.png')
        }
        else {
          this.checkpassword = require('../assets/checkpassword2.png')
        }
      }
      else {
        this.checkpassword = require('../assets/checkpassword.png')
      }
    }
  },
  methods: {
    LoginUp: function() {
      // console.log(this.loginForm.username);
      // console.log(this.loginForm.password);

      if(this.loginForm.username == ''){
        alert('请输入用户名')
      }

      if(this.loginForm.username !='' && this.loginForm.password != '' && this.checkpassword == require('../assets/checkpassword1.png')) {
        this.axios({
          url: this.baseUrl + '/user/register',
          method: 'post',
          data: {
            "userName": this.loginForm.username,
            "userPass": this.loginForm.password
          }
        })
        .then(function(res) {
          //console.log(res);
        })
        .catch(function(error) {
          console.log(error);
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
  width: 79%;
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
